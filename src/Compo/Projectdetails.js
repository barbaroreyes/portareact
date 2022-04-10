import React , {useContext} from 'react'
import {ProjectContex} from '../contex/projects'
import {useParams ,useNavigate} from 'react-router-dom'

const Projectdetails = () => {
  const history = useNavigate()
    const projects  = useContext(ProjectContex)
    const {id} = useParams() 
    const projectd = projects.find(item => item.id === id)
    const {name , description, github ,live,tecnologies,category} = projectd 
     console.log('hello')
  return (
    <div className="card-project">
       <div className="card-detail">
         <div className="info">
          <h3>{name}</h3>
          <a href={live}>Live</a>
          <h3>{tecnologies}</h3>
          <a href={github}>github</a>
         <h4>{category}</h4>
         </div>
       
        <div className = "logo">
        <img className="logoImage" src = {description} alt=''/>
        </div>
       <div className = "btn-container">
       <button className='btn' onClick={()=>history('/projects')}> All Projects</button>
       </div>
       </div>

      
    </div>
  )
}

export default Projectdetails
