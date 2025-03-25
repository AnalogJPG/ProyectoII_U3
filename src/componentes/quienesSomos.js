import React from 'react';

import discapicnic from '../assets/Imagenes/discapicnic_1.jpeg';

const QuienesSomos = () => {
  return (
    <section>
      <h2>Quiénes Somos</h2>
      <p>Somos una organización dedicada al activismo y la defensa de los derechos de las personas con discapacidad.</p>
      <img src={discapicnic} alt="Varias personas posando y sonriendo para la foto oficial del evento discapicnic" />
    </section>
  );
};

export default QuienesSomos;