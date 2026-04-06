import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';
import './Skills.css';

const ease = [0.16, 1, 0.3, 1];

const skillsData = {
  frontend: [
    'HTML5',
    'CSS3 / SCSS',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Redux',
    'Redux Toolkit',
    'API Integration (Fetch / Axios)',
    'PrimeReact',
    'Material UI',
    'Ant Design'
  ],
  database: [
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Supabase'
  ],
  backend: [
    'Node.js (Express.js)',
    'Nest.js',
    'Socket.io',
    'JWT Authentication',
    'Cron Jobs',
    'FCM Token',
    'Payment Gateway',
    'Hardware Integration'
  ],
  cloud: [
    'Microsoft Azure',
    'AWS',
    'Heroku',
    'Netlify',
    'Vercel'
  ],
  tools: [
    'Git',
    'GitHub',
    'GitLab',
    'Firebase'
  ]
};

const Skills = () => {
  const reduceMotion = useReducedMotion();

  const wrapperMotion = reduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.14 },
        transition: { duration: 0.72, ease },
      };

  return (
        <div className="skills-container container">
          <PageHeader title="Skills" description="Tech stack & tools" />
          <motion.div className="skills-wrapper" {...wrapperMotion}>
            {/* Left Section */}
            <div className="skills-column left-column">
              {/* Frontend */}
              <div className="skill-category fade-in">
                <h4 className="category-title">Frontend</h4>
                <div className="skills-grid">
                  {skillsData.frontend.map((skill, index) => (
                    <div className="skill-badge" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="skill-category fade-in">
                <h4 className="category-title">Backend</h4>
                <div className="skills-grid">
                  {skillsData.backend.map((skill, index) => (
                    <div className="skill-badge" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="skills-divider"></div>

            {/* Right Section */}
            <div className="skills-column right-column">
              {/* Database */}
              <div className="skill-category fade-in">
                <h4 className="category-title">Database</h4>
                <div className="skills-grid">
                  {skillsData.database.map((skill, index) => (
                    <div className="skill-badge" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & Deployment */}
              <div className="skill-category fade-in">
                <h4 className="category-title">Cloud & Deployment</h4>
                <div className="skills-grid">
                  {skillsData.cloud.map((skill, index) => (
                    <div className="skill-badge" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Version Control */}
              <div className="skill-category fade-in">
                <h4 className="category-title">Tools & Version Control</h4>
                <div className="skills-grid">
                  {skillsData.tools.map((skill, index) => (
                    <div className="skill-badge" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
    );
};

export default Skills;
