import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <div className="card-project">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <a href={props.live}>live</a>
        <h3>{props.tecnologies}</h3>
        <a href={props.github}>github</a>
        <h4>{props.category}</h4>

      
    </div>
  );
}

export default Project;

