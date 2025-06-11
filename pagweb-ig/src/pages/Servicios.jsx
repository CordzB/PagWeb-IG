import '../styles/Servicios.css'

function Servicios() {
  const servicios = [
    {
      nombre: 'Diseño e instalación de redes de datos',
      imagen: 'https://via.placeholder.com/300x200?text=Redes+de+Datos',
      descripcion: 'Planificación e implementación de redes cableadas e inalámbricas para empresas y hogares.'
    },
    {
      nombre: 'Instalación y mantenimiento de sistemas CCTV',
      imagen: 'https://via.placeholder.com/300x200?text=CCTV',
      descripcion: 'Sistemas de videovigilancia de alta definición con monitoreo remoto y grabación.'
    },
    {
      nombre: 'Implementación de sistemas de alarmas',
      imagen: 'https://via.placeholder.com/300x200?text=Alarmas',
      descripcion: 'Sistemas de alarma contra intrusión y detección de incendios con alertas en tiempo real.'
    },
    {
      nombre: 'Automatización y sistemas tecnológicos avanzados',
      imagen: 'https://via.placeholder.com/300x200?text=Automatizacion',
      descripcion: 'Soluciones integradas para automatización de procesos y control inteligente de espacios.'
    },
    {
      nombre: 'Consultoría en telecomunicaciones y seguridad',
      imagen: 'https://via.placeholder.com/300x200?text=Consultoria',
      descripcion: 'Asesoría especializada para proyectos de telecomunicaciones y sistemas de seguridad.'
    },
    {
      nombre: 'Consultoría en Construccion y Mantenimiento',
      imagen: 'https://via.placeholder.com/300x200?text=Consultoria',
      descripcion: 'Asesoría especializada en Mantenimiento y soporte de sus equipos'
    }
  ]

  return (
    <div className="page-container">
      <h1>Servicios</h1>
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <img src={servicio.imagen} alt={servicio.nombre} />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios
