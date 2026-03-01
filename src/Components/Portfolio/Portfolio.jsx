import { portfolioItems } from '../../data/content';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Trabalhos</h2>
          <p>Confira alguns de nossos projetos</p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <figure className="portfolio-item" key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
