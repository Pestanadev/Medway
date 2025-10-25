import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="highlight">Med</span>Diag
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} MedDiag — Diagnósticos Médicos de Alta Precisão.  
          Todos os direitos reservados.
        </p>

        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    

    </footer>
  );
}
