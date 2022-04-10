import React from 'react'
import {Link} from 'react-router-dom'
import {GrReactjs} from 'react-icons/gr'
import {SiAmazonaws,SiGraphql} from 'react-icons/si'
const Home = () => {
  return (
    <div className="home">
      {/* <div className="picture">
       picture
      </div> */}
      <div className="dadproject">
      <h1>Software </h1>
        <Link to='/projects' className='kidproject'>Full-Stack</Link>
        <Link to='/projects'div className='kidproject'>Front-End</Link>
        <Link to='/projects'div className='kidproject'>Backend</Link>
        <Link to='/projects'div className='kidproject'>UX_UI</Link>
        <h1> Engineer </h1>
        <div className='iconos'>
        <GrReactjs/>
        <SiAmazonaws/>
        <SiGraphql/>
        <GrReactjs/> 
        <GrReactjs/>
        </div>

        
       
        {/* <div className='kidproject'>projec</div> */}
        {/* <div className='kidproject'>projec</div>
        
        <div className='kidproject'>projec</div> */}
       


      </div>
    </div>
  )
}

export default Home
