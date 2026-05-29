import React, { useState, useEffect } from 'react';
import '../App.css';

function AddSalonModal({ onClose, onAddSalon, onUpdateSalon, salonToEdit }) {
  const [nombre, setNombre] = useState('');
  const [profesor, setProfesor] = useState('');
  const [alumnos, setAlumnos] = useState('');

  useEffect(() => {
    if (salonToEdit) {
      setNombre(salonToEdit.nombre);
      setProfesor(salonToEdit.profesor);
      setAlumnos(salonToEdit.alumnos);
    } else {
      setNombre('');
      setProfesor('');
      setAlumnos('');
    }
  }, [salonToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !profesor || !alumnos) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (salonToEdit) {
      const updatedSalon = {
        ...salonToEdit,
        nombre,
        profesor,
        alumnos,
      };
      onUpdateSalon(updatedSalon);
    } else {
      const newSalon = {
        id: `S${Math.floor(Math.random() * 900) + 100}`,
        nombre,
        profesor,
        alumnos,
      };
      onAddSalon(newSalon);
    }
    
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{salonToEdit ? 'Editar Salón' : 'Añadir Nuevo Salón'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Grado y Grupo</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: 5º Grado A" />
          </div>
          <div className="form-group">
            <label htmlFor="profesor">Profesor Titular</label>
            <input type="text" id="profesor" value={profesor} onChange={(e) => setProfesor(e.target.value)} placeholder="Nombre del profesor" />
          </div>
          <div className="form-group">
            <label htmlFor="alumnos">Nº de Alumnos</label>
            <input type="number" id="alumnos" value={alumnos} onChange={(e) => setAlumnos(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button type="button" className="button-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="button-primary">
              {salonToEdit ? 'Guardar Cambios' : 'Guardar Salón'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSalonModal;