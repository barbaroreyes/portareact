import React ,{useContext}from 'react';
import {ProjectContex } from '../contex/projects'
import Project from '../Compo/Project'
const Projects = () => {
    const projects  = useContext(ProjectContex)
    console.log(projects)
  return (
    <div>
      Projects
      {projects.map((item , i)=>{
        return (<div className="cardDad" key={i}><Project {...item}/></div>) 
      })}
    </div>
  );
}

export default Projects;
