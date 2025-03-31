import React from 'react';
import './QueHacemos.css';
import queHacemosImage from '../../assets/Imagenes/que_hacemos.jpeg';

const QueHacemos = () => {
  return (
    <section className="que-hacemos-section">
      <h2>Qué Hacemos</h2>
      <img src={queHacemosImage} alt="Qué Hacemos" />
      <p>Aquí puedes encontrar actividades para que puedas convivir con otras personas muy diversas, todas, todos y todes son aceptados en las actividades, hacemos desde picnics hasta excursiones a museos y diferentes espacios, siempre buscando que sean lo más accesibles posible para que sin importar tu discapacidad puedas asistir.</p>
      <a href="/que-hacemos/detalle">Ver más</a>
    </section>
  );
};

export default QueHacemos;
