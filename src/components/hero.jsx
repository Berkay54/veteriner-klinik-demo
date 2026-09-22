import heroVet from "../assets/hero-vet.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-location">
          SAKARYA • SERDİVAN
        </p>

        <h1 className="hero-title">
          Onların sağlığı,
          <span> bizim önceliğimiz.</span>
        </h1>

        <p className="hero-description">
          Dostlarınızın sağlığı ve mutluluğu için modern,
          güvenilir ve özenli veteriner hizmetleri.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-primary-btn">
            Randevu Al
          </a>

          <a href="tel:+902642754282" className="hero-secondary-btn">
            Bizi Arayın
          </a>
        </div>

        <div className="hero-info">

  <div className="hero-info-item">
    <div className="hero-info-icon">✚</div>

    <div>
      <strong>Kapsamlı</strong>
      <span>Veteriner Hizmeti</span>
    </div>
  </div>

  <div className="hero-info-item">
    <div className="hero-info-icon">♥</div>

    <div>
      <strong>Özenli</strong>
      <span>Hasta Yaklaşımı</span>
    </div>
  </div>

  <div className="hero-info-item">
    <div className="hero-info-icon">●</div>

    <div>
      <strong>Serdivan</strong>
      <span>Sakarya</span>
    </div>
  </div>

</div>

      </div>

      <div className="hero-image">
  <img
    src={heroVet}
    alt="Veteriner hekim, köpek ve kedi"
  />

  <div className="hero-floating-card">
    <div className="floating-icon">♥</div>

    <div className="floating-text">
      <span>SEVGİYLE BAKIM</span>
      <strong>Her zaman yanınızda</strong>
    </div>
  </div>
</div>

    </section>
  );
}

export default Hero;