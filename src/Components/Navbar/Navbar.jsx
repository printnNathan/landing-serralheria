import { useEffect } from 'react';
import logoImage from '../../assets/Logo/Logo_max.jpeg';

function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const onScroll = () => {
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            <li><a href="#portfolio" onClick={handleCloseMenu}>Nossos Trabalhos</a></li>
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
