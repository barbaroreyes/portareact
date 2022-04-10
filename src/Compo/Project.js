import React from 'react';
import {useNavigate} from 'react-router-dom'

const Project = (props) => {
  const history= useNavigate()
  return (
    <div className="card-project">
       <div className="card">
       <button className="btn" onClick={() =>history('/')}>Go Home</button>
       <h3>{props.name}</h3>
       
        <div className = "logo">
        <img className="logoImage" src = {props.description} alt=''/>
        </div>
        <button className="btn" onClick={() =>history('/projects/:id')}>Go inside</button>
       </div>
       
      
    </div>
  );
}

export default Project;

