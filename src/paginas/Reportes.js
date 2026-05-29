import React, { useState } from 'react';
import '../App.css';
// Aún no hemos creado este modal, pero lo haremos en el siguiente paso.
import AddReportModal from '../componentes/AddReportModal'; 

// El componente ahora recibe todo lo que necesita como props
function Reportes({ alumnos, reportes, onAddReport, onDeleteReport }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteWithConfirmation = (reportId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este reporte?')) {
      onDeleteReport(reportId);
    }
  };

  return (
    <>
      <div className="alumnos-container"> {/* Reutilizamos algunos estilos */}
        <div className="alumnos-header">
          <h2>Gestión de Reportes</h2>
          <button className="add-student-button" onClick={() => setIsModalOpen(true)}>
            + Nuevo Reporte
          </button>
        </div>
        <table className="alumnos-table">
          <thead>
            <tr>
              <th>ID Reporte</th>
              <th>Alumno Implicado</th>
              <th>Fecha</th>
              <th>Tipo de Incidente</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((reporte) => (
              <tr key={reporte.id}>
                <td>{reporte.id}</td>
                <td>{reporte.alumno}</td>
                <td>{reporte.fecha}</td>
                <td>{reporte.tipo}</td>
                <td>
                  {/* Usaremos clases genéricas para los estados */}
                  <span className={`status-badge status-${reporte.estado.toLowerCase().replace(' ', '-')}`}>
                    {reporte.estado}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="action-button view-button">Ver Detalles</button>
                  <button 
                    className="action-button delete-button"
                    onClick={() => handleDeleteWithConfirmation(reporte.id)}
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
        <AddReportModal
          alumnos={alumnos} // Le pasamos la lista de alumnos al modal
          onClose={() => setIsModalOpen(false)}
          onAddReport={onAddReport}
        />
      )}
    </>
  );
}

export default Reportes;