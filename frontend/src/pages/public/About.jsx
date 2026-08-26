import MainLayout from "../../layouts/MainLayout";
import useReveal from "../../hooks/useReveal";
import AnimatedCounter from "../../components/common/AnimatedCounter";

// Import Assets
import cleaningImg from "../../assets/images/about_cleaning.png";
import architectureImg from "../../assets/images/about_consultation.png";
import bannerImg from "../../assets/images/about_banner.png";

function About() {
  useReveal();

  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    
    const maxTilt = 8;
    const tiltX = (percentY * maxTilt).toFixed(2);
    const tiltY = (-percentX * maxTilt).toFixed(2);
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardTiltLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const handleImageStackParallax = (e) => {
    const stack = e.currentTarget;
    const rect = stack.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    
    const mainImg = stack.querySelector(".image-main img");
    const subImg = stack.querySelector(".image-sub img");
    const subContainer = stack.querySelector(".image-sub");
    
    if (mainImg) {
      mainImg.style.transform = `scale(1.03) translate3d(${(percentX * 8).toFixed(2)}px, ${(percentY * 8).toFixed(2)}px, 0)`;
    }
    if (subContainer) {
      subContainer.style.transform = `translate3d(${(percentX * -15).toFixed(2)}px, ${(percentY * -15).toFixed(2)}px, 20px) rotate(3deg)`;
    }
    if (subImg) {
      subImg.style.transform = `scale(1.05) translate3d(${(percentX * -5).toFixed(2)}px, ${(percentY * -5).toFixed(2)}px, 0)`;
    }
  };

  const handleImageStackLeave = (e) => {
    const stack = e.currentTarget;
    const mainImg = stack.querySelector(".image-main img");
    const subImg = stack.querySelector(".image-sub img");
    const subContainer = stack.querySelector(".image-sub");
    
    if (mainImg) mainImg.style.transform = "scale(1) translate3d(0, 0, 0)";
    if (subContainer) subContainer.style.transform = "translate3d(0, 0, 0) rotate(3deg)";
    if (subImg) subImg.style.transform = "scale(1) translate3d(0, 0, 0)";
  };

  return (
    <MainLayout>
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div className="about-hero-bg" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.8)), url(${bannerImg})` }}></div>
        <div className="container hero-container animate-fade-in">
          <div className="hero-badge animate-float-slow">✨ Our Journey</div>
          <h1 className="hero-title white text-shadow-premium">Redefining Home Services</h1>
          <p className="hero-subtitle white text-shadow-soft">At HomeFaciliti, we're on a mission to bring world-class professional services to every doorstep, combining technology with human expertise.</p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="section about-who">
        <div className="container grid-2">
          <div 
            className="about-image-stack reveal-left"
            onMouseMove={handleImageStackParallax}
            onMouseLeave={handleImageStackLeave}
            style={{ cursor: 'pointer' }}
          >
            <div className="image-main">
              <img src={cleaningImg} alt="Professional Cleaning Service" style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            </div>
            <div className="image-sub glass" style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <img src={architectureImg} alt="Professional Service Consultation" style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            </div>
            <div className="image-stack-glow"></div>
          </div>
          <div className="about-text reveal">
            <span className="section-tag">Who we are</span>
            <h2 className="section-title">Built on Trust and Quality</h2>
            <p className="text-secondary">HomeFaciliti is a modern home service platform providing reliable, fast, and affordable services including plumbing, electrical, cleaning, and maintenance.</p>
            <p className="text-secondary">Our goal is to connect customers with verified professionals anytime, anywhere. We believe that home maintenance should be a seamless experience, not a chore.</p>
            
            <div className="features-mini">
              <div className="feature-item-premium glass">
                <div className="icon-wrapper">✓</div>
                <span>Verified Pros</span>
              </div>
              <div className="feature-item-premium glass">
                <div className="icon-wrapper">✓</div>
                <span>Fair Pricing</span>
              </div>
              <div className="feature-item-premium glass">
                <div className="icon-wrapper">✓</div>
                <span>24/7 Support</span>
              </div>
              <div className="feature-item-premium glass">
                <div className="icon-wrapper">✓</div>
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section about-vision bg-alt">
        <div className="container">
          <div className="grid-2">
            <div 
              className="premium-card vision-card card-mission glow-card reveal"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltLeave}
            >
              <div className="icon-badge">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver trusted home services within minutes through technology-driven solutions and skilled professionals, empowering both customers and service partners.</p>
              <div className="card-accent-line"></div>
            </div>
            <div 
              className="premium-card vision-card card-vision glow-card reveal" 
              style={{ transitionDelay: '0.2s' }}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardTiltLeave}
            >
              <div className="icon-badge">✨</div>
              <h3>Our Vision</h3>
              <p>To become India’s most trusted 24/7 home services ecosystem, creating a new standard for home comfort and professional reliability.</p>
              <div className="card-accent-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section about-stats reveal">
        <div className="stats-ambient-glow glow-1"></div>
        <div className="stats-ambient-glow glow-2"></div>
        <div className="container">
          <div className="stats-grid glass-premium">
            <div className="stat-item">
              <h2 className="stat-number text-grad-pink">
                <AnimatedCounter end={351000} suffix="+" />
              </h2>
              <p className="stat-label">Customers Served</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number text-grad-gold">
                <AnimatedCounter end={31000} suffix="+" />
              </h2>
              <p className="stat-label">Verified Vendors</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number text-grad-blue">24/7</h2>
              <p className="stat-label">Service Availability</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number text-grad-purple">4.8/5</h2>
              <p className="stat-label">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOIN US ===== */}
      <section className="section about-cta reveal">
        <div className="container">
          <div className="cta-banner glass-dark-premium">
            <div className="cta-glow"></div>
            <h2 className="section-title white text-shadow-premium">Be Part of Our Journey</h2>
            <p className="hero-subtitle white text-shadow-soft" style={{ margin: "20px auto 40px", maxWidth: "600px" }}>Whether you're looking for expert help or want to grow your business as a partner, HomeFaciliti is here for you.</p>
            <div className="hero-btns" style={{ justifyContent: "center" }}>
              <a href="https://homefaciliti-pixel.github.io/homefaciliti-user-aap-link/" target="_blank" rel="noopener noreferrer" className="btn-premium white-bg-hover" style={{ textDecoration: 'none' }}>Book a Service</a>
              <a href="https://homefaciliti-pixel.github.io/homefaciliti-partner-aap-link/" target="_blank" rel="noopener noreferrer" className="btn-outline-premium white-border" style={{ textDecoration: 'none' }}>Become a Partner</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .white { color: white !important; }
        .text-center { text-align: center; }
        .bg-alt { background: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        
        .about-hero {
          height: 55vh;
          display: flex;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .about-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          animation: kenBurnsBg 24s ease-in-out infinite;
          transform-origin: center;
        }
        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes kenBurnsBg {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08) translate(5px, -3px); }
        }
        .hero-badge {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: white;
          padding: 8px 20px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image-stack {
          position: relative;
          padding-bottom: 40px;
        }
        .image-main {
          width: 82%;
          aspect-ratio: 1;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
          border: 6px solid white;
          position: relative;
          z-index: 2;
          transition: all 0.5s ease;
        }
        .image-main img { width: 100%; height: 100%; object-fit: cover; }
        .image-sub {
          position: absolute;
          width: 48%;
          aspect-ratio: 1;
          bottom: 0;
          right: 0;
          border-radius: 28px;
          overflow: hidden;
          padding: 8px;
          z-index: 3;
          border: 6px solid white;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.12);
          transition: all 0.5s ease;
        }
        .image-sub img { width: 100%; height: 100%; object-fit: cover; border-radius: 18px; }
        .image-stack-glow {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 70%;
          height: 70%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
          z-index: 1;
          pointer-events: none;
        }
        .about-image-stack:hover .image-main {
          transform: translateY(-5px) rotate(-1deg);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.2);
        }
        .about-image-stack:hover .image-sub {
          transform: translateY(-8px) scale(1.03) rotate(2deg);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);
        }

        .text-secondary {
          color: var(--text-muted);
          font-size: 17px;
          margin-bottom: 24px;
          line-height: 1.8;
        }

        .features-mini {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 32px;
        }
        .feature-item-premium {
          display: flex;
          align-items: center;
          gap: 14px;
          font-weight: 600;
          color: var(--text-main);
          padding: 14px 20px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.3s ease;
        }
        .feature-item-premium:hover {
          transform: translateY(-2px);
          border-color: rgba(37, 99, 235, 0.2);
          background: rgba(37, 99, 235, 0.02) !important;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.06);
        }
        .feature-item-premium .icon-wrapper {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }

        .vision-card {
          position: relative;
          text-align: left;
          padding: 40px;
          background: white;
          border-radius: 32px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .card-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--grad-main);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .card-mission:hover .card-accent-line {
          background: linear-gradient(90deg, #ec4899, #f43f5e);
          transform: scaleX(1);
        }
        .card-vision:hover .card-accent-line {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transform: scaleX(1);
        }
        .vision-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: rgba(226, 232, 240, 0.2);
        }
        .icon-badge {
          width: 60px;
          height: 60px;
          border-radius: 20px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        .card-mission:hover .icon-badge {
          background: rgba(236, 72, 153, 0.1);
          transform: scale(1.08) rotate(-5deg);
        }
        .card-vision:hover .icon-badge {
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.08) rotate(5deg);
        }
        .vision-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
        }
        .vision-card p {
          color: var(--text-muted);
          line-height: 1.7;
        }

        .about-stats {
          position: relative;
          overflow: hidden;
        }
        .stats-ambient-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }
        .glow-1 {
          top: -20%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: #3b82f6;
        }
        .glow-2 {
          bottom: -20%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: #ec4899;
        }

        .glass-premium {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 50px -10px rgba(148, 163, 184, 0.15), 
                      inset 0 0 40px rgba(255, 255, 255, 0.2);
        }
        .stats-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          padding: 60px;
          border-radius: 32px;
          text-align: center;
        }
        .stat-number {
          font-size: 54px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: -2px;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: inline-block;
        }
        .text-grad-pink {
          background-image: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
        }
        .text-grad-gold {
          background-image: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }
        .text-grad-blue {
          background-image: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }
        .text-grad-purple {
          background-image: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
        }
        .stat-label {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.2px;
        }

        .cta-banner {
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
          border-radius: 40px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
        }
        .glass-dark-premium {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(37, 99, 235, 0.05) 50%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }
        .white-bg-hover {
          background: white !important;
          color: var(--text-main) !important;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2) !important;
        }
        .white-bg-hover:hover {
          transform: scale(1.03) !important;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.4) !important;
        }
        .white-border {
          border-color: rgba(255, 255, 255, 0.3) !important;
          color: white !important;
        }
        .white-border:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: white !important;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; gap: 40px; }
          .stats-grid { grid-template-columns: 1fr 1fr; padding: 40px; }
          .about-hero { height: 40vh; }
          .cta-banner { padding: 50px 24px; }
          .image-main { width: 100%; border: none; }
          .image-sub { display: none; }
        }
        @media (max-width: 480px) {
          .features-mini {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
          }
          .stat-item h2 {
            font-size: 32px;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-btns a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </MainLayout>
  );
}

export default About;