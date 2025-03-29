// src/componentes/Actividades/Actividades.js
import React from 'react';
import './Actividades.css';
import picnicMuseoImage from '../../assets/Imagenes/picnic_museo.jpeg'; 
import marchaDiscapacidadImage from '../../assets/Imagenes/marcha_discapacidad.jpeg'; 
import tallerMantasImage from '../../assets/Imagenes/taller_mantas.jpeg'; 
import picnicImage from '../../assets/Imagenes/picnic.jpeg'; 
import conciertoGratuitoImage from '../../assets/Imagenes/concierto_gratuito.png'; 

const Actividades = () => {
  const actividades = [
    { id: 1, nombre: 'Picnic y museo', link: '/actividades/picnic-museo', image: picnicMuseoImage },
    { id: 2, nombre: 'Marcha discapacidad', link: '/actividades/marcha-discapacidad', image: marchaDiscapacidadImage },
    { id: 3, nombre: 'Taller de mantas', link: '/actividades/taller-mantas', image: tallerMantasImage },
    { id: 4, nombre: 'Picnic', link: '/actividades/picnic', image: picnicImage },
    { id: 5, nombre: 'Concierto gratuito', link: '/actividades/concierto-gratuito', image: conciertoGratuitoImage },
  ];

  return (
    <section className="actividades-section">
      <h2>Actividades Realizadas</h2>
      <div className="actividades-grid">
        {actividades.map(actividad => (
          <div key={actividad.id} className="actividad">
            <img src={actividad.image} alt={actividad.nombre} />
            <h3>{actividad.nombre}</h3>
            <a href={actividad.link}>Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actividades;
