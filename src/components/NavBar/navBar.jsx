import React from "react";
import './NavBar.css'; // Importando el archivo CSS

const NavBar = () => {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          <span className="logo-mark">Gonzalo Vaserman</span>
        </a>

        <nav className="nav__links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Skills</a>
        </nav>

        <a href="#contact" className="btn btn--cta">Contact Me</a>

        {/* menú hamburguesa opcional */}
        <button className="nav__burger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
