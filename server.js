// ----------------- Backend (Servidor) -----------------
// Este archivo NO es parte de la aplicación de React.
// Es un servidor independiente que se ejecutará con Node.js.

// 1. Importar las librerías necesarias
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Necesario para permitir la comunicación entre el frontend y el backend

// 2. Configuración del servidor
const app = express();
const port = 3001; // Usamos un puerto diferente al de React (que suele ser 3000)

// 3. Middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite al servidor entender datos en formato JSON

// 4. Configuración de la conexión a la base de datos
// Usa las credenciales que me proporcionaste.
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "viopreventfn"
});

// 5. Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado exitosamente a la base de datos MySQL "viopreventfn"');
});

// 6. Definición de las rutas de la API (los "endpoints")

// --- API para Alumnos ---
// GET: Obtener todos los alumnos (de todas las tablas de grupos) - ESTA RUTA YA NO ES IDEAL, PERO LA MANTENEMOS POR AHORA
app.get('/api/alumnos', (req, res) => {
  // ... (el código existente se mantiene pero no lo usaremos)
  res.json([]); // Devolvemos un array vacío para no cargar todo por defecto
});

// NUEVA RUTA - GET: Obtener los alumnos de UN grupo específico
app.get('/api/alumnos/:grupoId', (req, res) => {
  const grupoId = req.params.grupoId;
  // Validamos el nombre de la tabla para evitar inyección SQL
  if (!grupoId.startsWith('grupo_')) {
    return res.status(400).send('Nombre de grupo no válido.');
  }
  
  const sql = `SELECT * FROM \`${grupoId}\``; // Usamos backticks para nombres de tabla con caracteres especiales
  
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(`Error al obtener los datos del grupo ${grupoId}`);
      return;
    }
    res.json(results);
  });
});

// POST: Añadir un nuevo alumno a un grupo específico
app.post('/api/alumnos/:grupoId', (req, res) => {
  const { grupoId } = req.params;
  const studentData = req.body;

  // Validamos el nombre de la tabla para evitar inyección SQL
  if (!grupoId.startsWith('grupo_')) {
    return res.status(400).send('Nombre de grupo no válido.');
  }

  // Asegúrate de que los nombres de las columnas (nombre, edad, promedio) coincidan con tu tabla
  const sql = `INSERT INTO \`${grupoId}\` (nombre, edad, promedio) VALUES (?, ?, ?)`;
  
  db.query(sql, [studentData.nombre, studentData.edad, studentData.promedio], (err, result) => {
    if (err) {
      console.error("Error en la base de datos:", err);
      return res.status(500).send(`Error al guardar el alumno en el grupo ${grupoId}`);
    }
    // Devolvemos el nuevo alumno con el ID que le asignó la base de datos
    res.status(201).json({ id: result.insertId, ...studentData });
  });
});

// PUT: Actualizar un alumno existente
app.put('/api/alumnos/:grupoId/:alumnoId', (req, res) => {
  const { grupoId, alumnoId } = req.params;
  const { nombre, edad, promedio } = req.body;

  if (!grupoId.startsWith('grupo_')) {
    return res.status(400).send('Nombre de grupo no válido.');
  }

  const sql = `UPDATE \`${grupoId}\` SET nombre = ?, edad = ?, promedio = ? WHERE id = ?`;

  db.query(sql, [nombre, edad, promedio, alumnoId], (err, result) => {
    if (err) {
      console.error("Error en la base de datos al actualizar:", err);
      return res.status(500).send('Error al actualizar el alumno.');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Alumno no encontrado.');
    }
    res.json({ message: 'Alumno actualizado correctamente' });
  });
});

