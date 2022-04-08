import React ,{useContext}from 'react';
import {ProjectContex } from '../contex/projects'
import Project from '../Compo/Project'
const Projects = () => {
    const projects  = useContext(ProjectContex)
    console.log(projects)
  return (
    <div className="cards">
        <h2>Projects</h2>
      {projects.map((item , i)=>{
        return (<div key={i} className="cardInt"><Project {...item}/></div>) 
      })}
    </div>
  );
}

export default Projects;
