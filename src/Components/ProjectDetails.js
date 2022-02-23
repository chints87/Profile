import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from '../styles/ProjectDetails.module.css';
import Section from './Section';


export default function ProjectDetails() {
    const location = useLocation();
    const { projects } = location.state;
    console.log(projects);
  return (
    <div className={styles.projectDetails}>
      <div className={styles.banner}>
        <h2>{projects.title}</h2>
        <p>{projects.description}</p>
        <a href='https://www.handforhandmade.org/' target="_blank" rel="noreferrer noopener">
            <button type="button">LIVE LINK</button>    
        </a>        
      </div>
      <div className={styles.section}>
        {projects.section.map((section) => (
          <section>
            <Section subheader={section.subheader}  description={section.description} />
          </section>         
        ))}
      </div>  
      
      <div className={styles.tools}>
        <h4>Tools used</h4>
        <div className={styles.toolDisplay}>
        {projects.tools.map((tool) =>             
              <div className={styles.tool}>{tool}</div>
          )}
         </div>   
      </div>    
    </div>
  )
}
