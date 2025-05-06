import React from 'react';
import './TablaDeReuniones.css';

const TablaDeReuniones = ({ reuniones }) => {
  return (
    <div className="tabla-reuniones-container">
      <h2>Próximas Reuniones</h2>
      <table className="tabla-reuniones">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Actividad</th>
            <th scope="col">Estado</th> 
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {reuniones.map((reunion) => (
            <tr key={reunion.id}>
              <th scope="row">{reunion.fecha}</th>
              <td>{reunion.hora}</td>
              <td>{reunion.actividad}</td>
              <td>{reunion.estado}</td> 
              <td>{reunion.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDeReuniones;