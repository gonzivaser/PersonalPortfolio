import React from "react";
import './NavBar.css'; // Importando el archivo CSS

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre Mi</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
