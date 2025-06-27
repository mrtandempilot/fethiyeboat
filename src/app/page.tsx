"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const galleryImages = [
  "/boat-tour-images/fethiye-private-boat-tour-1.jpeg",
  "/boat-tour-images/fethiye-private-boat-tour-2.jpeg",
  "/boat-tour-images/fethiye-private-boat-tour-3.jpeg",
  "/boat-tour-images/fethiye-private-boat-tour-4.jpeg",
  "/boat-tour-images/fethiye-private-boat-tour-5.jpeg",
  "/boat-tour-images/fethiye-12-island-tour-1.jpeg",
  "/boat-tour-images/fethiye-12-island-tour-2.jpeg",
];

const testimonials = [
  {
    name: "Emily R.",
    review: "The best day of our holiday! The yacht was stunning, the crew was so friendly, and the islands were breathtaking.",
    country: "🇬🇧"
  },
  {
    name: "Ahmet K.",
    review: "Fethiye'de böyle bir tur bulmak harika! Her şey çok lüks ve rahattı. Tekrar geleceğiz.",
    country: "🇹🇷"
  },
  {
    name: "Sophie L.",
    review: "A luxury experience from start to finish. Highly recommended for families and couples!",
    country: "🇫🇷"
  },
];

const galleryContent = [
  {
    image: galleryImages[0],
    en: {
      title: "Big Aquarium",
      desc: "A favorite swimming and snorkeling stop, Big Aquarium Bay is famous for its crystal-clear, turquoise waters teeming with marine life. The bay's calm, sheltered setting makes it perfect for families and those who want to spot colorful fish in a natural 'aquarium' environment. The vibrant underwater world and gentle waves create an unforgettable swimming experience.",
      cta: "See More"
    },
    tr: {
      title: "Büyük Akvaryum",
      desc: "Yüzme ve şnorkelle dalış için en sevilen duraklardan biri olan Büyük Akvaryum Koyu, deniz yaşamıyla dolu kristal berraklığındaki turkuaz sularıyla ünlüdür. Koyun sakin, korunaklı ortamı, doğal bir 'akvaryum' ortamında renkli balıkları görmek isteyen aileler ve kişiler için mükemmeldir. Canlı sualtı dünyası ve nazik dalgalar unutulmaz bir yüzme deneyimi yaratır.",
      cta: "Daha Fazla"
    }
  },
  {
    image: galleryImages[1],
    en: {
      title: "Small Aquarium",
      desc: "Small Aquarium Bay is a tranquil cove known for its pristine, shallow waters and perfect snorkeling conditions. This intimate bay offers crystal-clear visibility and a diverse marine ecosystem, making it ideal for underwater exploration. The calm waters and abundant sea life create a peaceful snorkeling experience for all skill levels.",
      cta: "Explore"
    },
    tr: {
      title: "Küçük Akvaryum",
      desc: "Küçük Akvaryum Koyu, el değmemiş, sığ suları ve mükemmel şnorkelle dalış koşullarıyla tanınan huzurlu bir koydur. Bu samimi koy, kristal berraklığında görüş ve çeşitli deniz ekosistemi sunarak sualtı keşfi için idealdir. Sakin sular ve bol deniz yaşamı, tüm beceri seviyeleri için huzurlu bir şnorkelle dalış deneyimi yaratır.",
      cta: "Keşfet"
    }
  },
  {
    image: galleryImages[2],
    en: {
      title: "Orange Spring",
      desc: "Orange Spring Bay is famous for its unique orange-tinted waters and natural thermal springs. This distinctive bay offers a one-of-a-kind swimming experience with warm, mineral-rich waters that are believed to have therapeutic properties. The stunning orange hue creates a magical atmosphere perfect for relaxation and rejuvenation.",
      cta: "Discover"
    },
    tr: {
      title: "Turuncu Pınar",
      desc: "Turuncu Pınar Koyu, benzersiz turuncu tonlu suları ve doğal termal kaynaklarıyla ünlüdür. Bu ayırt edici koy, terapötik özelliklere sahip olduğuna inanılan sıcak, mineral açısından zengin sularla benzersiz bir yüzme deneyimi sunar. Etkileyici turuncu ton, rahatlama ve yenilenme için mükemmel büyülü bir atmosfer yaratır.",
      cta: "Keşfet"
    }
  },
  {
    image: galleryImages[3],
    en: {
      title: "Tarzan",
      desc: "Tarzan Bay is an adventurous stop featuring dramatic cliffs and crystal-clear waters perfect for cliff jumping and swimming. This exciting bay offers thrilling activities for adventure seekers while maintaining the serene beauty of the Mediterranean. The combination of adrenaline-pumping jumps and peaceful swimming creates an unforgettable experience.",
      cta: "Adventure"
    },
    tr: {
      title: "Tarzan",
      desc: "Tarzan Koyu, uçurum atlama ve yüzme için mükemmel olan dramatik kayalıklar ve kristal berraklığındaki sularla dolu macera dolu bir duraktır. Bu heyecan verici koy, Akdeniz'in huzurlu güzelliğini korurken macera arayanlar için heyecan verici aktiviteler sunar. Adrenalin pompalayan atlamalar ve huzurlu yüzmenin kombinasyonu unutulmaz bir deneyim yaratır.",
      cta: "Macera"
    }
  },
  {
    image: galleryImages[4],
    en: {
      title: "Boncuklu",
      desc: "Boncuklu Bay is a hidden gem known for its secluded beaches and pristine natural beauty. This peaceful bay offers crystal-clear waters perfect for swimming and snorkeling, surrounded by untouched landscapes. The tranquil atmosphere and stunning scenery make it an ideal spot for relaxation and connecting with nature.",
      cta: "Experience"
    },
    tr: {
      title: "Boncuklu",
      desc: "Boncuklu Koyu, izole plajları ve el değmemiş doğal güzelliğiyle tanınan gizli bir mücevherdir. Bu huzurlu koy, el değmemiş manzaralarla çevrili yüzme ve şnorkelle dalış için mükemmel olan kristal berraklığındaki sular sunar. Huzurlu atmosfer ve etkileyici manzara, rahatlama ve doğayla bağlantı kurmak için ideal bir nokta haline getirir.",
      cta: "Deneyimle"
    }
  },
  {
    image: galleryImages[5],
    en: {
      title: "12 Islands Tour",
      desc: "Experience the complete 12 Islands adventure, visiting the most beautiful bays and hidden coves of the Fethiye coastline. This comprehensive tour showcases the diverse beauty of the Mediterranean, from pristine beaches to dramatic cliffs, offering something special for every type of traveler.",
      cta: "Book Tour"
    },
    tr: {
      title: "12 Ada Turu",
      desc: "Fethiye sahil şeridinin en güzel koylarını ve gizli koylarını ziyaret ederek tam 12 Ada macerasını deneyimleyin. Bu kapsamlı tur, el değmemiş plajlardan dramatik kayalıklara kadar Akdeniz'in çeşitli güzelliğini sergiler ve her türlü gezgin için özel bir şey sunar.",
      cta: "Tur Rezervasyonu"
    }
  }
];

