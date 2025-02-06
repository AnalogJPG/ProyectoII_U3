import React from 'react';

const Actividades = () => {
  const actividades = [
    { id: 1, nombre: 'Taller de inclusión laboral', fecha: '2023-01-15' },
    { id: 2, nombre: 'Campaña de concientización', fecha: '2023-03-22' },
    { id: 3, nombre: 'Seminario sobre accesibilidad', fecha: '2023-05-10' },
  ];

  return (
    <section>
      <h2>Actividades Realizadas</h2>
      <ul>
        {actividades.map(actividad => (
          <li key={actividad.id}>
            <strong>{actividad.nombre}</strong> - {actividad.fecha}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Actividades;