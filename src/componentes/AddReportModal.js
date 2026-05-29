import React, { useState } from 'react';
import './App.css';

// El modal ahora recibe la lista de alumnos como prop
function AddReportModal({ onClose, onAddReport, alumnos }) {
  // El estado 'alumno' ahora guardará el ID del alumno seleccionado.
  // Lo inicializamos con el ID del primer alumno de la lista, si existe.
  const [alumnoId, setAlumnoId] = useState(alumnos.length > 0 ? alumnos[0].id : '');
  const [fecha, setFecha] = useState(new Date().toISOString().slice(0, 10)); // Fecha de hoy por defecto
  const [tipo, setTipo] = useState('Conducta');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!alumnoId || !fecha || !descripcion) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    // Buscamos el nombre del alumno usando el ID que tenemos guardado
    const alumnoSeleccionado = alumnos.find(a => a.id === alumnoId);

    const newReport = {
      id: `R${Math.floor(Math.random() * 900) + 100}`, // ID aleatorio
      alumno: alumnoSeleccionado ? alumnoSeleccionado.nombre : 'Desconocido',
      fecha,
      tipo,
      estado: 'Pendiente', // Los nuevos reportes siempre están pendientes
    };
    onAddReport(newReport);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Registrar Nuevo Reporte</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="alumno">Alumno Implicado</label>
            {/* Reemplazamos el input de texto por un select */}
            <select id="alumno" value={alumnoId} onChange={(e) => setAlumnoId(e.target.value)}>
              {alumnos.map(alumno => (
                <option key={alumno.id} value={alumno.id}>
                  {alumno.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha del Incidente</label>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Incidente</label>
            <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="Conducta">Conducta</option>
              <option value="Académico">Académico</option>
              <option value="Social">Social</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción Detallada</label>
            <textarea
              id="descripcion"
              rows="4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Describe lo ocurrido..."
            ></textarea>
          </div>
          <div className="modal-actions">
            <button type="button" className="button-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="button-primary">
              Guardar Reporte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReportModal;