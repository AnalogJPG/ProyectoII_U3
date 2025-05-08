import React from 'react';
import './TablaDeEncargados.css'; // puedes renombrarlo si deseas

const encargados = [
  { estado: 'Aguascalientes', nombre: 'Carlos Ramírez', correo: 'carlos.ramirez@example.com' },
  { estado: 'Baja California', nombre: 'Ana Torres', correo: 'ana.torres@example.com' },
  { estado: 'Baja California Sur', nombre: 'Luis Ortega', correo: 'luis.ortega@example.com' },
  { estado: 'Campeche', nombre: 'María Fernández', correo: 'maria.fernandez@example.com' },
  { estado: 'Chiapas', nombre: 'Jorge Morales', correo: 'jorge.morales@example.com' },
  { estado: 'Chihuahua', nombre: 'Laura García', correo: 'laura.garcia@example.com' },
  { estado: 'Ciudad de México', nombre: 'Pedro Jiménez', correo: 'pedro.jimenez@example.com' },
  { estado: 'Coahuila', nombre: 'Elena Díaz', correo: 'elena.diaz@example.com' },
  { estado: 'Colima', nombre: 'Roberto Vega', correo: 'roberto.vega@example.com' },
  { estado: 'Durango', nombre: 'Alejandra Ruiz', correo: 'alejandra.ruiz@example.com' },
  { estado: 'Estado de México', nombre: 'Iván Castro', correo: 'ivan.castro@example.com' },
  { estado: 'Guanajuato', nombre: 'Sofía Herrera', correo: 'sofia.herrera@example.com' },
  { estado: 'Guerrero', nombre: 'Martín Pérez', correo: 'martin.perez@example.com' },
  { estado: 'Hidalgo', nombre: 'Lucía Navarro', correo: 'lucia.navarro@example.com' },
  { estado: 'Jalisco', nombre: 'Fernando López', correo: 'fernando.lopez@example.com' },
  { estado: 'Michoacán', nombre: 'Isabel Romero', correo: 'isabel.romero@example.com' },
  { estado: 'Morelos', nombre: 'Andrés Salazar', correo: 'andres.salazar@example.com' },
  { estado: 'Nayarit', nombre: 'Patricia Mendoza', correo: 'patricia.mendoza@example.com' },
  { estado: 'Nuevo León', nombre: 'Miguel Torres', correo: 'miguel.torres@example.com' },
  { estado: 'Oaxaca', nombre: 'Daniela Vargas', correo: 'daniela.vargas@example.com' },
  { estado: 'Puebla', nombre: 'Héctor Reyes', correo: 'hector.reyes@example.com' },
  { estado: 'Querétaro', nombre: 'Claudia Martínez', correo: 'claudia.martinez@example.com' },
  { estado: 'Quintana Roo', nombre: 'Antonio Ríos', correo: 'antonio.rios@example.com' },
  { estado: 'San Luis Potosí', nombre: 'Diana Calderón', correo: 'diana.calderon@example.com' },
  { estado: 'Sinaloa', nombre: 'Eduardo Aguilar', correo: 'eduardo.aguilar@example.com' },
  { estado: 'Sonora', nombre: 'Nancy Estrada', correo: 'nancy.estrada@example.com' },
  { estado: 'Tabasco', nombre: 'Óscar Domínguez', correo: 'oscar.dominguez@example.com' },
  { estado: 'Tamaulipas', nombre: 'Beatriz León', correo: 'beatriz.leon@example.com' },
  { estado: 'Tlaxcala', nombre: 'Ricardo Mejía', correo: 'ricardo.mejia@example.com' },
  { estado: 'Veracruz', nombre: 'Jessica Ramírez', correo: 'jessica.ramirez@example.com' },
  { estado: 'Yucatán', nombre: 'Tomás Cordero', correo: 'tomas.cordero@example.com' },
  { estado: 'Zacatecas', nombre: 'Gloria Núñez', correo: 'gloria.nunez@example.com' }
];

const TablaDeEncargados = () => {
  return (
    <div className="tabla-reuniones-container">
      <h2>Encargados Estatales</h2>
      <table className="tabla-reuniones">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Nombre del encargado</th>
            <th>Correo de contacto</th>
          </tr>
        </thead>
        <tbody>
          {encargados.map((item, index) => (
            <tr key={index}>
              <td>{item.estado}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDeEncargados;
