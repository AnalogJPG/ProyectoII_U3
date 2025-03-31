import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import QueHacemos from './componentes/QueHacemos/QueHacemos';
import Actividades from './componentes/Actividades/Actividades';
import Patrocinadores from './componentes/Patrocinadores/Patrocinadores';
import Footer from './componentes/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><QuienesSomos /><QueHacemos /><Actividades /><Patrocinadores /></>} />
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
