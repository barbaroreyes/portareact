import Projects from './Compo/Projects' ;
import {Routes , Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Projects/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
