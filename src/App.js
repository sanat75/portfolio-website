import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Achievements from './Achievements';
import Contact from './Contact';
// import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Achievements />
              <Contact />
            </>
          } />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;