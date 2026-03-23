import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Portfolio from './pages/Portfolio';
import Leadership from './pages/Leadership';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/expertise/:service" element={<Expertise />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:sector" element={<Portfolio />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
