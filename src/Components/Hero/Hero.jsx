function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <h1>Max Portões Automáticos</h1>
        <p>
          Soluções completas em serralheria com qualidade, segurança e profissionalismo em Cajamar/SP.
        </p>
        <a
          href="https://wa.me/5511914824115?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          Solicitar Orçamento
        </a>
        <div className="hero-badges">
          <div className="badge">
            <i className="fas fa-truck"></i>
            <span>Pagamento na Entrega</span>
          </div>
          <div className="badge">
            <i className="fas fa-credit-card"></i>
            <span>Até 10x Sem Juros</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

