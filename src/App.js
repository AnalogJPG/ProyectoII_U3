import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import QueHacemos from './componentes/QueHacemos/QueHacemos';
import Actividades from './componentes/Actividades/Actividades';
import CalendarEvents from './componentes/CalendarEvents/CalendarEvents'; // Importa CalendarEvents
import VirtualMeetings from './componentes/VirtualMeetings/VirtualMeetings'; // Importa VirtualMeetings
import Patrocinadores from './componentes/Patrocinadores/Patrocinadores';
import Footer from './componentes/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <QuienesSomos />
            <QueHacemos />
            <Actividades />
            <CalendarEvents /> {/* Usa CalendarEvents aquí */}
            <VirtualMeetings /> {/* Usa VirtualMeetings aquí */}
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