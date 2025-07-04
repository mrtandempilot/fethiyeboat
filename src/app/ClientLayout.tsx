"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const menu = {
  en: [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/#gallery" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ],
  tr: [
    { label: "Anasayfa", href: "/" },
    { label: "Turlar", href: "/#gallery" },
    { label: "Galeri", href: "/gallery" },
    { label: "Yorumlar", href: "/#reviews" },
    { label: "İletişim", href: "/#contact" },
  ],
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Modern Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">⛵</div>
            <span>Fethiye Boat Tours</span>
          </a>
          <nav>
            <ul className="nav-menu">
              {menu[lang].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="language-selector">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              🇺🇸 EN
            </button>
            <button
              className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
              onClick={() => setLang('tr')}
            >
              🇹🇷 TR
            </button>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  );
} 