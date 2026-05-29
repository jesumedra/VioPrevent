import React, { useState, useEffect } from 'react';
import '../App.css';
import DataTable from './DataTable'; // Reutilizamos nuestro componente de tabla

function Reportes() {
  const [reportes, setReportes] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [testigos, setTestigos] = useState([]);
  const [victimas, setVictimas] = useState([]);
  const [victimarios, setVictimarios] = useState([]);
  const [loading, setLoading] = useState(false);

  // Cargar la lista inicial de reportes
  useEffect(() => {
    fetch('http://localhost:3001/api/reportes')
      .then(res => res.json())
      .then(data => setReportes(data))
      .catch(err => console.error("Error al cargar reportes:", err));
  }, []);

  // Función para manejar el clic en un reporte
  const handleReportClick = (reporte) => {
    if (selectedReport && selectedReport.id_reporte === reporte.id_reporte) {
      // Si se hace clic en el mismo reporte, se ocultan los detalles
      setSelectedReport(null);
    } else {
      setSelectedReport(reporte);
      setLoading(true);
      // Limpiamos los datos anteriores
      setTestigos([]);
      setVictimas([]);
      setVictimarios([]);

      // Buscamos los datos asociados al reporte seleccionado
      const reporteId = reporte.id_reporte;
      const fetchTestigos = fetch(`http://localhost:3001/api/reportes/${reporteId}/testigos`).then(res => res.json());
      const fetchVictimas = fetch(`http://localhost:3001/api/reportes/${reporteId}/victimas`).then(res => res.json());
      const fetchVictimarios = fetch(`http://localhost:3001/api/reportes/${reporteId}/victimarios`).then(res => res.json());

      Promise.all([fetchTestigos, fetchVictimas, fetchVictimarios])
        .then(([testigosData, victimasData, victimariosData]) => {
          setTestigos(testigosData);
          setVictimas(victimasData);
          setVictimarios(victimariosData);
        })
        .catch(err => console.error("Error al cargar detalles del reporte:", err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="alumnos-container">
      <div className="alumnos-header">
        <h2>Gestión de Informes</h2>
      </div>
      <table className="alumnos-table">
        <thead>
          <tr>
            <th>ID Reporte</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte) => (
            <React.Fragment key={reporte.id_reporte}>
              <tr className={selectedReport?.id_reporte === reporte.id_reporte ? 'selected-row' : ''}>
                <td>{reporte.id_reporte}</td>
                <td>{reporte.descripcion}</td>
                <td>{new Date(reporte.fecha).toLocaleDateString()}</td>
                <td>
                  <button className="action-button view-button" onClick={() => handleReportClick(reporte)}>
                    {selectedReport?.id_reporte === reporte.id_reporte ? 'Ocultar Detalles' : 'Ver Detalles'}
                  </button>
                </td>
              </tr>
              {selectedReport?.id_reporte === reporte.id_reporte && (
                <tr>
                  <td colSpan="4">
                    {loading ? <p>Cargando detalles...</p> : (
                      <div className="report-details">
                        <DataTable title="Testigos" data={testigos} />
                        <DataTable title="Víctimas" data={victimas} />
                        <DataTable title="Victimarios" data={victimarios} />
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reportes;