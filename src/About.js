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
            <h3>AI, Finance & Tech Enthusiast | Researcher & Developer</h3>
            <p>
              I'm a final-year Computer Science student at Delhi Technological University, driven by the synergy between artificial intelligence, finance, and software development. My work spans research labs, tech startups, and global consulting firms—building solutions that are both intelligent and impactful.
            </p>
            <p>
              At Samsung R&D, I led deep learning research using physiological data, pushing predictive accuracy beyond published benchmarks. As a Valuations Intern at PwC, I developed automated financial models—DCF, comps, and scenario-based—for mergers and strategic investment cases across sectors.
            </p>
            <p>
              My time at Grain Analytics saw me optimize backend forecasting tools and enhance a React-based analytics dashboard for better performance and SEO. At HostBooks, I automated GST bill extraction using OCR and built 200+ dynamic charts for business intelligence reporting.
            </p>
            <p>
              With added experience in strategic consulting and leading student teams, I bring a unique blend of analytical rigor, engineering skill, and business insight to every challenge.
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
              <FaBrain />
            </div>
            <h4>AI & Machine Learning</h4>
            <p>Developing state-of-the-art machine learning models for EEG analysis, retail forecasting, and inventory optimization.</p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <FaCode />
            </div>
            <h4>Full Stack Development</h4>
            <p>Building performant web applications with React.js, Angular, and FastAPI that deliver exceptional user experiences.</p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <FaDatabase />
            </div>
            <h4>Finance</h4>
            <p>
              Building intelligent financial models and automating valuation workflows to turn complex data into clear, strategic insights. 
            </p>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <FaLaptopCode />
            </div>
            <h4>Research & Development</h4>
            <p>Pushing the boundaries of technology through innovative research in signal processing and neural networks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;