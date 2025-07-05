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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation (optional, for better UX)
  useEffect(() => {
    if (menuOpen) {
      const closeMenu = () => setMenuOpen(false);
      window.addEventListener('resize', closeMenu);
      return () => window.removeEventListener('resize', closeMenu);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Modern Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">⛵</div>
            <span>Fethiye Boat Tours</span>
          </a>
          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
          {/* Desktop Menu */}
          <nav className="desktop-nav">
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
        {/* Mobile Menu Drawer */}
        <nav
          id="mobile-menu"
          className={`mobile-nav${menuOpen ? ' open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className="nav-menu">
            {menu[lang].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="language-selector mobile-lang">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => { setLang('en'); setMenuOpen(false); }}
            >
              🇺🇸 EN
            </button>
            <button
              className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
              onClick={() => { setLang('tr'); setMenuOpen(false); }}
            >
              🇹🇷 TR
            </button>
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  );
} 