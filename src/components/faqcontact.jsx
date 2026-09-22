import { useState } from "react";

function FaqContact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="faq-contact">

      {/* SOL TARAF - SSS */}
      <div className="faq-side" id="faq">

        <span className="section-label">
          SIKÇA SORULAN SORULAR
        </span>

        <h2>
          Merak ettikleriniz için
          <span> kısa cevaplar.</span>
        </h2>

        <p className="faq-intro">
          Kliniğimizi ziyaret etmeden önce sık sorulan bazı soruların
          cevaplarına buradan ulaşabilirsiniz.
        </p>


        <div className="faq-list">

          <div className={`faq-item ${activeFaq === 0 ? "active" : ""}`}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(0)}
            >
              <span>Muayene için randevu almam gerekiyor mu?</span>
              <strong>{activeFaq === 0 ? "−" : "+"}</strong>
            </button>

            <div className="faq-answer">
              <p>
                Kliniğin yoğunluk durumuna göre değişebileceği için
                gelmeden önce iletişime geçerek bilgi alabilirsiniz.
              </p>
            </div>
          </div>


          <div className={`faq-item ${activeFaq === 1 ? "active" : ""}`}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(1)}
            >
              <span>Aşı takibini nasıl yapabilirim?</span>
              <strong>{activeFaq === 1 ? "−" : "+"}</strong>
            </button>

            <div className="faq-answer">
              <p>
                Dostunuzun yaşına ve sağlık durumuna uygun aşılama
                süreci veteriner hekim tarafından değerlendirilebilir.
              </p>
            </div>
          </div>


          <div className={`faq-item ${activeFaq === 2 ? "active" : ""}`}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(2)}
            >
              <span>Mikroçip uygulaması yapılıyor mu?</span>
              <strong>{activeFaq === 2 ? "−" : "+"}</strong>
            </button>

            <div className="faq-answer">
              <p>
                Mikroçip işlemleri hakkında kliniğimizle iletişime
                geçerek güncel bilgi alabilirsiniz.
              </p>
            </div>
          </div>


          <div className={`faq-item ${activeFaq === 3 ? "active" : ""}`}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(3)}
            >
              <span>Hangi durumlarda kliniğe başvurmalıyım?</span>
              <strong>{activeFaq === 3 ? "−" : "+"}</strong>
            </button>

            <div className="faq-answer">
              <p>
                Davranış, iştah veya genel sağlık durumunda fark
                ettiğiniz değişikliklerde veteriner hekime danışmanız
                uygun olacaktır.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* SAĞ TARAF - İLETİŞİM */}
      <div className="contact-side" id="contact">

        <span className="contact-small-title">
          BİZE ULAŞIN
        </span>

        <h2>
          Dostunuz için
          <span> yanınızdayız.</span>
        </h2>

        <p className="contact-description">
          Randevu ve bilgi almak için bizimle iletişime geçebilirsiniz.
        </p>


        <div className="contact-info">

          <a
            href="tel:+90XXXXXXXXXX"
            className="contact-info-item"
          >
            <div className="contact-icon">☎</div>

            <div>
              <span>TELEFON</span>
              <strong>0 (XXX) XXX XX XX</strong>
            </div>
          </a>


          <div className="contact-info-item">
            <div className="contact-icon">⌖</div>

            <div>
              <span>KONUM</span>
              <strong>Serdivan / Sakarya</strong>
            </div>
          </div>

        </div>


        <a
          href="tel:+90XXXXXXXXXX"
          className="contact-main-button"
        >
          Randevu İçin Bizi Arayın
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default FaqContact;