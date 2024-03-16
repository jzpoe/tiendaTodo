
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './components/Login/Login';
import { Registrar } from './components/Registrar/Registrar';
import { Image } from './components/updateImage/Image';
import { Header } from './components/header/Header';

function App() {
 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/image' element={<Image/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registrar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
