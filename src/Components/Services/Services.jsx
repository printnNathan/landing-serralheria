import { services } from '../../data/content';

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>Soluções completas em serralheria</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
