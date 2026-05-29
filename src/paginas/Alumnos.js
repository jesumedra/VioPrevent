import React, { useState } from 'react';
import './App.css';
import AddStudentModal from './AddStudentModal'; // Importamos el modal

function Alumnos({ salones }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedGrupo, setSelectedGrupo] = useState(null);
  const [alumnos, setAlumnos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddStudent = (newStudent, grupoId) => {
    fetch(`http://localhost:3001/api/alumnos/${grupoId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent),
    })
    .then(res => res.json())
    .then(addedStudent => {
      setAlumnos(prev => [...prev, addedStudent]);
    })
    .catch(err => console.error("Error al añadir alumno:", err));
  };

  const handleUpdateStudent = (updatedStudent) => {
    const { id, nombre, edad, promedio } = updatedStudent;
    fetch(`http://localhost:3001/api/alumnos/${selectedGrupo}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, edad, promedio }),
    })
    .then(res => res.json())
    .then(() => {
      setAlumnos(prev => prev.map(s => s.id === id ? updatedStudent : s));
    })
    .catch(err => console.error("Error al actualizar alumno:", err));
  };

  const handleDeleteStudent = (alumnoId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar a este alumno?')) {
      fetch(`http://localhost:3001/api/alumnos/${selectedGrupo}/${alumnoId}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => {
        setAlumnos(prev => prev.filter(s => s.id !== alumnoId));
      })
      .catch(err => console.error("Error al eliminar alumno:", err));
    }
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };
  
  const handleGrupoClick = (grupoId) => {
    setSelectedGrupo(grupoId);
    setIsLoading(true);
    setAlumnos([]);

    fetch(`http://localhost:3001/api/alumnos/${grupoId}`)
      .then(res => res.json())
      .then(data => {
        setAlumnos(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar alumnos del grupo:", err);
        setIsLoading(false);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  return (
    <>
      <div className="alumnos-container">
        <div className="alumnos-header">
          <h2>Gestión de Alumnos</h2>
          <button 
            className="add-student-button" 
            onClick={() => setIsModalOpen(true)}
            disabled={!selectedGrupo} // Deshabilitamos si no hay grupo seleccionado
          >
            + Añadir Alumno
          </button>
        </div>

        {/* Pestañas de Grupos */}
        <div className="grupos-tabs">
          {salones.map(salon => (
            <button 
              key={salon.id} 
              className={`grupo-tab ${selectedGrupo === salon.id ? 'active' : ''}`}
              onClick={() => handleGrupoClick(salon.id)}
            >
              Grupo {salon.grupo}
            </button>
          ))}
        </div>

        {isLoading && <p>Cargando alumnos...</p>}

        {!isLoading && !selectedGrupo && <p>Por favor, selecciona un grupo para ver los alumnos.</p>}

        {!isLoading && selectedGrupo && alumnos.length === 0 && <p>No hay alumnos en este grupo.</p>}

        {!isLoading && alumnos.length > 0 && (
          <table className="alumnos-table">
            {/* ... el resto de la tabla sigue igual ... */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>Edad</th>
                <th>Promedio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id}>
                  <td>{alumno.id}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.promedio}</td>
                  <td className="actions-cell">
                    <button className="action-button view-button">Ver</button>
                    <button 
                      className="action-button edit-button"
                      onClick={() => handleEditClick(alumno)}
                    >
                      Editar
                    </button>
                    <button 
                      className="action-button delete-button" 
                      onClick={() => handleDeleteStudent(alumno.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <AddStudentModal
          studentToEdit={editingStudent}
          onClose={handleCloseModal}
          onAddStudent={handleAddStudent}
          onUpdateStudent={handleUpdateStudent}
          selectedGrupo={selectedGrupo}
        />
      )}
    </>
  );
}

export default Alumnos;