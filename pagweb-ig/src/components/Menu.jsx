import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="menu">
      <div className="menu-container">
       <div className="menu-logo">
  INFINITY GROUP
  <i
    className="bi bi-infinity"
    style={{
      marginLeft: '8px',
      fontSize: '2.5rem', /* más grande */
      verticalAlign: 'middle' /* para que quede bien alineado */
    }}
  ></i>
</div>


        <div className="menu-hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`menu-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
          <li><Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
          <li><Link to="/proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
