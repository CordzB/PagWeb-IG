import '../styles/Contacto.css'

function Contacto() {
  return (
    <div className="page-container contacto-container">
      <h1>Contacto</h1>
      <p>Puedes contactarnos por los siguientes medios:</p>

      <div className="contacto-info">
        <div className="contacto-item">
          <i className="bi bi-telephone-fill"></i>
          <span>+504 9999-9999</span>
          <a href="tel:+50499999999" className="btn-sutil">Llamar</a>
        </div>

        <div className="contacto-item">
          <i className="bi bi-envelope-fill"></i>
          <span>mail@infinitygroup.com</span>
          <a href="mailto:info@infinitygroup.com" className="btn-sutil">Enviar correo</a>
        </div>

        <div className="contacto-item">
          <i className="bi bi-geo-alt-fill"></i>
          <span>Blvd. SPS , Honduras</span>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sutil"
          >
            Ver ubicación
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacto
