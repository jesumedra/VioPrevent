import React, { useState } from 'react';
import './App.css';

function Login({ onLogin }) {
  // Estados para guardar el correo y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    // Ya no mostramos una alerta, sino que llamamos a la función que nos pasó App.js
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>VioPrevent</h1>
      </div>
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="login-button">Ingresar</button>
      </form>
      <div className="login-links">
        <a href="#">¿Olvidaste tu contraseña?</a>
        <span className="register-link">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </span>
      </div>
    </div>
  );
}

export default Login;