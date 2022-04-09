import React ,{useContext}from 'react';
import {ProjectContex } from '../contex/projects'
import Project from '../Compo/Project'
import {Link} from 'react-router-dom'
const Projects = () => {
    const projects  = useContext(ProjectContex)
    console.log(projects)
  return (
    <div className="cards">
        <h2>Projects</h2>
      {projects.map((item , i)=>{
        return (<Link to ={`/projects/${item.id}`} key={i} className="cardInt"><Project {...item}/></Link>) 
      })}
    </div>
  );
}

export default Projects;
