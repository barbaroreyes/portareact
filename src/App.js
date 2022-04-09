import Projects from './Compo/Projects' ;
import {Routes , Route} from 'react-router-dom' ;
import {Amplify} from 'aws-amplify' ;
import confi from './aws-exports'
import './App.css';
import Home from './pages/Home'
import Header from './Compo/Header';
import Footer from './Compo/Footer';
Amplify.configure(confi)

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
