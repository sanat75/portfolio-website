import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Sanat Chaudhary</h1>
          <div className="hero-subtitle">
            <span className="typing-effect">Backend Engineer @ Cred | Building Scalable Payment Systems & AI Solutions</span>
          </div> 
          <p className="hero-description">
          Software Engineer specializing in Scalable Backend Systems, Applied ML, and FinTech Solutions.          </p>

          <div className="hero-cta">
            {/* <Link to="contact" smooth={true} duration={500} className="btn hero-btn">Get In Touch</Link> */}
            <a href="https://drive.google.com/file/d/1TFVFIt2I-B7mobSr3gs5lPitWO7HPWZb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn hero-btn-outline">Download Resume</a>
          </div>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/sanat-chaudhary-869a90256/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sanat75" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:sanat23122003@gmail.com" title="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+919711647857" title="Phone">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar"></div>
        </div>
      </div>
      {/* <div className="hero-scroll">
        <Link to="about" smooth={true} duration={500}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="arrow-down"></span>
            <span className="arrow-down"></span>
            <span className="arrow-down"></span>
          </div>
        </Link>
      </div> */}
    </section>
  );
};

export default Hero;