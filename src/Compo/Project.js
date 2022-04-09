import React from 'react';


const Project = (props) => {
 
  return (
    <div className="card-project">
       <div className="card">
       <h3>{props.name}</h3>
       
        <div className = "logo">
        <img className="logoImage" src = {props.description} alt=''/>
        </div>
        
       </div>
       
      
    </div>
  );
}

export default Project;

