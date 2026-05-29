import React, { useState } from 'react';
import '../App.css';
import AddSalonModal from '../componentes/AddSalonModal';

function Salones({ salones, onAddSalon, onDeleteSalon, onUpdateSalon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSalon, setEditingSalon] = useState(null);

  const handleEditClick = (salon) => {
    setEditingSalon(salon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingSalon(null);
  };

  return (
    <>
      <div className="alumnos-container"> {/* Reutilizamos estilos */}
        <div className="alumnos-header">
          <h2>Gestión de Salones</h2>
          <button className="add-student-button" onClick={() => { setEditingSalon(null); setIsModalOpen(true); }}>
            + Añadir Salón
          </button>
        </div>
        <table className="alumnos-table">
          <thead>
            <tr>
              <th>ID Salón</th>
              <th>Grupo</th>
              <th>Profesor Titular</th>
              <th>Nº de Alumnos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {salones.map((salon) => (
              <tr key={salon.id}>
                <td>{salon.id}</td>
                <td>{salon.grupo}</td>
                <td>{salon.profesor}</td>
                <td>{salon.alumnos}</td>
                <td className="actions-cell">
                  <button className="action-button view-button">Ver</button>
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEditClick(salon)}
                  >
                    Editar
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => onDeleteSalon(salon.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <AddSalonModal
          salonToEdit={editingSalon}
          onClose={handleCloseModal}
          onAddSalon={onAddSalon}
          onUpdateSalon={onUpdateSalon}
        />
      )}
    </>
  );
}

export default Salones;