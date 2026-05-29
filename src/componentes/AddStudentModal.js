import React, { useState, useEffect } from 'react';
import '../App.css';

// El modal ahora es más inteligente: puede crear o editar.
function AddStudentModal({ onClose, onAddStudent, onUpdateStudent, studentToEdit, selectedGrupo }) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [promedio, setPromedio] = useState('');

  useEffect(() => {
    if (studentToEdit) {
      setNombre(studentToEdit.nombre);
      setEdad(studentToEdit.edad || '');
      setPromedio(studentToEdit.promedio || '');
    } else {
      setNombre('');
      setEdad('');
      setPromedio('');
    }
  }, [studentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !edad || !promedio) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (studentToEdit) {
      const updatedStudent = {
        ...studentToEdit,
        nombre,
        edad,
        promedio,
      };
      onUpdateStudent(updatedStudent);
    } else {
      const newStudent = {
        nombre,
        edad,
        promedio,
      };
      onAddStudent(newStudent, selectedGrupo);
    }
    
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{studentToEdit ? 'Editar Alumno' : 'Añadir Nuevo Alumno'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="promedio">Promedio</label>
            <input type="number" step="0.01" id="promedio" value={promedio} onChange={(e) => setPromedio(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button type="button" className="button-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="button-primary">
              {studentToEdit ? 'Guardar Cambios' : 'Guardar Alumno'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudentModal;