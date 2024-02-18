import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import About from './about';
import Contact from './contact';
import ParticlesComponent from './particles';
import Activities from './activities';
import Home from './home';

function App() {
  return (
    <Router>
      <div className="relative">
        <ParticlesComponent />
        <div className="absolute top-0 left-0 w-full h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/activities" element={<Activities />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
