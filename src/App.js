import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';
import QueHacemos from './componentes/QueHacemos/QueHacemos';
import Actividades from './componentes/Actividades/Actividades';
import Formulario from './componentes/Formulario/Formulario'; // ✅ Importa el formulario
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
          <Route path="/actividades/:actividad/formulario" element={<Formulario />} /> {/* ✅ Nueva ruta */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;