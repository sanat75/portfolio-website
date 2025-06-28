import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Sanat Chaudhary</h1>
          <div className="hero-subtitle">
            <span className="typing-effect">Final-Year CS Undergrad at Delhi Technological University | Where Tech Meets Finance</span>
          </div> 
          <p className="hero-description">
  Engineering intelligent tech at the intersection of AI, finance, and software. Whether it's optimizing valuation models or deploying smart dashboards, I turn ideas into scalable impact.
</p>

          <div className="hero-cta">
            <Link to="contact" smooth={true} duration={500} className="btn hero-btn">Get In Touch</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn hero-btn-outline">Download CV</a>
          </div>
          <div className="hero-social">
            <a href="https://linkedin.com/sanat-chaudhary" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sanat-chaudhary" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:sanat23122003@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+919711647857">
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