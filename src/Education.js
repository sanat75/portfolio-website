import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Delhi Technological University",
      field: "Computer Science and Engineering",
      duration: "2022 - 2026 (Expected)",
      gpa: "8.50/10",
      achievements: [
        "Ranked in the top 2 percentile among over 900,000 candidates in JEE Main 2022",
        "Completed 500+ DSA problems on LeetCode, maintaining a top 10% global rank",
        // "Active member of the university's AI research group, contributing to papers and projects",
        "Active member of the university's AI research group, contributing to papers and projects"

      ]
    },
    {
      id: 2,
      degree: "Class 12 (CBSE Board)",
      institution: "Senior Secondary School",
      duration: "2022",
      percentage: "96% (PCM CS)",
      achievements: [
        "School topper in Computer Science, Chemistry",
        // "Represented the school in national-level coding competitions",
        "Ranked in the top 2 percentile among over 900,000 candidates in JEE Main 2022",
        "Completed 500+ DSA problems on LeetCode, maintaining a top 10% global rank",
      ]
    },
    {
      id: 3,
      degree: "Class 10 (CBSE Board)",
      institution: "Secondary School",
      duration: "2020",
      percentage: "91.4%",
      achievements: [
        "Achieved distinction in Mathematics and Science",
        "State-level Football Player, represented the state in various tournaments"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Internet of Things (IoT)",
      issuer: "IIT Kharagpur, NPTEL",
      date: "2024",
      credential: "Gold Medalist - Top 2%",
      isGold: true
    },
    {
      id: 2,
      name: "Joy of Computing using Python",
      issuer: "IIT Madras, NPTEL",
      date: "2024",
      credential: "Gold Medalist",
      isGold: true
    },
    {
      id: 3,
      name: "Cybersecurity Fundamentals",
      issuer: "Palo Alto Networks",
      date: "2024",
      // credential: "Certification ID: PA-CSF-2023",
      isGold: false
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        
        <div className="education-container">
          <div className="education-timeline">
            {educationData.map(edu => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </span>
                  </div>
                  <h4>{edu.institution}</h4>
                  {edu.field && <p className="field">{edu.field}</p>}
                  <div className="performance">
                    {edu.gpa && <span>CGPA: {edu.gpa}</span>}
                    {edu.percentage && <span>Percentage: {edu.percentage}</span>}
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="achievements">
                      <h5>Achievements:</h5>
                      <ul>
                        {edu.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              {certifications.map(cert => (
                <div key={cert.id} className={`certification-card ${cert.isGold ? 'gold-medal' : ''}`}>
                  <div className="certification-icon">
                    <FaMedal />
                  </div>
                  <div className="certification-details">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <div className="certification-meta">
                      <span className="date">
                        <FaCalendarAlt />
                        <span>{cert.date}</span>
                      </span>
                      <span className={`credential ${cert.isGold ? 'gold-credential' : ''}`}>
                        {cert.credential}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;