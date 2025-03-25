import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
        <li><Link to="/que-hacemos">Qué Hacemos</Link></li>
        <li><Link to="/Actividades">Actividades</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;