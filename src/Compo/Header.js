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
      <div>foto</div>
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
