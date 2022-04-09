import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <div className="card-project">
       <div className="card">
       <h3>{props.name}</h3>
       <h3>{props.tecnologies}</h3>
        <h4>{props.category}</h4>
       </div>

      
    </div>
  );
}

export default Project;

