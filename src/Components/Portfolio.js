import React from "react";
import styles from '../styles/Portfolio.module.css';

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.portfolio.liveProjects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="portfolio-item">
          <div>
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  console.log(data ? data.name : null);

  return (
    <section id="portfolio">
      <div className={styles.portfolio}>
        <div>
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"            
          >
            {projects? projects : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
