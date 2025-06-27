import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C/C++', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'Angular', level: 82 },
        { name: 'FastAPI', level: 85 }
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Deep Learning', level: 92 },
        { name: 'Generative AI', level: 85 },
        { name: 'Signal Processing', level: 90 },
        { name: 'Data Science', level: 88 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 78 },
        { name: 'MongoDB', level: 82 },
        { name: 'Git', level: 85 },
        { name: 'Cloud Platforms', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-group">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;