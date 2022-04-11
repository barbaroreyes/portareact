import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
       <Link to='/projects' className='kidproject'>Full-Stack</Link>
        <Link to='/projects'div className='kidproject'>Front-End</Link>
        <Link to='/projects'div className='kidproject'>Backend</Link>
        <Link to='/projects'div className='kidproject'>UX_UI</Link>
    </div>
  )
}

export default Footer
