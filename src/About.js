import React from 'react';
import './About.css';
import { FaCode, FaDatabase, FaBrain, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Backend Engineer | ML Researcher | Full-Stack Developer</h3>
            <p>
              I'm a final-year Computer Science student at Delhi Technological University with hands-on experience building scalable backend systems, machine learning models, and intelligent financial solutions. Currently a Backend Engineer at Cred, I architect event-driven pipelines and optimize critical payment infrastructure serving millions of users.
            </p>
            <p>
              At Cred, I've implemented production-grade Kafka-to-Databricks event pipelines for real-time analytics, engineered self-healing instrument validation systems that improved payment success rates, and optimized transaction history APIs achieving 88% performance gains. I coordinate seamlessly across SRE, Data Engineering, and Product teams to deliver scalable, fail-safe systems.
            </p>
            <p>
              Beyond backend engineering, I've led deep learning research at Samsung R&D on EEG signal analysis (98% accuracy in stress classification), automated financial modeling at PwC using Monte Carlo simulations for cross-border M&A transactions, and built OCR-based automation pipelines at HostBooks processing 200+ bills daily.
            </p>
            <p>
              With expertise in system design, distributed computing, machine learning, and financial modeling, I combine technical rigor with business acumen to build solutions that scale and create measurable impact.
            </p>
            
            {/* <div className="about-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Sanat Chaudhary</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value"> sanat23122003@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Phone:</span>
                <span className="info-value">+91 9711647857</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">New Delhi, India</span>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="about-services">
          <div className="service-item">
            <div className="service-icon">
              <FaCode />
            </div>
            <h4>Backend Systems</h4>
            <p>Designing scalable event-driven architectures, real-time analytics pipelines, and optimized APIs using Kafka, Spring Boot, and distributed computing principles.</p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <FaBrain />
            </div>
            <h4>AI & Machine Learning</h4>
            <p>Building state-of-the-art ML models for signal processing, stress classification, and retail forecasting—achieving 98%+ accuracy on benchmark datasets.</p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <FaDatabase />
            </div>
            <h4>Finance & Automation</h4>
            <p>
              Developing intelligent financial models, Monte Carlo simulations for M&A valuations, and OCR-based automation pipelines for enterprise data processing.
            </p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <FaLaptopCode />
            </div>
            <h4>Full-Stack Development</h4>
            <p>Building performant web applications with React.js, Angular, and FastAPI; creating RAG-based chatbots and business intelligence dashboards.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;