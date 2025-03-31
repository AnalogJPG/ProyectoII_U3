import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Formulario.css';

const Formulario = () => {
  const navigate = useNavigate();
  const { actividad } = useParams();

  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    correo: '',
    estado: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert(`Gracias por inscribirte en la actividad: ${actividad}`);
    navigate('/actividades'); // Redirige después de enviar
  };

  return (
    <section className="formulario-section">
      <h2>Formulario de Inscripción - {actividad.replace('-', ' ')}</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label>Edad:</label>
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />

        <label>Correo Electrónico:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />

        <label>Estado de Residencia:</label>
        <input type="text" name="estado" value={formData.estado} onChange={handleChange} required />

        <button type="submit">Enviar Datos</button>
      </form>
    </section>
  );
};

export default Formulario;