import React from 'react';
import './Patrocinadores.css';
import cocaColaImage from '../../assets/Imagenes/coca_cola.png'; 
import indiscapacidadImage from '../../assets/Imagenes/indiscapacidad.png'; 
import vidaIndependienteImage from '../../assets/Imagenes/vida_independiente.png'; 

const Patrocinadores = () => {
  return (
    <section className="patrocinadores-section">
      <h2>Patrocinadores</h2>
      <div className="patrocinadores-grid">
        <img src={cocaColaImage} alt="Coca-Cola" />
        <img src={indiscapacidadImage} alt="Indiscapacidad" />
        <img src={vidaIndependienteImage} alt="Vida Independiente" />
      </div>
    </section>
  );
};

export default Patrocinadores;
