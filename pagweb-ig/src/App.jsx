import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

import './styles/index.css'  // solo el global

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Menu />
      <div style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  )
}

export default App
