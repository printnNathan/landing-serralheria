function Location() {
  return (
    <section className="location" id="location">
      <div className="container">
        <div className="section-title">
          <h2>Nossa Localização</h2>
          <p>Visite-nos ou entre em contato</p>
        </div>

        <div className="location-content">
          <article className="location-info">
            <h3>Informações de Contato</h3>

            <div className="info-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <div>
                <h4>Endereço</h4>
                <p>
                  Av. Ten. Marques, 20 - Panorama
                  <br />
                  Cajamar - SP, 07792-820
                  <br />
                  Empresarial Mirante de Cajamar
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="https://wa.me/5511913686502" target="_blank" rel="noreferrer">
                    (11) 91368-6502
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock" aria-hidden="true"></i>
              <div>
                <h4>Horário de Atendimento</h4>
                <p>
                  Segunda a Sexta: 08h às 18h
                  <br />
                  Sábado: 08h às 13h
                </p>
              </div>
            </div>
          </article>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5834967891877!2d-46.87869932402772!3d-23.379468578959285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf04b4e1ef2d7b%3A0x8a3c1c3d4f5e6b7c!2sAv.%20Ten.%20Marques%2C%2020%20-%20Panorama%2C%20Cajamar%20-%20SP%2C%2007792-820!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Max Portões"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
