import React from 'react';
import '../App.css';

// Componente genérico para mostrar datos en una tabla
function DataTable({ title, data }) {
  // Si no hay datos, no mostramos nada o un mensaje.
  if (!data || data.length === 0) {
    return (
      <div className="alumnos-container">
        <div className="alumnos-header">
          <h2>{title}</h2>
        </div>
        <p>No hay datos para mostrar.</p>
      </div>
    );
  }

  // Obtenemos los nombres de las columnas del primer objeto de la lista
  const columns = Object.keys(data[0]);

  return (
    <div className="alumnos-container">
      <div className="alumnos-header">
        <h2>{title}</h2>
        {/* Opcional: Se podría añadir un botón de "Añadir" aquí en el futuro */}
      </div>
      <table className="alumnos-table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column.charAt(0).toUpperCase() + column.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index}>
              {columns.map(column => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;