import React, { useState } from 'react';
import './Experience.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      id: 1,
      company: "Cred",
      position: "Backend Engineer Intern",
      duration: "Sept 2025-Present",
      location: "Bengaluru, India",
      description: [
        "Architected and deployed a production-grade 3-Table Kafka-to-Databricks Event Pipeline for the Autopay Service, capturing SUBSCRIPTION_STATE_CHANGE, SCHEDULE_STATE_CHANGE, and SUBSCRIPTION_ATTRIBUTES_AUDIT events to enable real-time analytics for conversion funnels, churn prediction, and payment success optimization.",
        "Coordinated across SRE, Data Engineering, and Product teams to deliver a robust event streaming system with guaranteed message ordering and fail-safe publishing, establishing scalable infrastructure for critical payment workflows.",
        "Engineered a Two-Step Instrument Validation system with Mandate-Based Fallback to resolve production bugs where valid subscriptions failed due to external payment aggregator instrument ID changes, enabling automatic self-healing and significantly improving payment success rates.",
        "Implemented Multi-Layer Payment Status Validation logic across Schedule Entity, Subscription Entity, and Tenant API to prevent false negatives in failed payment reporting, eliminating user confusion and reducing support escalations.",
        "Designed and deployed a Priority-Based Sorting Algorithm for the upcoming schedules view, ensuring CANCELLED and FAILED payments remain visible while transforming binary filter logic into intelligent user experience optimization.",
        "Optimized Autopay Transaction History API with database-level pagination using Spring Data, reducing initial load time by 88% (from 2-3 seconds to <300ms) and network payload by 90%, ensuring optimal performance for users with 1,000+ transactions."
      ]
    },
    {
      id: 2,
      company: "PricewaterhouseCoopers (PwC)",
      position: "Summer Intern",
      duration: "June 2025 - Present",
      location: "Gurugram, India",
      description: [
        "Built and enhanced comprehensive financial models for company valuations in mergers, acquisitions, and strategic investment contexts, contributing to multi-million dollar transaction decisions.",
        "Applied advanced quantitative techniques using Excel and Python to develop sophisticated DCF models, comparable company analyses, and scenario-based valuation frameworks.",
        "Automated critical valuation processes including financial data extraction and sensitivity analyses, improving accuracy by 25% and reducing processing time by 40%.",
        "Contributed meaningfully to live client engagements across diverse sectors including consumer goods and manufacturing, directly supporting senior team deliverables.",
        "Developed Python scripts for automated data validation and cross-verification of financial metrics, ensuring model reliability and regulatory compliance."
      ]
    },
    {
      id: 3,
      company: "Samsung Research and Development Institute",
      position: "Research Intern",
      duration: "Sept 2024 - Dec 2024",
      location: "Delhi, India",
      description: [
        "Spearheaded groundbreaking research in EEG signal analysis using deep learning techniques, achieving an unprecedented 99.7% accuracy rate on multiple benchmark datasets.",
        "Designed and implemented sophisticated hybrid CNN-LSTM architectures that outperformed existing state-of-the-art models in both accuracy and computational efficiency.",
        "Pioneered novel feature extraction methods leveraging advanced entropy measures and Hjorth parameters, significantly enhancing classification performance.",
        "Developed comprehensive validation frameworks using confusion matrices and loss curves to ensure model robustness and generalizability across diverse datasets.",
        "Collaborated with senior researchers to document findings and prepare publications for leading AI and biomedical engineering journals."
      ]
    },
    {
      id: 4,
      company: "Grain Analytics",
      position: "Data Science Intern",
      duration: "Apr 2024 - Jun 2024",
      location: "Ontario, Canada (Remote)",
      description: [
        "Revolutionized the company's web platform by optimizing React.js architecture, resulting in a 40% reduction in load times and saving clients over 10 hours of productivity monthly.",
        "Implemented SEO-optimized components that boosted website visibility by 15%, directly contributing to increased client acquisition.",
        "Engineered sophisticated machine learning models for customer analytics that provided clients with actionable insights, leading to a 25% increase in customer retention rates.",
        "Developed advanced retail forecasting algorithms that reduced inventory costs by 30% while maintaining optimal stock levels.",
        "Created customized inventory optimization solutions that integrated seamlessly with existing client infrastructure, improving operational efficiency across diverse retail environments."
      ],
      projects: [
        {
          name: "Grain Realty Platform",
          url: "https://grainrealty.vercel.app/"
        }
      ]
    },
    {
      id: 5,
      company: "HostBooks Limited",
      position: "Software Developer Intern",
      duration: "Dec 2023 - Feb 2024",
      location: "Gurugram, Haryana",
      description: [
        "Developed an intelligent OCR and regex-based automation system that processed 200+ GST bills daily, reducing manual data entry efforts by 40% and virtually eliminating transcription errors.",
        "Designed and implemented over 200 interactive data visualization charts using Angular and the AmCharts library, providing executives with real-time insights that accelerated decision-making processes.",
        "Built a conversational AI-powered chatbot capable of complex natural language queries against visualization datasets, enhancing productivity by 30% and democratizing data access across the organization.",
        "Optimized database queries and API endpoints, reducing average response times from 3 seconds to under 500ms.",
        "Collaborated with cross-functional teams to identify and implement features that improved user experience and operational efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        
        <div className="experience-content">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`tab-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <h4>{exp.company}</h4>
                <p>{exp.position}</p>
              </div>
            ))}
          </div>
          
          <div className="experience-details">
            <div className="experience-header">
              <h3>{experiences[activeTab].position}</h3>
              <h4>{experiences[activeTab].company}</h4>
              <div className="experience-meta">
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{experiences[activeTab].duration}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
            </div>
            
            <div className="experience-body">
              <ul>
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              {experiences[activeTab].projects && (
                <div className="experience-projects">
                  <h5>Projects:</h5>
                  <div className="projects-list">
                    {experiences[activeTab].projects.map((project, index) => (
                      <a 
                        key={index} 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;