const reviews = [
  {
    en: {
      name: "Sarah & Mike",
      date: "August 2024",
      text: "Absolutely incredible experience! The crew was professional and friendly, the boat was spotless, and the swimming spots were breathtaking. We visited 6 different bays and each one was more beautiful than the last. Highly recommend!"
    },
    tr: {
      name: "Sarah & Mike",
      date: "Ağustos 2024",
      text: "Kesinlikle inanılmaz bir deneyim! Mürettebat profesyonel ve dostçaydı, tekne tertemizdi ve yüzme noktaları nefes kesiciydi. 6 farklı koyu ziyaret ettik ve her biri bir öncekinden daha güzeldi. Kesinlikle tavsiye ederim!"
    }
  },
  {
    en: {
      name: "Ahmet & Ayşe",
      date: "July 2024",
      text: "Perfect day out on the water! The tour was well-organized, the food was delicious, and the swimming locations were perfect. The crew made us feel safe and comfortable throughout the entire journey."
    },
    tr: {
      name: "Ahmet & Ayşe",
      date: "Temmuz 2024",
      text: "Su üzerinde mükemmel bir gün! Tur iyi organize edilmişti, yemek lezzetliydi ve yüzme lokasyonları mükemmeldi. Mürettebat tüm yolculuk boyunca kendimizi güvende ve rahat hissettirdi."
    }
  },
  {
    en: {
      name: "Emma & James",
      date: "September 2024",
      text: "What an amazing adventure! The boat tour exceeded all our expectations. The snorkeling spots were teeming with marine life, and the crew's knowledge of the area was impressive. We'll definitely be back!"
    },
    tr: {
      name: "Emma & James",
      date: "Eylül 2024",
      text: "Ne muhteşem bir macera! Tekne turu tüm beklentilerimizi aştı. Şnorkelle dalış noktaları deniz yaşamıyla doluydu ve mürettebatın bölge bilgisi etkileyiciydi. Kesinlikle geri geleceğiz!"
    }
  }
];

