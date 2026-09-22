function Cta() {
  return (
    <section className="cta">

      <div className="cta-content">

      <span className="cta-label">
  VETERİNER KLİNİĞİ
</span>

        <h2>
          Dostunuzun sağlığı için
          <span> bugün iletişime geçin.</span>
        </h2>

        <p>
          Muayene, koruyucu sağlık ve diğer veteriner hizmetleri
          hakkında bilgi almak için bize ulaşabilirsiniz.
        </p>

      </div>


      <div className="cta-buttons">

        <a
          href="tel:+90xxx xxx xx xx"
          className="cta-primary"
        >
          <span className="cta-phone">☎</span>

          <div>
            <small>BİZİ ARAYIN</small>
            <strong>0 (xxx) xxx xx xx</strong>
          </div>
        </a>


        <a
          href="#contact"
          className="cta-secondary"
        >
          İletişime Geç
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default Cta;