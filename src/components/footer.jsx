function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* LOGO + AÇIKLAMA */}
        <div className="footer-brand">

          <div className="footer-logo-text">
  <strong>VETERİNER</strong>
  <span>KLİNİĞİ</span>
</div>

          <p>
            Dostlarınızın sağlığı ve mutluluğu için özenli,
            güvenilir ve modern veteriner hizmetleri.
          </p>

          <a
            href="tel:+90xxxxxxxx"
            className="footer-phone"
          >
            ☎ 0 (xxx) xxx xx xx
          </a>

        </div>


        {/* MENÜ */}
        <div className="footer-column">

          <h3>Menü</h3>

          <nav className="footer-links">
            <a href="#home">Ana Sayfa</a>
            <a href="#services">Hizmetlerimiz</a>
            <a href="#about">Hakkımızda</a>
            <a href="#faq">Sıkça Sorulan Sorular</a>
            <a href="#contact">İletişim</a>
          </nav>

        </div>


        {/* HİZMETLER */}
        <div className="footer-column">

          <h3>Hizmetler</h3>

          <div className="footer-links">
            <a href="#services-detail">Genel Muayene</a>
            <a href="#services-detail">Cerrahi Operasyonlar</a>
            <a href="#services-detail">Aşı & Mikroçip</a>
            <a href="#services-detail">Dijital Röntgen</a>
            <a href="#services-detail">Laboratuvar</a>
          </div>

        </div>


        {/* İLETİŞİM */}
        <div className="footer-column footer-contact">

          <h3>İletişim</h3>

          <div className="footer-contact-item">
            <span>Konum</span>
            <strong>Serdivan / Sakarya</strong>
          </div>

          <div className="footer-contact-item">
            <span>Telefon</span>

            <a href="tel:+9xxxxxxx">
              0 (xxx) xxx xx xx
            </a>
          </div>

          <a
            href="#contact"
            className="footer-contact-button"
          >
            Bize Ulaşın →
          </a>

        </div>

      </div>


      {/* FOOTER ALT */}
      <div className="footer-bottom">

        <p>
          © 2026 Veteriner Kliniği. Tüm hakları saklıdır. · Tasarım: <a href="https://dablabs.net/" target="_blank" rel="noopener">DAB Labs</a>
        </p>

        <a href="#home">
          Yukarı Dön ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;