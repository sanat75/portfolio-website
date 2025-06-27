import React from 'react';
import { FaTrophy, FaLaptopCode, FaMedal, FaChartLine, FaFutbol, FaShieldAlt } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <h3>Academic Excellence</h3>
            <p>Ranked in the top 2 percentile among over 900,000 candidates in JEE Main 2022.</p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaLaptopCode />
            </div>
            <h3>Coding Proficiency</h3>
            <p>Completed 500+ DSA problems on LeetCode, maintaining a top 10% global rank.</p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaMedal />
            </div>
            <h3>NPTEL Gold Medalist</h3>
            <p>Gold Medalist in Joy of Computing using Python and Internet of Things certification from IIT Madras.</p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaChartLine />
            </div>
            <h3>Technical Innovation</h3>
            <p>Developed deep learning pipelines achieving 99.7% accuracy on benchmark datasets.</p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaFutbol />
            </div>
            <h3>State-level Athlete</h3>
            <p>Participated in Inter Zonal Football Tournaments.</p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaShieldAlt />
            </div>
            <h3>Cybersecurity Certified</h3>
            <p>Completed Cybersecurity Fundamentals certification from Palo Alto Networks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;