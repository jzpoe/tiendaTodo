
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/Login/Login';
import { Registrar } from './components/Registrar/Registrar';
import { Image } from './components/updateImage/Image';
import Navbar from './components/navbar/Navbar';

function App() {
 

  return (
    
    
    <Router>
    <Navbar/>
        
        <Routes>
        <Route path='/' element={<Home />} />

          <Route path='/' element={<Home />} />
          <Route path='/image' element={<Image/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registrar />} />
        </Routes>
     
    </Router>
    
  )
}

export default App
