import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import QueHacemos from './componentes/QueHacemos/QueHacemos';
import Actividades from './componentes/Actividades/Actividades';
import CalendarEvents from './componentes/CalendarEvents/CalendarEvents'; 
import VirtualMeetings from './componentes/VirtualMeetings/VirtualMeetings'; 
import Patrocinadores from './componentes/Patrocinadores/Patrocinadores';
import Footer from './componentes/Footer/Footer';
import TablaDeReuniones from './componentes/TablaDeEncargados/TablaDeEncargados'; 
import './App.css';

function App() {
  const reunionesData = [
    { id: 1, fecha: '2025-05-10', hora: '10:00', actividad: 'Reunión de planificación', estado: 'Confirmado', descripcion: 'Discusión sobre los próximos pasos del proyecto.' },
    { id: 2, fecha: '2025-05-15', hora: '14:30', actividad: 'Presentación de resultados', estado: 'Finalizado', descripcion: 'Presentación de los resultados del último trimestre.' },
    { id: 3, fecha: '2025-05-20', hora: '09:00', actividad: 'Taller de accesibilidad', estado: 'Pendiente', descripcion: 'Taller para mejorar la accesibilidad del sitio web.' },
    // ... más datos de reuniones
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <QuienesSomos />
            <QueHacemos />
            <Actividades />
            <CalendarEvents /> 
            <VirtualMeetings /> 
            <TablaDeReuniones reuniones={reunionesData} /> 
            <Patrocinadores />
          </>} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/que-hacemos" element={<QueHacemos />} />
          <Route path="/actividades" element={<Actividades />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;