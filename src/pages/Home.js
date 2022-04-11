import React from 'react'
import {Link} from 'react-router-dom'
import {GrReactjs} from 'react-icons/gr'
import {SiAmazonaws,} from 'react-icons/si'
import {DiGithubAlt} from "react-icons/di";
import {} from 'react-icons/si'
import {SiStripe,SiCss3,SiGraphql,SiHtml5} from 'react-icons/si'


import {DiMongodb} from 'react-icons/di'
import {DiNodejsSmall} from 'react-icons/di'
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
        <DiGithubAlt/>
        <SiCss3/> 
        <DiMongodb/>
        <DiNodejsSmall/>
        <SiStripe/>
        <SiGraphql/>
        <SiHtml5/>
        </div>
      </div>
    </div>
  )
}

export default Home
