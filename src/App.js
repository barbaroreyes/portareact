import Projects from './Compo/Projects' ;
import {Routes , Route} from 'react-router-dom' ;
import {Amplify} from 'aws-amplify' ;
import confi from './aws-exports'
import './App.css';
import Home from './pages/Home'
import Header from './Compo/Header';
import Footer from './Compo/Footer';
import Projectdetails from './Compo/Projectdetails'
Amplify.configure(confi)

function App() {
  return (
    <div  className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/:id' element={<Projectdetails/>}/>
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
