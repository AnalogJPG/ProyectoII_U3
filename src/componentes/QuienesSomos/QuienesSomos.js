import React from 'react';
import './QuienesSomos.css';
import quienesSomosImage from '../../assets/Imagenes/quienes_somos.jpeg' ; 

const QuienesSomos = () => {
  return (
    <section className="quienes-somos-section">
      <h2>Quiénes Somos</h2>
      <img src={quienesSomosImage} alt="Quiénes Somos" />
      <p>Somos una organización de la sociedad civil enfocada a hacer actividades a favor de las personas con discapacidad para que puedan tener espacios accesibles y que puedan hacer redes de apoyo.</p>
      <a href="/quienes-somos/detalle">Ver más</a>
    </section>
  );
};

export default QuienesSomos;
