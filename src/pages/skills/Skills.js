import React from 'react';
import './Skills.css';

const skillsData = [
    { name: 'HTML/ HTML5', proficiency: 80, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'CSS/ CSS3/ SCSS', proficiency: 80, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Tailwind CSS', proficiency: 65, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'JavaScript - ES5/ES6', proficiency: 65, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'React JS', proficiency: 80, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'React-Router, Context API, Hooks, Formik', proficiency: 80, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Redux/ Redux Toolkit', proficiency: 70, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'API - Integration, Fetch/Axios', proficiency: 85, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Bootstrap, React-Bootstrap', proficiency: 70, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Prime React, Ant-Design, Material-UI', proficiency: 75, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Firebase', proficiency: 65, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Microsoft Azure', proficiency: 70, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Git/ Git Hub', proficiency: 70, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
    { name: 'Heroku/ Netlify', proficiency: 70, bgColor: 'linear-gradient(83deg, #456e9d, rgb(4 12 78))' },
];

const Skills = () => {  
    return (
        <div className="skills-container">
            <h3 className="pageTitlee resp" style={{textAlign:"center"}}>SKILLS</h3>
            <br />
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index} style={{ background: skill.bgColor }}>
                        <div className="skill-content">
                            <h4 style={{color:"lightcyan"}}>{skill.name}</h4>
                            <div className="proficiency-bar" style={{ width: `${skill.proficiency}%` }}></div>
                            <div className="proficiency-text textNone">{skill.proficiency}%</div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Skills;
