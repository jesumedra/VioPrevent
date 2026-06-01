import React, { useState } from 'react';
import '../App.css'; // Corregimos la ruta para que suba un nivel

function Cuestionario() {
  const [formData, setFormData] = useState({
    tipoIncidente: '',
    fecha: '',
    lugar: '',
    descripcion: '',
    nombreVictima: '',
    grupoVictima: '',
    nombreAgresor: '',
    grupoAgresor: '',
    nombreTestigo: '',
    grupoTestigo: '',
    consentimiento: false,
    esAnonimo: false, // Nuevo estado para el reporte anónimo
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí es donde enviaremos los datos al backend en el futuro
    console.log('Datos del formulario:', formData);
    alert('Gracias por tu reporte. Ha sido enviado para su revisión.');
    // Aquí podríamos limpiar el formulario o redirigir al usuario
  };

  return (
    <div className="cuestionario-container">
      <form onSubmit={handleSubmit} className="cuestionario-form">
        <h1>Reporte de Incidentes Escolares</h1>
        <p>
          Este formulario es confidencial y seguro. Por favor, proporciona la mayor cantidad de detalles posible.
          Tu voz es importante para mantener un ambiente escolar seguro para todos.
        </p>

        {/* Sección 1: Detalles del Incidente */}
        <fieldset>
          <legend>Detalles del Incidente</legend>
          <label>
            Tipo de Incidente:
            <select name="tipoIncidente" value={formData.tipoIncidente} onChange={handleChange} required>
              <option value="">Selecciona una opción...</option>
              <option value="acoso_escolar">Acoso Escolar (Bullying)</option>
              <option value="ciberacoso">Ciberacoso</option>
              <option value="violencia_fisica">Violencia Física</option>
              <option value="violencia_verbal">Violencia Verbal</option>
              <option value="discriminacion">Discriminación</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <label>
            Fecha del Incidente:
            <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
          </label>
          <label>
            Lugar del Incidente:
            <input type="text" name="lugar" value={formData.lugar} onChange={handleChange} placeholder="Ej: Salón 102, patio, etc." required />
          </label>
          <label>
            Descripción detallada de lo sucedido:
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="5" required />
          </label>
        </fieldset>

        {/* Sección 2: Personas Involucradas */}
        <fieldset>
          <legend>Personas Involucradas</legend>
          
          <label className="checkbox-label">
            <input type="checkbox" name="esAnonimo" checked={formData.esAnonimo} onChange={handleChange} />
            Deseo realizar este reporte de forma anónima.
          </label>

          <label>
            Iniciales de la persona afectada (Víctima):
            <input type="text" name="nombreVictima" value={formData.nombreVictima} onChange={handleChange} placeholder="Ej: M.G." />
          </label>
          <label>
            Grupo de la persona afectada:
            <input type="text" name="grupoVictima" value={formData.grupoVictima} onChange={handleChange} placeholder="Ej: 101" />
          </label>
          <label>
            Iniciales del presunto agresor/a:
            <input type="text" name="nombreAgresor" value={formData.nombreAgresor} onChange={handleChange} placeholder="Ej: J.P." />
          </label>
          <label>
            Grupo del presunto agresor/a:
            <input type="text" name="grupoAgresor" value={formData.grupoAgresor} onChange={handleChange} placeholder="Ej: 102" />
          </label>

          {!formData.esAnonimo && (
            <>
              <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                Si no eres anónimo, puedes proporcionar tus datos como testigo. Esto es opcional.
              </p>
              <label>
                Tus iniciales (Testigo):
                <input type="text" name="nombreTestigo" value={formData.nombreTestigo} onChange={handleChange} placeholder="Ej: A.R." />
              </label>
              <label>
                Tu grupo (Testigo):
                <input type="text" name="grupoTestigo" value={formData.grupoTestigo} onChange={handleChange} placeholder="Ej: 103" />
              </label>
            </>
          )}
        </fieldset>

        {/* Sección 3: Consentimiento y Envío */}
        <fieldset>
          <legend>Confirmación</legend>
          <label className="checkbox-label">
            <input type="checkbox" name="consentimiento" checked={formData.consentimiento} onChange={handleChange} required />
            Confirmo que la información proporcionada es veraz y completa según mi conocimiento.
          </label>
        </fieldset>

        <button type="submit" className="btn-primary" disabled={!formData.consentimiento}>
          Enviar Reporte Confidencial
        </button>
      </form>
    </div>
  );
}

export default Cuestionario;