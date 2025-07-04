"use client";
import Image from "next/image";
import { useLanguage } from "../LanguageContext";

const galleryImages = [
  {
    src: "/boat-tour-images/fethiye-private-boat-tour-1.jpeg",
    alt: "Private Boat Tour Experience",
    title: "Private Boat Tour",
    en: {
      description: "Exclusive private boat tours for couples, families, and small groups. Enjoy personalized service, flexible itineraries, and the luxury of having the entire boat to yourself. Perfect for special occasions and intimate experiences."
    },
    tr: {
      description: "Çiftler, aileler ve küçük gruplar için özel tekne turları. Kişiselleştirilmiş hizmet, esnek programlar ve tüm teknenin sadece size ait olmasının lüksünü yaşayın. Özel günler ve samimi deneyimler için mükemmel."
    }
  },
  {
    src: "/boat-tour-images/fethiye-private-boat-tour-2.jpeg",
    alt: "Luxury Private Yacht",
    title: "Luxury Private Yacht",
    en: {
      description: "Experience the ultimate luxury with our premium private yacht tours. Featuring spacious decks, comfortable seating areas, and professional crew ensuring your comfort and safety throughout the journey."
    },
    tr: {
      description: "Premium özel yat turlarımızla en üst düzey lüksü deneyimleyin. Geniş güverteler, rahat oturma alanları ve yolculuk boyunca konforunuzu ve güvenliğinizi sağlayan profesyonel mürettebat."
    }
  },
  {
    src: "/boat-tour-images/fethiye-private-boat-tour-3.jpeg",
    alt: "Crystal Clear Waters",
    title: "Crystal Clear Waters",
    en: {
      description: "Swim in the pristine, crystal-clear waters of the Mediterranean. Our tours take you to the most beautiful bays where you can snorkel, swim, and marvel at the underwater beauty of Fethiye's coastline."
    },
    tr: {
      description: "Akdeniz'in el değmemiş, kristal berraklığındaki sularında yüzün. Turlarımız sizi şnorkelle dalış yapabileceğiniz, yüzebileceğiniz ve Fethiye sahilinin sualtı güzelliğine hayran kalabileceğiniz en güzel koylara götürür."
    }
  },
  {
    src: "/boat-tour-images/fethiye-private-boat-tour-4.jpeg",
    alt: "Hidden Bays Discovery",
    title: "Hidden Bays Discovery",
    en: {
      description: "Discover secret coves and hidden bays that are only accessible by boat. These secluded spots offer tranquility and privacy, perfect for those seeking to escape the crowds and enjoy nature's beauty."
    },
    tr: {
      description: "Sadece tekneyle erişilebilen gizli koyları ve saklı koyları keşfedin. Bu izole noktalar huzur ve gizlilik sunar, kalabalıktan kaçmak ve doğanın güzelliğinin tadını çıkarmak isteyenler için mükemmeldir."
    }
  },
  {
    src: "/boat-tour-images/fethiye-private-boat-tour-5.jpeg",
    alt: "Sunset Cruise",
    title: "Sunset Cruise",
    en: {
      description: "Experience the magical colors of a Mediterranean sunset from the comfort of our boat. Perfect for romantic evenings, photography enthusiasts, and anyone who wants to witness nature's most beautiful daily spectacle."
    },
    tr: {
      description: "Teknemizin konforundan Akdeniz gün batımının büyülü renklerini deneyimleyin. Romantik akşamlar, fotoğraf tutkunları ve doğanın en güzel günlük gösterisine tanık olmak isteyen herkes için mükemmel."
    }
  },
  {
    src: "/boat-tour-images/fethiye-12-island-tour-1.jpeg",
    alt: "12 Islands Adventure",
    title: "12 Islands Adventure",
    en: {
      description: "Embark on the legendary 12 Islands tour, visiting the most stunning islands and bays of the Fethiye coastline. Each stop offers unique experiences, from swimming in turquoise waters to exploring ancient ruins."
    },
    tr: {
      description: "Fethiye sahilinin en etkileyici adalarını ve koylarını ziyaret eden efsanevi 12 Ada turuna çıkın. Her durak, turkuaz sularda yüzmeden antik kalıntıları keşfetmeye kadar benzersiz deneyimler sunar."
    }
  },
  {
    src: "/boat-tour-images/fethiye-12-island-tour-2.jpeg",
    alt: "Island Hopping Experience",
    title: "Island Hopping Experience",
    en: {
      description: "Hop between beautiful islands, each with its own character and charm. From the famous Butterfly Valley to the serene waters of Gemiler Island, experience the diversity of Fethiye's island paradise."
    },
    tr: {
      description: "Her birinin kendine özgü karakteri ve cazibesi olan güzel adalar arasında atlayın. Ünlü Kelebekler Vadisi'nden Gemiler Adası'nın huzurlu sularına kadar Fethiye'nin ada cennetinin çeşitliliğini deneyimleyin."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-1.png",
    alt: "Butterfly Valley",
    title: "Butterfly Valley",
    en: {
      description: "Marvel at the breathtaking Butterfly Valley, a natural wonder with cascading waterfalls and unique rock formations. This UNESCO World Heritage site is home to rare butterfly species and offers spectacular photo opportunities."
    },
    tr: {
      description: "Şelaleler ve benzersiz kaya oluşumlarıyla doğal bir harika olan nefes kesici Kelebekler Vadisi'ne hayran kalın. Bu UNESCO Dünya Mirası alanı, nadir kelebek türlerine ev sahipliği yapar ve muhteşem fotoğraf fırsatları sunar."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-2.png",
    alt: "Oludeniz Blue Lagoon",
    title: "Ölüdeniz Blue Lagoon",
    en: {
      description: "Visit the world-famous Ölüdeniz Blue Lagoon, known for its stunning turquoise waters and pristine beaches. This protected area offers some of the most beautiful swimming spots in the Mediterranean."
    },
    tr: {
      description: "Etkileyici turkuaz suları ve el değmemiş plajlarıyla ünlü dünya çapında tanınan Ölüdeniz Blue Lagoon'u ziyaret edin. Bu korunan alan, Akdeniz'in en güzel yüzme noktalarından bazılarını sunar."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-3.png",
    alt: "Gemiler Island",
    title: "Gemiler Island",
    en: {
      description: "Explore the historic Gemiler Island, also known as St. Nicholas Island, with its ancient Byzantine churches and stunning panoramic views. This island offers a perfect blend of history and natural beauty."
    },
    tr: {
      description: "Antik Bizans kiliseleri ve etkileyici panoramik manzaralarıyla tarihi Gemiler Adası'nı (Aziz Nikolaos Adası olarak da bilinir) keşfedin. Bu ada, tarih ve doğal güzelliğin mükemmel bir karışımını sunar."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-4.png",
    alt: "Kleopatra Bay",
    title: "Kleopatra Bay",
    en: {
      description: "Swim in the legendary Kleopatra Bay, where the Egyptian queen is said to have bathed. The bay's golden sand and crystal-clear waters create a magical atmosphere perfect for relaxation and swimming."
    },
    tr: {
      description: "Mısır kraliçesinin yıkandığı söylenen efsanevi Kleopatra Koyu'nda yüzün. Koyun altın kumu ve kristal berraklığındaki suları, rahatlama ve yüzme için mükemmel büyülü bir atmosfer yaratır."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-5.png",
    alt: "Tersane Bay",
    title: "Tersane Bay",
    en: {
      description: "Discover Tersane Bay, a hidden gem with ancient shipyard ruins and pristine waters. This secluded bay offers excellent snorkeling opportunities and a glimpse into the region's maritime history."
    },
    tr: {
      description: "Antik tersane kalıntıları ve el değmemiş sularıyla gizli bir mücevher olan Tersane Koyu'nu keşfedin. Bu izole koy, mükemmel şnorkelle dalış fırsatları ve bölgenin denizcilik tarihine bir bakış sunar."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-6.png",
    alt: "Aya Nikola Island",
    title: "Aya Nikola Island",
    en: {
      description: "Visit Aya Nikola Island, a peaceful retreat with beautiful beaches and hiking trails. The island offers stunning views of the surrounding coastline and is perfect for nature lovers and adventure seekers."
    },
    tr: {
      description: "Güzel plajları ve yürüyüş parkurlarıyla huzurlu bir sığınak olan Aya Nikola Adası'nı ziyaret edin. Ada, çevredeki sahil şeridinin etkileyici manzaralarını sunar ve doğa severler ve macera arayanlar için mükemmeldir."
    }
  },
  {
    src: "/boat-tour-images/fethiye-boat-tour-scenery-7.png",
    alt: "Big Aquarium Bay",
    title: "Big Aquarium Bay",
    en: {
      description: "Experience the Big Aquarium Bay, famous for its crystal-clear waters teeming with marine life. This natural aquarium offers excellent snorkeling and swimming opportunities in a protected marine environment."
    },
    tr: {
      description: "Deniz yaşamıyla dolu kristal berraklığındaki sularıyla ünlü Büyük Akvaryum Koyu'nu deneyimleyin. Bu doğal akvaryum, korunan deniz ortamında mükemmel şnorkelle dalış ve yüzme fırsatları sunar."
    }
  }
];

const content = {
  en: {
    title: "Gallery",
    subtitle: "Explore the beauty of Fethiye through our stunning boat tour photos",
    backToHome: "Back to Home",
    footer: {
      business: {
        name: "Fethiye Boat Tours",
        description: "Experience the most beautiful bays and hidden gems of the Fethiye coastline with our professional crew and comfortable boats."
      },
      quickLinks: "Quick Links",
      contact: "Contact Info",
      copyright: "© 2024 Fethiye Boat Tours. All rights reserved."
    }
  },
  tr: {
    title: "Galeri",
    subtitle: "Muhteşem tekne turu fotoğraflarımızla Fethiye'nin güzelliğini keşfedin",
    backToHome: "Anasayfaya Dön",
    footer: {
      business: {
        name: "Fethiye Tekne Turları",
        description: "Profesyonel mürettebatımız ve konforlu teknelerimizle Fethiye sahil şeridinin en güzel koylarını ve gizli mücevherlerini deneyimleyin."
      },
      quickLinks: "Hızlı Bağlantılar",
      contact: "İletişim Bilgileri",
      copyright: "© 2024 Fethiye Tekne Turları. Tüm hakları saklıdır."
    }
  }
};

export default function Gallery() {
  const { lang } = useLanguage();

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        padding: '4rem 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {content[lang].title}
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            color: 'white'
          }}>
            {content[lang].subtitle}
          </p>
          <a 
            href="/" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              marginTop: '2rem',
              border: '1px solid rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
          >
            ← {content[lang].backToHome}
          </a>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ position: 'relative', height: '250px' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e3a8a'
                  }}>
                    {image.title}
                  </h3>
                  <p style={{ 
                    margin: 0,
                    color: '#64748b',
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    {image[lang].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ 
        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        padding: '4rem 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            {lang === 'en' ? 'Ready to Book Your Tour?' : 'Turunuzu Rezerve Etmeye Hazır mısınız?'}
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            opacity: 0.9,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            {lang === 'en' 
              ? 'Contact us on WhatsApp to start planning your perfect Fethiye boat adventure!'
              : 'Mükemmel Fethiye tekne maceranızı planlamaya başlamak için WhatsApp\'tan bizimle iletişime geçin!'
            }
          </p>
          <a
            href="https://wa.me/905300543305"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#25D366',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: '2px solid white',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.86 5.1 2.34 7.09L4.5 29.5l7.61-1.99A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 22.5c-1.47 0-2.89-.27-4.22-.8l-.3-.12-4.52 1.18 1.2-4.4-.19-.29A10.47 10.47 0 0 1 5.5 15c0-5.8 4.7-10.5 10.5-10.5S26.5 9.2 26.5 15 21.8 25.5 16 25.5Zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.27-.27-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.62 1.12 2.8.14.18 2 3.18 4.85 4.32.68.28 1.21.45 1.62.58.68.22 1.3.19 1.79.13.55-.07 1.7-.68 1.94-1.34.24-.66.24-1.23.17-1.34-.07-.11-.25-.18-.53-.32Z" fill="white"/>
            </svg>
            {lang === 'en' ? 'Book on WhatsApp' : 'WhatsApp\'tan Rezerve Et'}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{content[lang].footer.business.name}</h3>
              <p>{content[lang].footer.business.description}</p>
              <a
                href="https://www.instagram.com/demirbey.48?igsh=MThxaDNtOHZsNnB5Yw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
                  color: '#fff',
                  borderRadius: 24,
                  padding: '8px 16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginTop: 16,
                }}
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="24" height="24" rx="8" fill="url(#ig-gradient-footer)"/>
                  <defs>
                    <linearGradient id="ig-gradient-footer" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f9ce34"/>
                      <stop offset="0.5" stopColor="#ee2a7b"/>
                      <stop offset="1" stopColor="#6228d7"/>
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="6" stroke="#fff" strokeWidth="2"/>
                  <circle cx="22" cy="10" r="1.5" fill="#fff"/>
                </svg>
                Instagram
              </a>
            </div>
            
            <div className="footer-section">
              <h3>{content[lang].footer.quickLinks}</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/#reviews">Reviews</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>{content[lang].footer.contact}</h3>
              <p>📍 Fethiye, Muğla, Turkey</p>
              <p>📞 +90 530 054 33 05</p>
              <p>✉️ fethiyeboattours@gmail.com</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>{content[lang].footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905300543305"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 2000,
          background: '#25D366',
          border: '2px solid #fff',
          color: '#fff',
          borderRadius: '50%',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          fontSize: 32,
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        aria-label="WhatsApp"
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.86 5.1 2.34 7.09L4.5 29.5l7.61-1.99A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 22.5c-1.47 0-2.89-.27-4.22-.8l-.3-.12-4.52 1.18 1.2-4.4-.19-.29A10.47 10.47 0 0 1 5.5 15c0-5.8 4.7-10.5 10.5-10.5S26.5 9.2 26.5 15 21.8 25.5 16 25.5Zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.27-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.62 1.12 2.8.14.18 2 3.18 4.85 4.32.68.28 1.21.45 1.62.58.68.22 1.3.19 1.79.13.55-.07 1.7-.68 1.94-1.34.24-.66.24-1.23.17-1.34-.07-.11-.25-.18-.53-.32Z" fill="#fff"/>
        </svg>
      </a>
    </div>
  );
} 