const features = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M5 15c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    en: {
      title: "12 Stunning Islands",
      desc: "Discover the 12 most beautiful islands of Fethiye Bay"
    },
    tr: {
      title: "12 Muhteşem Ada",
      desc: "Fethiye Körfezi'nin en güzel 12 adasını keşfedin"
    }
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#fbbf24" strokeWidth="2.5"/><path d="M20 4v4M20 32v4M36 20h-4M8 20H4M31.3 8.7l-2.8 2.8M11.5 28.5l-2.8 2.8M31.3 31.3l-2.8-2.8M11.5 11.5l-2.8-2.8" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    en: {
      title: "Full Day Tour",
      desc: "Enjoy a full day from 10:00 AM to 5:00 PM"
    },
    tr: {
      title: "Tam Gün Tur",
      desc: "Sabah 10:00'dan akşam 17:00'a kadar tam gün deneyim"
    }
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="14" width="24" height="16" rx="4" stroke="#22c55e" strokeWidth="2.5"/><circle cx="20" cy="22" r="4" stroke="#22c55e" strokeWidth="2.5"/><rect x="16" y="10" width="8" height="4" rx="2" stroke="#22c55e" strokeWidth="2.5"/></svg>
    ),
    en: {
      title: "Unforgettable Memories",
      desc: "Swim and take photos in crystal-clear waters"
    },
    tr: {
      title: "Unutulmaz Anılar",
      desc: "Kristal berraklığındaki sularda yüzme ve fotoğraf çekme"
    }
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="14" r="6" stroke="#a78bfa" strokeWidth="2.5"/><path d="M8 32c0-4.418 5.373-8 12-8s12 3.582 12 8" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
    en: {
      title: "Professional Crew",
      desc: "Safe journey with experienced captain and crew"
    },
    tr: {
      title: "Profesyonel Ekip",
      desc: "Deneyimli kaptan ve mürettebat eşliğinde güvenli yolculuk"
    }
  }
];

