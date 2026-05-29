import React from 'react';
import '../App.css';

// El componente recibe todos los datos que necesita para los resúmenes
function Inicio({ alumnos, salones, reportes }) {
  // Calculamos los totales. Filtramos los reportes para contar solo los pendientes.
  const totalAlumnos = alumnos.length;
  const totalSalones = salones.length;
  const reportesPendientes = reportes.filter(r => r.estado === 'Pendiente' || r.estado === 'En revisión').length;

  return (
    <section className="content-area">
      <h1>Bienvenido al Panel de Control</h1>
      <p>Desde aquí podrás administrar la información clave de la institución.</p>

      {/* Contenedor para las tarjetas de estadísticas */}
      <div className="stats-cards-container">
        <div className="stat-card">
          <div className="stat-card-info">
            <span className="stat-card-title">Total de Alumnos</span>
            <span className="stat-card-value">{totalAlumnos}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-info">
            <span className="stat-card-title">Total de Salones</span>
            <span className="stat-card-value">{totalSalones}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-info">
            <span className="stat-card-title">Reportes Pendientes</span>
            <span className="stat-card-value">{reportesPendientes}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;