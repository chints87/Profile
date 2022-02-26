import React from "react";
import styles from '../styles/Portfolio.module.css';
import ProjectItem from "./ProjectItem";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.portfolio.liveProjects.map(function (projects) {
      return (
        <div key={projects.title} className="portfolio-item">
            <ProjectItem 
              image={projects.image} 
              title = {projects.title} 
              description = {projects.description} 
              projects= {projects}
            />
        </div>
      );
    });
    var demoProjects = data.portfolio.demoProjects.map(function (projects) {
      return (
        <div key={projects.title} className="portfolio-item">
            <ProjectItem 
              image={projects.image} 
              title = {projects.title} 
              description = {projects.description} 
              projects= {projects}
            />
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className={styles.portfolio}>
        <div>          
          <div>
            <h1>Client Projects</h1>
            {projects? projects : null}
            <h1>Portfolio</h1>
            {demoProjects? demoProjects: null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
