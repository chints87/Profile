import React from 'react'
import styles from '../styles/ProjectItem.module.css'
import { Link } from 'react-router-dom'

export default function ProjectItem({projects, title, image, description }) {
  return (
    <div className={styles.projectItem}>
      <img className={styles.projectImage} src={`images/portfolio/${image}`} alt=""/>  
      <div className={styles.projectDetails}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/projects/${title}`} state={{ projects }}>
            <button type="button">CASE STUDY</button>    
        </Link>
       
      </div>       
    </div>
  )
}
