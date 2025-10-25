import React from "react";
import "./index.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <img className="logoicon" src="./logo.png" alt="" />
        <span className="logo-highlight">Med</span>Diag
        
      </div>

      <nav className="nav-links">
        <a href="#home" className="active">Início</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>

      <button className="login-btn">Área do Paciente</button>
    </header>
  );
}
