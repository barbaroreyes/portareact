import Projects from './Compo/Projects' ;
import {Routes , Route} from 'react-router-dom' ;
import {Amplify} from 'aws-amplify' ;
import confi from './aws-exports'
import './App.css';
Amplify.configure(confi)

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
