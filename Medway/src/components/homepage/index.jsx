import "./index.css";

export default function Home() {
  return (
    <section className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Diagnósticos Médicos <span>de Alta Precisão</span>
          </h1>
          <p>
            Tecnologia, confiança e inovação para oferecer resultados clínicos rápidos e seguros.
          </p>
          <button className="cta-btn">Agendar Exame</button>
        </div>
        <div className="hero-image">
          <img src="/img/photo1.jpg" alt="Foto de exemplo"/>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>Excelência em Diagnósticos</h2>
        <p>
          Nossa plataforma combina análise automatizada com supervisão médica
          especializada. Oferecemos soluções em exames laboratoriais, radiológicos
          e genéticos, com precisão e segurança em cada resultado.
        </p>
      </div>

      {/* Services Section */}
      <div className="services">
        <h2>Serviços</h2>
        <div className="service-cards">
          <div className="card">
            <i className="fa-solid fa-microscope"></i>
            <h3>Exames Laboratoriais</h3>
            <p>Resultados rápidos e precisos em bioquímica, hematologia e imunologia.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-x-ray"></i>
            <h3>Imagem Diagnóstica</h3>
            <p>Equipamentos de ponta para tomografia, raio-x e ressonância magnética.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-dna"></i>
            <h3>Análise Genética</h3>
            <p>Diagnóstico preditivo com base em sequenciamento genético de alta precisão.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>Entre em Contato</h2>
        <p>
          Agende seu exame ou tire dúvidas com nossa equipe especializada.
        </p>
        <button className="cta-btn">Fale Conosco</button>
      </div>
    </section>
  );
}
