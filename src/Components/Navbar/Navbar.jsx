import React from 'react';
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MAX PORTÕES</div>

      <ul className={styles.menu}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/sobre">Habilidades</a></li>
        <li><a href="/projetos">Projetos</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
