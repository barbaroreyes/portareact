import React ,{useContext}from 'react';
import {ProjectContex } from '../contex/projects'
import Project from '../Compo/Project'
import {Link ,useNavigate} from 'react-router-dom'
const Projects = () => {
    const projects  = useContext(ProjectContex)
    const history = useNavigate()
    console.log(projects)
  return (
    <div className="cards">
        <h2>Projects</h2>
      {projects.map((item , i)=>{
        return (<div onClick={()=>history(`/projects/${item.id}`)} key={i} className="cardInt"><Project {...item}/></div>) 
      })}
    </div>
  );
}

export default Projects;