export default function Home() {
  const { lang } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Discover the Magic of Fethiye's 12 Islands",
        subtitle: "Experience crystal-clear waters, hidden bays, and unforgettable adventures on our private boat tours",
        cta1: "Book Your Tour",
        cta2: "View Gallery"
      },
      gallery: {
        title: "Our Tour Destinations",
        subtitle: "Explore the most beautiful bays and hidden gems of the Fethiye coastline"
      },
      reviews: {
        title: "What Our Guests Say",
        subtitle: "Real experiences from travelers who discovered the beauty of Fethiye with us"
      },
      footer: {
        business: {
          name: "Ölüdeniz Boat Tours",
          description: "Experience the most beautiful bays and hidden gems of the Fethiye coastline with our professional crew and comfortable boats."
        },
        quickLinks: "Quick Links",
        contact: "Contact Info",
        copyright: "© 2024 Ölüdeniz Boat Tours. All rights reserved."
      }
    },
    tr: {
      hero: {
        title: "Fethiye'nin 12 Adasının Büyüsünü Keşfedin",
        subtitle: "Özel tekne turlarımızda kristal berraklığındaki suları, gizli koyları ve unutulmaz maceraları deneyimleyin",
        cta1: "Turunuzu Rezerve Edin",
        cta2: "Galeriyi Görüntüle"
      },
      gallery: {
        title: "Tur Destinasyonlarımız",
        subtitle: "Fethiye sahil şeridinin en güzel koylarını ve gizli mücevherlerini keşfedin"
      },
      reviews: {
        title: "Misafirlerimiz Ne Diyor",
        subtitle: "Fethiye'nin güzelliğini bizimle keşfeden gezginlerin gerçek deneyimleri"
      },
      footer: {
        business: {
          name: "Ölüdeniz Tekne Turları",
          description: "Profesyonel mürettebatımız ve konforlu teknelerimizle Fethiye sahil şeridinin en güzel koylarını ve gizli mücevherlerini deneyimleyin."
        },
        quickLinks: "Hızlı Bağlantılar",
        contact: "İletişim Bilgileri",
        copyright: "© 2024 Ölüdeniz Tekne Turları. Tüm hakları saklıdır."
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero" style={{ height: '80vh', minHeight: 420 }}>
        <div className="hero-background">
        <Image
            src="/boat-tour-images/yassica-adalari_1.jpg"
            alt="Yassica Islands Aerial View"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{content[lang].hero.title}</h1>
          <p className="hero-subtitle" style={{ color: '#fff' }}>{content[lang].hero.subtitle}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              {content[lang].hero.cta1}
            </a>
            <a href="#gallery" className="btn btn-secondary">
              {content[lang].hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery">
        <div className="container">
          <h2 className="section-title">{content[lang].gallery.title}</h2>
          <p className="section-subtitle">{content[lang].gallery.subtitle}</p>
          
          <div className="gallery-grid">
            {galleryContent.map((item, index) => (
              <div key={index} className="gallery-card">
          <Image
                  src={item.image}
                  alt={item[lang].title}
                  width={400}
                  height={250}
                  className="gallery-image"
                />
                <div className="gallery-content">
                  <h3 className="gallery-title">{item[lang].title}</h3>
                  <p className="gallery-description">{item[lang].desc}</p>
                  <a href="#" className="gallery-cta">
                    {item[lang].cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: '#f8fafc', paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,60,114,0.08)', padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: 16 }}>{feature.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 22, color: '#1e3a8a', marginBottom: 8 }}>{feature[lang].title}</div>
                <div style={{ color: '#475569', fontSize: 16 }}>{feature[lang].desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section reviews">
        <div className="container">
          <h2 className="section-title">{content[lang].reviews.title}</h2>
          <p className="section-subtitle">{content[lang].reviews.subtitle}</p>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <span className="tripadvisor-owl">
                  <svg viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="9" cy="12" rx="9" ry="12" fill="#34e0a1"/>
                    <ellipse cx="29" cy="12" rx="9" ry="12" fill="#34e0a1"/>
                    <circle cx="9" cy="12" r="6" fill="#fff"/>
                    <circle cx="29" cy="12" r="6" fill="#fff"/>
                    <circle cx="9" cy="12" r="2.5" fill="#222"/>
                    <circle cx="29" cy="12" r="2.5" fill="#222"/>
                  </svg>
                </span>
                <p className="review-text">{review[lang].text}</p>
                <div className="review-header">
                  <div className="review-avatar">
                    {review[lang].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="review-info">
                    <h4>{review[lang].name}</h4>
                    <div className="review-date">{review[lang].date}</div>
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{content[lang].footer.business.name}</h3>
              <p>{content[lang].footer.business.description}</p>
              <div className="social-links">
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🌐</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>{content[lang].footer.quickLinks}</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>{content[lang].footer.contact}</h3>
              <p>📍 Fethiye, Muğla, Turkey</p>
              <p>📞 +90 536 222 2813</p>
              <p>✉️ info@oludeniztours.com</p>
              <div style={{ marginTop: '1rem' }}>
                <a href="https://wa.me/905362228813" className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>{content[lang].footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
