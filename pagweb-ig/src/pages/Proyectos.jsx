import { useState, useEffect } from 'react'
import '../styles/Proyectos.css'

function Proyectos() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carruselProyectos = [
    {
      imagen: 'https://via.placeholder.com/1200x400?text=Proyecto+Fibra+Óptica',
      texto: 'Proyecto de red de fibra óptica para empresa X'
    },
    {
      imagen: 'https://via.placeholder.com/1200x400?text=Proyecto+CCTV',
      texto: 'Sistema de CCTV para centro comercial Y'
    },
    {
      imagen: 'https://via.placeholder.com/1200x400?text=Proyecto+Alarmas',
      texto: 'Instalación de alarmas en planta industrial Z'
    }
  ]

  const gridProyectos = [
    {
      imagen: 'https://via.placeholder.com/300x200?text=Proyecto+1',
      titulo: 'Proyecto Fibra Óptica',
      descripcion: 'Instalación de red de fibra óptica en empresa de telecomunicaciones.'
    },
    {
      imagen: 'https://via.placeholder.com/300x200?text=Proyecto+2',
      titulo: 'Sistema CCTV Comercial',
      descripcion: 'Sistema de videovigilancia IP para centro comercial.'
    },
    {
      imagen: 'https://via.placeholder.com/300x200?text=Proyecto+3',
      titulo: 'Sistema de Alarmas Residencial',
      descripcion: 'Implementación de sistema de alarma para condominios residenciales.'
    },
    {
      imagen: 'https://via.placeholder.com/300x200?text=Proyecto+4',
      titulo: 'Automatización de Oficina',
      descripcion: 'Automatización de sistemas eléctricos en oficinas corporativas.'
    },
    {
      imagen: 'https://via.placeholder.com/300x200?text=Proyecto+4',
      titulo: 'Estructura ',
      descripcion: 'Instalacion y conexion con certificaciones.'
    },
    {
      imagen: 'https://via.placeholder.com/300x200?text=Proyecto+4',
      titulo: 'ya no se me ocurrio nada',
      descripcion: 'Toy cansado jefe, de volar solo como golondrina en verano.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carruselProyectos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carruselProyectos.length])

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % carruselProyectos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + carruselProyectos.length) % carruselProyectos.length)
  }

  return (
    <div className="page-container">
      <h1>Proyectos Realizados</h1>

      <div className="carrusel-proyectos-container mb-4">
        {carruselProyectos.map((proyecto, index) => (
          <div
            key={index}
            className={`carrusel-proyecto-slide ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <img src={proyecto.imagen} alt={proyecto.texto} />
            <div className="carrusel-proyecto-texto">{proyecto.texto}</div>
          </div>
        ))}
        <div className="carrusel-controls">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>

      <div className="grid-proyectos">
        {gridProyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-card">
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyectos
