"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menu = {
  en: [
    { label: "Home", href: "#home" },
    { label: "Tours", href: "#tours" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  tr: [
    { label: "Anasayfa", href: "#home" },
    { label: "Turlar", href: "#tours" },
    { label: "Galeri", href: "#gallery" },
    { label: "Yorumlar", href: "#reviews" },
    { label: "İletişim", href: "#contact" },
  ],
};

function LayoutContent({ children }: { children: React.ReactNode }) {
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
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Modern Header */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <a href="#home" className="logo">
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
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
