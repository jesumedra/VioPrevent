import React, { useState } from 'react';
import './App.css';
import Login from './paginas/Login';
import Dashboard from './paginas/Dasboard';
import Cuestionario from './paginas/pagcuestionario'; // Ruta corregida

function App() {
  // Estado para saber si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {
        // Mostramos el cuestionario como página principal.
        <Cuestionario />
        
        /*
        // Lógica de login anterior, comentada por ahora.
        isLoggedIn 
          ? <Dashboard onLogout={handleLogout} /> 
          : <Login onLogin={handleLogin} />
        */
      }
    </div>
  );
}

export default App;