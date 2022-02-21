import React from 'react'
import { useLocation } from 'react-router-dom'
export default function ProjectDetails() {
    const location = useLocation();
    const { projects } = location.state;
    console.log(projects);
  return (
    <div>
      <h2>{projects.title}</h2>
      <p>{projects.description}</p>
    </div>
  )
}
