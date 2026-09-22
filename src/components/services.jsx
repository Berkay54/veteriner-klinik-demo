function Services() {
  return (
    <section className="services" id="services-detail">

      <div className="services-heading">
        <span className="section-label">HİZMETLERİMİZ</span>

        <h2>
          Dostlarınız için
          <span> kapsamlı sağlık hizmetleri.</span>
        </h2>

        <p>
          Muayeneden koruyucu hekimliğe, görüntülemeden laboratuvar
          hizmetlerine kadar ihtiyaç duydukları özenli bakım.
        </p>
      </div>

      <div className="services-grid">

        <article className="service-card">
          <div className="service-card-number">01</div>
          <div className="service-card-icon">✚</div>

          <h3>Genel Muayene</h3>

          <p>
            Dostlarınızın genel sağlık durumunun değerlendirilmesi ve
            ihtiyaçlarının belirlenmesi.
          </p>

          <a href="#contact">Detaylı Bilgi →</a>
        </article>


        <article className="service-card">
          <div className="service-card-number">02</div>
          <div className="service-card-icon">♡</div>

          <h3>Cerrahi Operasyonlar</h3>

          <p>
            Gerekli cerrahi işlemlerin değerlendirilmesi ve tedavi
            sürecinin dikkatle takip edilmesi.
          </p>

          <a href="#contact">Detaylı Bilgi →</a>
        </article>


        <article className="service-card">
          <div className="service-card-number">03</div>
          <div className="service-card-icon">✦</div>

          <h3>Aşı & Mikroçip</h3>

          <p>
            Koruyucu sağlık uygulamaları, aşılama süreçleri ve mikroçip
            işlemleri.
          </p>

          <a href="#contact">Detaylı Bilgi →</a>
        </article>


        <article className="service-card">
          <div className="service-card-number">04</div>
          <div className="service-card-icon">◈</div>

          <h3>Dijital Röntgen</h3>

          <p>
            Tanı sürecini destekleyen dijital görüntüleme hizmetleri ve
            veteriner değerlendirmesi.
          </p>

          <a href="#contact">Detaylı Bilgi →</a>
        </article>


        <article className="service-card">
          <div className="service-card-number">05</div>
          <div className="service-card-icon">⌁</div>

          <h3>Laboratuvar</h3>

          <p>
            Tanı ve takip süreçlerini destekleyen laboratuvar analizleri
            ve değerlendirmeleri.
          </p>

          <a href="#contact">Detaylı Bilgi →</a>
        </article>


        <article className="service-card">
          <div className="service-card-number">06</div>
          <div className="service-card-icon">♥</div>

          <h3>Koruyucu Hekimlik</h3>

          <p>
            Hastalıkların önlenmesine yönelik düzenli kontroller ve
            koruyucu sağlık uygulamaları.
          </p>

          <a href="#contact">Detaylı Bilgi →</a>
        </article>

      </div>

    </section>
  );
}

export default Services;