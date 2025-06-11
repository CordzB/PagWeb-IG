import { useState, useEffect } from 'react'

function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { text: 'Servicios de Redes', className: 'slide-1' },
    { text: 'Sistemas CCTV', className: 'slide-2' },
    { text: 'Alarmas y Tecnología', className: 'slide-3' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 4 segundos por slide
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      <div className="carrusel-container mb-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carrusel-slide ${slide.className} ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            {slide.text}
          </div>
        ))}
        <div className="carrusel-controls">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>

      <h1>Bienvenido a nuestra empresa de Telecomunicaciones</h1>
      <p>Especialistas en sistemas tecnológicos, redes, CCTV y alarmas.</p>
    </div>
  )
}

export default Inicio
