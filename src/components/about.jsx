
import aboutVet from "../assets/about-vet.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
       <img
  src={aboutVet}
  alt="Venüs Veteriner Kliniği veteriner hizmetleri"
  className="about-photo"
/>

        <div className="about-badge">
  <strong>VETERİNER</strong>
  <span>Kliniği</span>
</div>
      </div>


      <div className="about-content">

        <span className="section-label">
          HAKKIMIZDA
        </span>

        <h2>
          Dostlarınıza gösterdiğiniz özeni
          <span> biz de gösteriyoruz.</span>
        </h2>

        <p className="about-lead">
          XXX Veteriner Kliniği olarak dostlarımızın sağlık
          ihtiyaçlarına özenli ve güvenilir bir yaklaşımla hizmet
          vermeyi amaçlıyoruz.
        </p>

        <p className="about-description">
          Muayene, koruyucu hekimlik, görüntüleme ve laboratuvar
          hizmetleriyle sağlık süreçlerini bütüncül bir yaklaşımla
          değerlendiriyoruz.
        </p>


        <div className="about-features">

          <div className="about-feature">
            <span>✓</span>

            <div>
              <strong>Özenli Yaklaşım</strong>
              <p>Her dostumuzun ihtiyacına özel değerlendirme.</p>
            </div>
          </div>


          <div className="about-feature">
            <span>✓</span>

            <div>
              <strong>Modern Hizmet</strong>
              <p>Tanı ve tedavi süreçlerini destekleyen uygulamalar.</p>
            </div>
          </div>


          <div className="about-feature">
            <span>✓</span>

            <div>
              <strong>Güvenilir İletişim</strong>
              <p>Süreç boyunca açık ve anlaşılır bilgilendirme.</p>
            </div>
          </div>

        </div>


        <a href="#contact" className="about-button">
          Kliniğimizle İletişime Geçin →
        </a>

      </div>

    </section>
  );
}

export default About;