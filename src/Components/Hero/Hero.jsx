function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <h1>Max Portões Automáticos</h1>
        <p>
          Soluções completas em serralheria com qualidade, segurança e profissionalismo em Cajamar/SP.
        </p>
        <a
          href="https://wa.me/5511913686502?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}

export default Hero;
