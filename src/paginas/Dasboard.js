import React, { useState, useEffect } from 'react';
import './App.css'; // Usaremos el mismo archivo de estilos
import Alumnos from './Alumnos'; // Importamos el nuevo componente
import Reportes from './Reportes'; // Importamos el componente de Reportes
import Salones from './Salones'; // Importamos el componente de Salones
import Inicio from './Inicio'; // Importamos el nuevo componente de Inicio

function Dashboard({ onLogout }) {
  // Estado para controlar la vista activa
  const [activeView, setActiveView] = useState('Inicio');
  // El estado ahora se inicializa como un array vacío.
  const [alumnos, setAlumnos] = useState([]);
  const [salones, setSalones] = useState([]);
  const [reportes, setReportes] = useState([]);

  // useEffect para cargar los datos desde la API cuando el componente se monta.
  useEffect(() => {
    // Cargar alumnos
    fetch('http://localhost:3001/api/alumnos')
      .then(res => res.json())
      .then(data => setAlumnos(data))
      .catch(err => console.error("Error al cargar alumnos:", err));

    // Cargar salones
    fetch('http://localhost:3001/api/salones')
      .then(res => res.json())
      .then(data => setSalones(data))
      .catch(err => console.error("Error al cargar salones:", err));

    // Cargar reportes
    fetch('http://localhost:3001/api/reportes')
      .then(res => res.json())
      .then(data => setReportes(data))
      .catch(err => console.error("Error al cargar reportes:", err));
  }, []); // El array vacío asegura que esto se ejecute solo una vez.

  // Funciones para modificar los salones
  const handleAddSalon = (newSalon) => {
    setSalones([...salones, newSalon]);
  };

  const handleDeleteSalon = (salonId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este salón?')) {
      setSalones(salones.filter(salon => salon.id !== salonId));
    }
  };

  const handleUpdateSalon = (updatedSalon) => {
    setSalones(salones.map(salon => 
      salon.id === updatedSalon.id ? updatedSalon : salon
    ));
  };

  // Funciones para modificar los reportes
  const handleAddReport = (newReport) => {
    setReportes([...reportes, newReport]);
  };

  const handleDeleteReport = (reportId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este reporte?')) {
      setReportes(reportes.filter(reporte => reporte.id !== reportId));
    }
  };

  // Función para renderizar el contenido principal según la vista activa
  const renderContent = () => {
    switch (activeView) {
      case 'Alumnos':
        // Pasamos la lista y las funciones como props al componente Alumnos
        return <Alumnos 
          salones={salones}
        />;
      case 'Reportes':
        // Ahora pasamos la lista de reportes y las funciones
        return <Reportes 
          alumnos={alumnos}
          reportes={reportes}
          onAddReport={handleAddReport}
          onDeleteReport={handleDeleteReport}
        />;
      case 'Salones':
        // Pasamos la lista y las funciones como props al componente Salones
        return <Salones 
          salones={salones}
          onAddSalon={handleAddSalon}
          onDeleteSalon={handleDeleteSalon}
          onUpdateSalon={handleUpdateSalon} // Pasamos la nueva función
        />;
      case 'Inicio':
      default:
        // Ahora usamos el componente Inicio y le pasamos los datos
        return <Inicio 
          alumnos={alumnos}
          salones={salones}
          reportes={reportes}
        />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Barra Lateral de Navegación */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>VioPrevent</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activeView === 'Inicio' ? 'active' : ''}>
              <a href="#" onClick={() => setActiveView('Inicio')}>Inicio</a>
            </li>
            <li className={activeView === 'Alumnos' ? 'active' : ''}>
              <a href="#" onClick={() => setActiveView('Alumnos')}>Alumnos</a>
            </li>
            <li className={activeView === 'Reportes' ? 'active' : ''}>
              <a href="#" onClick={() => setActiveView('Reportes')}>Reportes</a>
            </li>
            <li className={activeView === 'Salones' ? 'active' : ''}>
              <a href="#" onClick={() => setActiveView('Salones')}>Salones</a>
            </li>
            {/* Añade aquí más elementos de menú en el futuro */}
            <li><a href="#" onClick={() => setActiveView('Ajustes')}>Ajustes</a></li>
          </ul>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="main-content-dashboard">
        <header className="main-header">
          <div className="header-search">
            <input type="search" placeholder="Buscar alumnos, reportes..." />
          </div>
          <div className="header-user">
            <span>Juan Pérez (Director)</span>
            <button className="logout-button" onClick={onLogout}>Cerrar Sesión</button>
          </div>
        </header>

        {renderContent()} {/* Aquí se renderiza el contenido dinámico */}

      </main>
    </div>
  );
}

export default Dashboard;