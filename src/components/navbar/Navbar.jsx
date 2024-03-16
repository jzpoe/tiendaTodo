import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="container-navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to={'/'} className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link></li>
        <li className="navbar-item"><Link to={'/image'} className={`navbar-link ${location.pathname === '/admin' ? 'active' : ''}`}>IMAGENES</Link></li>
        <li className="navbar-item"><Link to={'/login'} className={`navbar-link ${location.pathname === '/login' ? 'active' : ''}`}>INICIAR SESION</Link></li>
        <li className="navbar-item"><Link to={'/register'} className={`navbar-link ${location.pathname === '/register' ? 'active' : ''}`}>REGISTRARSE</Link></li>
      </ul>
    </nav>
  );
};