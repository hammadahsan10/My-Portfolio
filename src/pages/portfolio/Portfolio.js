import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import React from "react";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <>
      <section className="portfolio container">
        <div className="portfolio-intro">
          <PageHeader title="Projects" description="View my work" />
        </div>
        <div className="row portfolio-grid g-3">
          <ProjectList />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