// DELETE: Eliminar un alumno
app.delete('/api/alumnos/:grupoId/:alumnoId', (req, res) => {
  const { grupoId, alumnoId } = req.params;

  if (!grupoId.startsWith('grupo_')) {
    return res.status(400).send('Nombre de grupo no válido.');
  }

  const sql = `DELETE FROM \`${grupoId}\` WHERE id = ?`;

  db.query(sql, [alumnoId], (err, result) => {
    if (err) {
      console.error("Error en la base de datos al eliminar:", err);
      return res.status(500).send('Error al eliminar el alumno.');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Alumno no encontrado.');
    }
    res.json({ message: 'Alumno eliminado correctamente' });
  });
});


// --- API para Salones ---
// GET: Obtener todos los salones (basado en las tablas existentes)
app.get('/api/salones', (req, res) => {
  const sql = "SHOW TABLES LIKE 'grupo_%'";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener la lista de grupos');
      return;
    }
    // Transforma la lista de nombres de tabla en el formato que el frontend espera.
    const salones = results.map((row, index) => {
      const tableName = Object.values(row)[0];
      const grupoNumber = tableName.replace('grupo_', '');
      return {
        id: tableName, // Usamos el nombre de la tabla como ID único
        grupo: grupoNumber,
        alumnos: 'N/A',  // Necesitaríamos otra consulta para contar
      };
    });
    res.json(salones);
  });
});

// --- API para Reportes ---
// GET: Obtener todos los reportes
app.get('/api/reportes', (req, res) => {
  const sql = "SELECT * FROM reportes";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los reportes');
      return;
    }
    res.json(results);
  });
});

// Nuevas rutas para obtener datos relacionados con un reporte específico
app.get('/api/reportes/:id/testigos', (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM testigos WHERE id_reporte = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los testigos del reporte');
      return;
    }
    res.json(results);
  });
});

app.get('/api/reportes/:id/victimas', (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM victimas WHERE id_reporte = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener las víctimas del reporte');
      return;
    }
    res.json(results);
  });
});

app.get('/api/reportes/:id/victimarios', (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM victimarios WHERE id_reporte = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los victimarios del reporte');
      return;
    }
    res.json(results);
  });
});

// Ruta para obtener orientadores
app.get('/api/orientadores', (req, res) => {
  const sql = "SELECT * FROM orientadores";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los orientadores');
      return;
    }
    res.json(results);
  });
});

// --- API para Responsables ---
app.get('/api/responsables', (req, res) => {
  const sql = "SELECT * FROM responsables";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los responsables');
      return;
    }
    res.json(results);
  });
});

// --- API para Testigos ---
app.get('/api/testigos', (req, res) => {
  const sql = "SELECT * FROM testigos";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los testigos');
      return;
    }
    res.json(results);
  });
});

// --- API para Victimarios ---
app.get('/api/victimarios', (req, res) => {
  const sql = "SELECT * FROM victimarios";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los victimarios');
      return;
    }
    res.json(results);
  });
});

// --- API para Victimas ---
app.get('/api/victimas', (req, res) => {
  const sql = "SELECT * FROM victimas";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener las víctimas');
      return;
    }
    res.json(results);
  });
});

// --- API para Reportes Detallados ---
app.get('/api/reportes-detallados', (req, res) => {
  const sql = `
    SELECT 
      r.id_reporte, r.fecha, r.hora, r.lugar, r.descripcion, r.id_orientador,
      v.nombre AS nombre_victima, v.grado AS grado_victima, v.grupo AS grupo_victima,
      vm.nombre AS nombre_victimario, vm.grado AS grado_victimario, vm.grupo AS grupo_victimario,
      t.nombre AS nombre_testigo, t.grado AS grado_testigo, t.grupo AS grupo_testigo
    FROM reportes r
    LEFT JOIN victimas v ON r.id_victima = v.id_victima
    LEFT JOIN victimarios vm ON r.id_victimario = vm.id_victimario
    LEFT JOIN testigos t ON r.id_testigo = t.id_testigo
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener los reportes detallados:", err);
      res.status(500).send('Error al obtener los reportes detallados');
      return;
    }
    res.json(results);
  });
});


// 7. Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});