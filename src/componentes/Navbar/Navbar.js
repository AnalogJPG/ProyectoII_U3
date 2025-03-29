import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/Imagenes/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" /> {/* Muestra la imagen del logo */}
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/actividades">Actividades</a></li>
          <li><a href="/quienes-somos">Quiénes somos</a></li>
          <li><a href="/que-hacemos">Qué hacemos</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;