import React, { useState, useEffect } from 'react';
import '../App.css';

function Salones() {
  const [salones, setSalones] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoGrupo, setNuevoGrupo] = useState({ grupo: '', alumnos: '' });

  useEffect(() => {
    fetchSalones();
  }, []);

  const fetchSalones = () => {
    fetch('http://localhost:3001/api/salones')
      .then(response => response.json())
      .then(data => setSalones(data))
      .catch(error => console.error('Error al obtener los salones:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoGrupo({ ...nuevoGrupo, [name]: value });
  };

  const handleGuardarGrupo = () => {
    fetch('http://localhost:3001/api/salones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ grupo: nuevoGrupo.grupo }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      setModalVisible(false);
      setNuevoGrupo({ grupo: '', alumnos: '' }); // Limpiar el formulario
      fetchSalones(); // Recargar la lista de salones
    })
    .catch(error => {
      console.error('Error al guardar el nuevo grupo:', error);
    });
  };

  return (
    <>
      <div className="alumnos-container">
        <div className="alumnos-header">
          <h2>Gestión de Salones</h2>
          <button onClick={() => setModalVisible(true)} className="btn-primary">Añadir Grupo</button>
        </div>
        <table className="alumnos-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Grupo</th>
              <th>Alumnos</th>
            </tr>
          </thead>
          <tbody>
            {salones.map((salon) => (
              <tr key={salon.id}>
                <td>{salon.id}</td>
                <td>{salon.grupo}</td>
                <td>{salon.alumnos}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2>Añadir Nuevo Grupo</h2>
              <input
                type="text"
                name="grupo"
                placeholder="Nombre del Grupo"
                value={nuevoGrupo.grupo}
                onChange={handleInputChange}
              />
              <button onClick={handleGuardarGrupo}>Guardar</button>
              <button onClick={() => setModalVisible(false)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Salones;