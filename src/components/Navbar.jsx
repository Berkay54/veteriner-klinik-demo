

import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
    <a href="#home" className="navbar-logo">
  <div className="logo-text">
    <strong>VETERİNER</strong>
    <span>KLİNİĞİ</span>
  </div>
</a>

      <nav className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>
   <a
  href="#home"
  className="active"
  onClick={() => setMenuOpen(false)}
>
  Ana Sayfa
</a>

<a href="#services" onClick={() => setMenuOpen(false)}>
  Hizmetlerimiz
</a>

<a href="#about" onClick={() => setMenuOpen(false)}>
  Hakkımızda
</a>

<a href="#faq" onClick={() => setMenuOpen(false)}>
  Sıkça Sorulan Sorular
</a>

<a href="#contact" onClick={() => setMenuOpen(false)}>
  İletişim
</a>
      </nav>




      <div className="navbar-right">
        <a href="tel:+90xxxxxxxx" className="phone">
          <span className="phone-icon">☎</span>
          0 (xxx) xxx xx xx
        </a>

        <a href="#contact" className="appointment-btn">
          <span>▣</span>
          Randevu Al
        </a>
      </div>


        <button
  className={`menu-toggle ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Menüyü aç veya kapat"
  aria-expanded={menuOpen}
>
  <span></span>
  <span></span>
  <span></span>
</button>
    </header>
  );
}

export default Navbar;