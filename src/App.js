import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navbar';
import QuienesSomos from './componentes/quienesSomos';
import QueHacemos from './componentes/queHacemos';
import Actividades from './componentes/Actividades';
import Footer from './componentes/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/que-hacemos" element={<QueHacemos />} />
          <Route path="/Actividades" element={<Actividades />} />
          <Route
            path="/"
            element={
              <>
                <QuienesSomos />
                <QueHacemos />
                <Actividades />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;