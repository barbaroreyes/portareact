import React ,{useState} from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
  const [open , setOpen] = useState(false)
  const [line , setLine] = useState(true)
  const all = () =>{
    setOpen(!open)
    setLine(!line)
  }
  return (
    <div className="header">
      <nav >
        <ul onClick={() =>all()}
       style={{marginTop:open ? 
       '70px':'-70vw'}}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
         </ul>
        </nav>
      <div className="imageContainer">
      <img  className="picture"src ='/1650049621.ico' alt=""/>
      </div>
      <span>
          Barbaro Reyes
        </span>
        <span>
          <img className='profile' src ='https://avatars.githubusercontent.com/u/48423441?s=80&v=4' alt =''/>
        </span>
        
      <div
      onClick={() =>all()}
      style={{flexDirection:line?
      'column':'row'}}
      className="movil-nav" >
     <div 
     
     className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
     </div>
      
   
    </div>
  );
}

export default Header;
