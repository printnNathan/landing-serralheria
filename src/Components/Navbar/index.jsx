import logoImage from '../../assets/Logo/Logo_max.jpeg';

function Navbar() {
  const handleMenuToggle = () => {
    const navLinks = document.getElementById('navLinks');
    navLinks?.classList.toggle('active');
  };

  const handleCloseMenu = () => {
    const navLinks = document.getElementById('navLinks');
    navLinks?.classList.remove('active');
  };

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={handleCloseMenu}>
          <img src={logoImage} alt="Max Portões" className="logo-image" />
          <span>Max Portões</span>
        </a>

        <nav>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home" onClick={handleCloseMenu}>Início</a></li>
            <li><a href="#about" onClick={handleCloseMenu}>Sobre</a></li>
            <li><a href="#services" onClick={handleCloseMenu}>Serviços</a></li>
            <li><a href="#portfolio" onClick={handleCloseMenu}>Portfólio</a></li>
            <li><a href="#location" onClick={handleCloseMenu}>Localização</a></li>
          </ul>
        </nav>

        <button className="menu-toggle" type="button" onClick={handleMenuToggle} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
