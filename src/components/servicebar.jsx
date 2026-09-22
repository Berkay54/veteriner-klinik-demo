function ServiceBar() {
  return (
    <section className="service-bar" id="services">

      <div className="service-bar-item">
        <div className="service-bar-icon">✚</div>

        <div className="service-bar-text">
          <strong>Genel Muayene</strong>
          <span>Sağlık Kontrolü</span>
        </div>
      </div>

      <div className="service-bar-item">
        <div className="service-bar-icon">♡</div>

        <div className="service-bar-text">
          <strong>Cerrahi</strong>
          <span>Operasyonlar</span>
        </div>
      </div>

      <div className="service-bar-item">
        <div className="service-bar-icon">✦</div>

        <div className="service-bar-text">
          <strong>Aşı & Mikroçip</strong>
          <span>Koruyucu Sağlık</span>
        </div>
      </div>

      <div className="service-bar-item">
        <div className="service-bar-icon">◈</div>

        <div className="service-bar-text">
          <strong>Dijital Röntgen</strong>
          <span>Görüntüleme</span>
        </div>
      </div>

      <div className="service-bar-item">
        <div className="service-bar-icon">⌁</div>

        <div className="service-bar-text">
          <strong>Laboratuvar</strong>
          <span>Tanı & Analiz</span>
        </div>
      </div>

    </section>
  );
}

export default ServiceBar;