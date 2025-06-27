import React, { useState } from 'react';
import './Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI & Research' },
    { id: 'web', name: 'Web Development' },
    { id: 'algorithms', name: 'Data Structures & Algorithms' },
    { id: 'finance', name: 'Finance' },
    { id: 'consulting', name: 'Consulting & Strategy' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Smart Stress Detection Using Indian Ragas and Guided Breathing",
      description: "Explored culturally relevant interventions using Raga Bhairavi and guided breathing to reduce exam-induced anxiety among engineering students. Built ML classifiers achieving >98% accuracy with cost-sensitive learning for stress detection.",
      category: ['ai'],
      technologies: ["Python", "NeuroKit2", "Kubios", "Scikit-learn", "Machine Learning", "Statistical Testing"],
      link: "#",
      // venue: "Presented at CogML 2025 | DTU"
    },
    {
      id: 2,
      title: "PDF RAG Application – Document Q&A with LLMs",
      description: "A Retrieval-Augmented Generation system enabling intelligent question answering over PDF documents, combining modern LLMs with vector search and embedding-powered retrieval using ChromaDB and Ollama.",
      category: ['ai'],
      technologies: ["Python", "FastAPI", "ChromaDB", "Ollama LLM", "MongoDB", "LangChain"],
      link: "https://github.com/sanat-chaudhary/rag-app"
    },
    {
      id: 3,
      title: "BK Polymers Industrial Website",
      description: "Designed and developed a professional industrial website for BK Polymers, a plastics manufacturing company. Built with React.js using component-driven architecture for scalability and SEO optimization.",
      category: ['web'],
      technologies: ["React.js", "React Router", "HTML5", "CSS3/SCSS", "JavaScript ES6+"],
      link: "https://www.bkpolymers.in/"
    },
    {
      id: 4,
      title: "Grain Realty – Real Estate Website",
      description: "Built a responsive, modern real estate website showcasing property listings with clean, structured information. Features reusable components and responsive layout across all devices.",
      category: ['web'],
      technologies: ["React.js", "React Router", "CSS3/SCSS", "HTML5", "JavaScript ES6+"],
      link: "https://github.com/sanat75/grainrealty"
    },
    {
      id: 5,
      title: "Pathfinder DSA – Pathfinding Algorithm Visualizer",
      description: "Interactive web app visualizing graph traversal algorithms like A*, Dijkstra's, BFS, and DFS. Features real-time animations, customizable grid, and dynamic user interaction for educational purposes.",
      category: ['algorithms'],
      technologies: ["React.js", "JavaScript ES6+", "HTML5", "CSS3/Bootstrap"],
      link: "https://pathfinderdsa.vercel.app/"
    },
    {
      id: 6,
      title: "Limit Order Book Simulator – Real-Time Trading Engine",
      description: "GUI-based trading simulator replicating limit order books of real-world exchanges. Features FIFO-based matching engine, real-time order book updates, and automated market simulation.",
      category: ['finance', 'algorithms'],
      technologies: ["Python", "Tkinter", "Custom Matching Engine"],
      link: "https://github.com/sanat-chaudhary/limit-order-book"
    },
    {
      id: 7,
      title: "Sudoku Suite – C++17 Puzzle Solver & Generator",
      description: "Modular C++17 library for solving, validating, and generating 9x9 Sudoku puzzles. Features recursive backtracking algorithm, file I/O support, and reusable Grid class with unit test support.",
      category: ['algorithms'],
      technologies: ["C++17", "STL", "OOP Design", "Backtracking Algorithm"],
      link: "https://github.com/sanat-chaudhary/sudoku-suite"
    },
    {
      id: 8,
      title: "Namakwali Brand Strategy Consulting",
      description: "Improved brand clarity and customer engagement for Namakwali, a Shark Tank-funded organic wellness brand. Conducted competitive audit and proposed content strategies to increase online visibility.",
      category: ['consulting'],
      technologies: ["Brand Strategy", "Content Marketing", "Competitive Analysis", "UX Audit"],
      link: "#",
      venue: "180 Degrees Consulting, DTU Chapter"
    },
    {
      id: 9,
      title: "Frimpongs Charity Foundation Strategy",
      description: "Supported community development in Ghana through education and empowerment programs. Designed skills training workshops and co-developed Back to School Initiative addressing financial and mentorship barriers.",
      category: ['consulting'],
      technologies: ["Strategy Development", "Community Outreach", "Program Design", "Needs Assessment"],
      link: "#",
      venue: "180 Degrees Consulting, DTU Chapter"
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        
        <div className="projects-filter">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                {project.venue && (
                  <div className="project-venue">{project.venue}</div>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-link-container">
                  {project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-go-link">
                      <span>Go to Project</span>
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <span className="project-go-link disabled">
                      <span>Coming Soon</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;