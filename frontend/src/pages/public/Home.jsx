import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import AnimatedCounter from "../../components/common/AnimatedCounter";

// Import Assets
import heroBg from "../../assets/images/hero-bg.png";
import mechanicImg from "../../assets/images/mechanic.jpg";
import plumberImg from "../../assets/images/plumbing.jpg";
import electricianImg from "../../assets/images/electrician.png";
import salonImg from "../../assets/images/Salon.jpg";
import spaImg from "../../assets/images/spa-service.png";
import cleaningImg from "../../assets/images/deep-cleaning.png";
import architectureImg from "../../assets/images/architecture.jpg";
import tapRepairImg from "../../assets/images/tap-repair.png";
import carpenterImg from "../../assets/images/carpenter.jpg";
import panditImg from "../../assets/images/Pandit ji.jpg";
import driverImg from "../../assets/images/Driver services.png";
import photographerImg from "../../assets/images/Photographer.jpg";
import doctorImg from "../../assets/images/Doctor.jpg";
import compounderImg from "../../assets/images/Compounder.jpg";
import caterImg from "../../assets/images/Halwai services.jpg";
import carWashImg from "../../assets/images/Car Washing.jpg";
import taxImg from "../../assets/images/tax.jpg";
import painterImg from "../../assets/images/Painter.jpg";
import repairingImg from "../../assets/images/Repairing.jpg";
import acImg from "../../assets/images/ac.png";
import event1 from "../../assets/images/event1.jpeg";
import event2 from "../../assets/images/event2.jpeg";
import event3 from "../../assets/images/event3.jpeg";
import event4 from "../../assets/images/event4.jpeg";
import event5 from "../../assets/images/event5.jpeg";
import pestControlImg from "../../assets/images/pest-control.jpg";
import solarImg from "../../assets/images/solar.png";
import advocatesImg from "../../assets/images/advocates.png";
import interiorDesignImg from "../../assets/images/interior-design.png";

function Home() {
  useReveal();

  const words = ["Perfectly Mastered", "Smartly Cleaned", "Expertly Repaired", "Carefully Protected"];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    
    const maxTilt = 10;
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

  const getTagGradient = (tag) => {
    switch (tag?.toLowerCase()) {
      case "trending":
        return "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)";
      case "best seller":
        return "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
      case "essential":
        return "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)";
      case "premium":
        return "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)";
      default:
        return "var(--grad-main)";
    }
  };

  const getTagShadow = (tag) => {
    switch (tag?.toLowerCase()) {
      case "trending":
        return "rgba(236, 72, 153, 0.35)";
      case "best seller":
        return "rgba(245, 158, 11, 0.35)";
      case "essential":
        return "rgba(37, 99, 235, 0.35)";
      case "premium":
        return "rgba(139, 92, 246, 0.35)";
      default:
        return "rgba(37, 99, 235, 0.15)";
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Specialties", icon: "🌐" },
    { id: "repairs", label: "Repairs & Maintenance", icon: "🛠️" },
    { id: "cleaning", label: "Cleaning & Care", icon: "🧹" },
    { id: "wellness", label: "Health & Wellness", icon: "💆" },
    { id: "professional", label: "Professional & Events", icon: "💼" },
  ];

  const categories = [
    { name: "Mechanic", img: mechanicImg, desc: "24/7 Roadside & Shop repairs", group: "repairs", emoji: "🛠️", color: "244, 63, 94" },
    { name: "Plumbing", img: plumberImg, desc: "Leakages, blockages & fittings", group: "repairs", emoji: "💧", color: "37, 99, 235" },
    { name: "Electrician", img: electricianImg, desc: "Wiring, installation & appliances", group: "repairs", emoji: "⚡", color: "245, 158, 11" },
    { name: "Salon & Spa", img: salonImg, desc: "At-home grooming & pampering", group: "wellness", emoji: "💇", color: "139, 92, 246" },
    { name: "Cleaning", img: cleaningImg, desc: "Deep & sanitization services", group: "cleaning", emoji: "🧹", color: "16, 185, 129" },
    { name: "Pest Control", img: pestControlImg, desc: "Safe, chemical-free termination", group: "cleaning", emoji: "🦟", color: "100, 116, 139" },
    { name: "Architecture", img: architectureImg, desc: "Vastu planning & 3D walkthroughs", group: "professional", emoji: "📐", color: "6, 182, 212" },
    { name: "Carpenter", img: carpenterImg, desc: "Furniture build & restorations", group: "repairs", emoji: "🪚", color: "180, 83, 9" },
    { name: "Pandit Ji", img: panditImg, desc: "Pooja, rituals & consultations", group: "professional", emoji: "📿", color: "234, 88, 12" },
    { name: "Driver", img: driverImg, desc: "Experienced local & tour chauffeurs", group: "professional", emoji: "🚗", color: "71, 85, 105" },
    { name: "Photographer", img: photographerImg, desc: "Weddings, shoots & portfolios", group: "professional", emoji: "📸", color: "236, 72, 153" },
    { name: "Doctor", img: doctorImg, desc: "Home consultation & checkups", group: "wellness", emoji: "🩺", color: "220, 38, 38" },
    { name: "Compounder", img: compounderImg, desc: "Nursing care & clinical support", group: "wellness", emoji: "🩹", color: "14, 165, 233" },
    { name: "Cater's", img: caterImg, desc: "Expert catering & traditional sweets", group: "professional", emoji: "🍳", color: "217, 119, 6" },
    { name: "Car Washing", img: carWashImg, desc: "Doorstep detailing & deep wash", group: "cleaning", emoji: "🧼", color: "59, 130, 246" },
    { name: "Tax Consultancy", img: taxImg, desc: "ITR filings, GST & legal planning", group: "professional", emoji: "💼", color: "79, 70, 229" },
    { name: "Painter", img: painterImg, desc: "Wall painting, textures & waterproofing", group: "repairs", emoji: "🎨", color: "219, 39, 119" },
    { name: "Repairing", img: repairingImg, desc: "Appliance & electronics servicing", group: "repairs", emoji: "⚙️", color: "75, 85, 99" },
    { name: "AC Repair", img: acImg, desc: "Servicing, installation & gas filling", group: "repairs", emoji: "❄️", color: "6, 182, 212" },
    { name: "Solar", img: solarImg, desc: "Solar panel installation & maintenance", group: "repairs", emoji: "☀️", color: "249, 115, 22" },
    { name: "Advocates", img: advocatesImg, desc: "Legal advice & documentations", group: "professional", emoji: "⚖️", color: "79, 70, 229" },
    { name: "Interior Design", img: interiorDesignImg, desc: "Modern space planning & decoration", group: "professional", emoji: "🛋️", color: "139, 92, 246" },
  ];

  const filteredCategories = categories.filter(item => {
    const matchesTab = activeTab === "all" || item.group === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const services = [
    {
      title: "Premium Home Spa (90 min)",
      price: "₹ 1799",
      img: spaImg,
      tag: "Trending",
      rating: "4.9",
      reviews: "148",
      features: ["Premium Products Included", "Certified Expert Therapists"],
    },
    {
      title: "Full Home Deep Cleaning",
      price: "₹ 2999",
      img: cleaningImg,
      tag: "Best Seller",
      rating: "4.8",
      reviews: "320",
      features: ["Eco-Friendly Chemicals", "Complete Post-Clean Sanitization"],
    },
    {
      title: "Expert Tap & Faucet Repair",
      price: "₹ 249",
      img: tapRepairImg,
      tag: "Essential",
      rating: "4.9",
      reviews: "94",
      features: ["15-min Guaranteed Arrival", "30 Days Warranty Service"],
    },
    {
      title: "Architecture Consultation",
      price: "₹ 5000",
      img: architectureImg,
      tag: "Premium",
      rating: "5.0",
      reviews: "42",
      features: ["Vastu-Compliant Options", "Comprehensive 3D Walkthrough"],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Choose Service",
      desc: "Select from our range of verified home services and professionals.",
      icon: "🔍"
    },
    {
      num: "02",
      title: "Book Expert",
      desc: "Schedule a time that works for you with your preferred professional.",
      icon: "🗓️"
    },
    {
      num: "03",
      title: "Relax & Enjoy",
      desc: "Our expert arrives on time to deliver high-quality service at your door.",
      icon: "✨"
    }
  ];

  return (
    <MainLayout>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>

        <div className="hero-content animate-fade-in" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-announcement animate-fade-in-left">
            <span>New</span>  our partner will be avalibale in 15 minutes 24/7.
          </div>
          <h1 className="hero-title">
            Your Home, <br />
            <span key={activeWordIndex} className="rotating-word-anim">
              {words[activeWordIndex]}.
            </span>
          </h1>
          <p className="hero-subtitle">Experience the next generation of home services with verified experts and seamless booking.</p>
          <div className="hero-btns">
            <Link to="/categories" className="btn-premium">Get Started Now</Link>
            <Link to="/about" className="btn-outline-premium">Why HomeFaciliti?</Link>
          </div>

          <div className="hero-stats animate-fade-in-delay-2">
            <div className="stat">
              <AnimatedCounter end={351000} suffix="+" />
              <span>Happy Homeowners</span>
            </div>
            <div className="stat-sep"></div>
            <div className="stat">
              <AnimatedCounter end={15} suffix=" min" />
              <span>Avg. Booking Time</span>
            </div>
            <div className="stat-sep"></div>
            <div className="stat">
              <AnimatedCounter end={31000} suffix="+" />
              <span>Certified Experts</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-right perspective-container">
          <div 
            className="hero-image-wrapper tilt-element"
            onMouseMove={handleCardTilt}
            onMouseLeave={handleCardTiltLeave}
          >
            <img src={heroBg} alt="Premium Home" className="hero-main-img" />

            {/* Parallax-style Floating elements */}
            <div className="floating-card glass card-trust animate-float-slow">
              <div className="trust-icon">🛡️</div>
              <div>
                <h6>100% Secure</h6>
                <p>Verified Professionals</p>
              </div>
            </div>

            <div className="floating-card glass card-rating animate-float-fast">
              <div className="rating-star">⭐ 4.9</div>
              <p>Top Rated Experts</p>
            </div>

            <div className="hero-blob"></div>
          </div>
        </div>
      </section>
      
      {/* ===== INFINITE LOGO MARQUEE ===== */}
      <div className="marquee-container reveal">
        <div className="marquee-content">
          {[
            { label: "Apex Tech", icon: "A" },
            { label: "Nexus Corp", icon: "N" },
            { label: "Vortex Media", icon: "V" },
            { label: "Quantum Labs", icon: "Q" },
            { label: "Elevate Systems", icon: "E" },
            { label: "Alpha Group", icon: "α" },
            { label: "Prime Service", icon: "P" },
            { label: "Stellar Co", icon: "S" },
          ].map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-logo-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
          {/* Duplicate for seamless wrapping */}
          {[
            { label: "Apex Tech", icon: "A" },
            { label: "Nexus Corp", icon: "N" },
            { label: "Vortex Media", icon: "V" },
            { label: "Quantum Labs", icon: "Q" },
            { label: "Elevate Systems", icon: "E" },
            { label: "Alpha Group", icon: "α" },
            { label: "Prime Service", icon: "P" },
            { label: "Stellar Co", icon: "S" },
          ].map((item, idx) => (
            <div key={`dup-${idx}`} className="marquee-item">
              <span className="marquee-logo-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="section bg-alt overflow-hidden">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Seamless Process</span>
            <h2 className="section-title">How HomeFaciliti Works</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card reveal" style={{ transitionDelay: `${idx * 0.2}s` }}>
                <div className="step-number">{step.num}</div>
                <div className="step-icon-bg">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {idx < 2 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Browse by Specialty</span>
            <h2 className="section-title">Explore Our Wide Network</h2>
            
            {/* Search Input */}
            <div className="category-search-container">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search home services (e.g. plumbing, painting, salon)..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="category-search-input"
              />
              {searchTerm && (
                <button className="search-clear-btn" onClick={() => setSearchTerm("")}>×</button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="category-tabs-container">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`category-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="category-grid">
              {filteredCategories.map((item, index) => {
                return (
                  <Link 
                    to="/categories" 
                    key={index} 
                    className="category-card-premium glow-card reveal" 
                    onMouseMove={handleCardTilt}
                    onMouseLeave={handleCardTiltLeave}
                    style={{ 
                      transitionDelay: `${(index % 8) * 0.05}s`,
                      "--theme-color": item.color
                    }}
                  >
                    <div className="cat-img-box">
                      <img src={item.img} alt={item.name} />
                      <div className="cat-badge-floating">
                        <span className="badge-emoji">{item.emoji}</span> {item.name}
                      </div>
                    </div>
                    <div className="cat-info">
                      <h4>{item.name}</h4>
                      <p className="cat-desc">{item.desc}</p>
                      <div className="cat-footer">
                        <span className="cat-cta">Explore Services</span>
                        <span className="cat-cta-arrow">→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="category-empty-state">
              <span className="empty-icon">🔍</span>
              <p>No services found in this category matching "{searchTerm}"</p>
              <button 
                className="btn-premium btn-small" 
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("all");
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== FEATURED SERVICES SECTION ===== */}
      <section className="section services-section reveal">
        <div className="services-spotlight"></div>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Expertly Selected</span>
            <h2 className="section-title">Featured Professional Services</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="premium-card service-card glow-card reveal" 
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardTiltLeave}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  "--glow-color": getTagShadow(service.tag)
                }}
              >
                <div className="service-img">
                  <span className="service-tag-floating" style={{ background: getTagGradient(service.tag) }}>{service.tag}</span>
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  
                  <div className="service-rating">
                    <span className="stars">⭐ {service.rating}</span>
                    <span className="reviews">({service.reviews} reviews)</span>
                  </div>

                  <div className="service-features">
                    {service.features.map((feat, fIdx) => (
                      <span key={fIdx} className="feature-pill">
                        <span className="check-icon">✓</span> {feat}
                      </span>
                    ))}
                  </div>

                  <div className="service-footer">
                    <div className="price-tag">
                      <span className="price-value">{service.price}</span>
                    </div>
                    <a href="https://homefaciliti-pixel.github.io/homefaciliti-user-aap-link/" target="_blank" rel="noopener noreferrer" className="btn-premium btn-small" style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}>
                      Book Now <span className="btn-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT EVENTS SECTION ===== */}
      <section className="section events-section reveal">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Our Latest Highlights</span>
            <h2 className="section-title">AIFTP National Tax Conference 2026</h2>
            <p className="text-secondary" style={{ marginTop: '16px' }}>Hotel Clarks Amer, Jaipur</p>
          </div>
          
          <div className="event-gallery-grid">
            <div className="event-photo photo-1 reveal">
              <img src={event1} alt="AIFTP Event 1" />
            </div>
            <div className="event-photo photo-2 reveal" style={{ transitionDelay: '0.1s' }}>
              <img src={event2} alt="AIFTP Event 2" />
            </div>
            <div className="event-photo photo-3 reveal" style={{ transitionDelay: '0.2s' }}>
              <img src={event3} alt="AIFTP Event 3" />
            </div>
            <div className="event-photo photo-4 reveal" style={{ transitionDelay: '0.3s' }}>
              <img src={event4} alt="AIFTP Event 4" />
            </div>
            <div className="event-photo photo-5 reveal" style={{ transitionDelay: '0.4s' }}>
              <img src={event5} alt="AIFTP Event 5" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMO SECTION ===== */}
      <section className="section promo-banner-section reveal">
        <div className="container">
          <div className="promo-banner-premium">
            {/* Animated background elements */}
            <div className="promo-orb promo-orb-1"></div>
            <div className="promo-orb promo-orb-2"></div>
            <div className="promo-orb promo-orb-3"></div>
            <div className="promo-mesh"></div>

            {/* Left: Content */}
            <div className="promo-content-premium">
              <div className="promo-badge">🏠 Trusted by 3,51,000+ Families</div>
              <h2 className="promo-headline">
                Ready to transform
                <span className="promo-headline-accent"> your home?</span>
              </h2>
              <p className="promo-subtext">Professional services at your doorstep — book in under 60 seconds. Available 24/7, anywhere in India.</p>

              <div className="promo-stats-row">
                <div className="promo-stat">
                  <span className="promo-stat-num">3.5L+</span>
                  <span className="promo-stat-label">Happy Customers</span>
                </div>
                <div className="promo-stat-divider"></div>
                <div className="promo-stat">
                  <span className="promo-stat-num">31K+</span>
                  <span className="promo-stat-label">Expert Partners</span>
                </div>
                <div className="promo-stat-divider"></div>
                <div className="promo-stat">
                  <span className="promo-stat-num">4.8★</span>
                  <span className="promo-stat-label">App Rating</span>
                </div>
              </div>

              <div className="promo-cta-row">
                <a href="https://homefaciliti-pixel.github.io/homefaciliti-user-aap-link/" target="_blank" rel="noopener noreferrer" className="promo-btn-primary" style={{ textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.38.07 2.33.76 3.13.78 1.18-.28 2.31-1.03 3.53-.9 1.51.17 2.65.77 3.4 1.93-3.17 1.87-2.57 5.9.24 7.13-.56 1.5-1.28 2.98-2.3 3.94zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  User App
                </a>
                <a href="https://homefaciliti-pixel.github.io/homefaciliti-partner-aap-link/" target="_blank" rel="noopener noreferrer" className="promo-btn-secondary" style={{ textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l12.5-12.5-2.89-2.89-10.6 15.19zm17.6-12.65l-2.37-1.37-3.09 3.09 3.1 3.1 2.39-1.38c.68-.39.68-1.38-.03-2.44zM.87 1.59C.6 1.83.43 2.2.43 2.7v18.6c0 .5.17.87.44 1.11l.06.05 10.4-10.4v-.24L.93 1.54l-.06.05zm14.66 8.51L4.04.66C3.69.48 3.32.42 2.99.55l10.5 10.5 2.04-1.95z"/></svg>
                  Partner App
                </a>
              </div>
            </div>

            {/* Right: Visual phone mockup */}
            <div className="promo-visual-premium">
              <div className="promo-phone-glow"></div>
              <div className="promo-phone">
                <div className="promo-phone-screen">
                  <div className="phone-screen-header">
                    <div className="phone-dot"></div>
                    <span>HomeFaciliti</span>
                  </div>
                  <div className="phone-screen-body">
                    <div className="phone-service-row">
                      <div className="phone-service-icon">🔧</div>
                      <div className="phone-service-text">
                        <div className="phone-service-name">Plumbing</div>
                        <div className="phone-service-sub">In 30 min</div>
                      </div>
                      <div className="phone-service-badge">Book</div>
                    </div>
                    <div className="phone-service-row">
                      <div className="phone-service-icon">⚡</div>
                      <div className="phone-service-text">
                        <div className="phone-service-name">Electrical</div>
                        <div className="phone-service-sub">Expert verified</div>
                      </div>
                      <div className="phone-service-badge">Book</div>
                    </div>
                    <div className="phone-service-row">
                      <div className="phone-service-icon">🧹</div>
                      <div className="phone-service-text">
                        <div className="phone-service-name">Cleaning</div>
                        <div className="phone-service-sub">4.9 ★ rated</div>
                      </div>
                      <div className="phone-service-badge active">Book</div>
                    </div>
                    <div className="phone-rating-banner">
                      <span>⭐ 4.8 Rating</span>
                      <span>3,51,000+ Users</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="promo-float-badge badge-top">
                <span>✅</span> Booking Confirmed!
              </div>
              <div className="promo-float-badge badge-bottom">
                <span>⚡</span> 60-sec booking
              </div>
            </div>
          </div>
        </div>
      </section>

       <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 80px 0 60px;
          align-items: center;
        }
        .hero-announcement {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
        }
        .hero-announcement span {
          background: var(--grad-main);
          color: white;
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
        }
        .hero-title {
          font-size: 72px;
          line-height: 1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }
        .hero-title span {
          background: var(--grad-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 20px;
          color: var(--text-muted);
          max-width: 520px;
          margin-bottom: 48px;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 60px;
        }
        .stat strong { display: block; font-size: 24px; color: var(--text-main); }
        .stat span { font-size: 14px; color: var(--text-muted); }
        .stat-sep { width: 1px; height: 40px; background: #e2e8f0; }

        .hero-visual { position: relative; }
        .hero-image-wrapper {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 40px;
          box-shadow: var(--shadow-premium);
          border: 12px solid white;
          background: #f8fafc;
        }
        .hero-main-img {
          width: 100%;
          display: block;
          animation: kenBurns 20s ease-in-out infinite;
          transform-origin: center;
        }
        .floating-card {
          position: absolute;
          padding: 20px;
          border-radius: 20px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-lg);
        }
        .card-trust { top: 40px; left: -40px; }
        .card-rating { bottom: 60px; right: -20px; flex-direction: column; text-align: center; gap: 8px; }
        .rating-star { font-weight: 800; font-size: 20px; color: gold; }
        .card-trust h6 { margin: 0; font-size: 16px; font-weight: 700; }
        .card-trust p { margin: 0; font-size: 12px; color: var(--text-muted); }
        
        .hero-blob {
          position: absolute;
          width: 120%;
          height: 120%;
          background: linear-gradient(135deg, #2563eb, #ec4899, #f59e0b, #3b82f6);
          background-size: 300% 300%;
          filter: blur(80px);
          opacity: 0.15;
          top: -10%;
          left: -10%;
          z-index: -1;
          animation: morphBlob 16s ease-in-out infinite, gradientShift 12s ease infinite;
        }

        .section { padding: 80px 0; position: relative; }
        .bg-alt { background: #f8fafc; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-tag { color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 13px; margin-bottom: 12px; display: block; }
        .section-title { font-size: 48px; letter-spacing: -1px; }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .step-card {
          position: relative;
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 32px;
          box-shadow: var(--shadow-md);
          transition: all 0.4s ease;
        }
        .step-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); }
        .step-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 42px;
          font-weight: 900;
          opacity: 0.05;
        }
        .step-icon-bg {
          width: 80px;
          height: 80px;
          background: #f1f5f9;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 24px;
          transition: all 0.4s ease;
        }
        .step-card:hover .step-icon-bg { background: var(--primary); color: white; transform: rotate(10deg); }
        .step-card h3 { margin-bottom: 16px; font-size: 24px; }
        .step-card p { color: var(--text-muted); line-height: 1.6; }
        .step-connector {
          position: absolute;
          top: 50%;
          right: -30px;
          width: 40px;
          height: 2px;
          background: #e2e8f0;
          z-index: 1;
        }

        .category-search-container {
          position: relative;
          max-width: 580px;
          margin: 32px auto 0;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 20px;
          padding: 6px 18px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        .category-search-container:focus-within {
          border-color: var(--primary);
          box-shadow: 0 10px 30px -5px rgba(37, 99, 235, 0.12), 0 0 0 3px rgba(37, 99, 235, 0.05);
          background: white;
        }
        .search-icon {
          font-size: 18px;
          margin-right: 12px;
          opacity: 0.6;
        }
        .category-search-input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          padding: 12px 0;
          font-size: 16px;
          color: var(--text-main);
          font-weight: 500;
        }
        .category-search-input::placeholder {
          color: var(--text-muted);
          opacity: 0.8;
        }
        .search-clear-btn {
          background: none;
          border: none;
          font-size: 22px;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        }
        .search-clear-btn:hover {
          color: var(--text-main);
        }

        /* Tabs Filter Styling */
        .category-tabs-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 32px auto 8px;
          max-width: 900px;
        }
        .category-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .category-tab-btn:hover {
          transform: translateY(-2px);
          color: var(--text-main);
          border-color: rgba(37, 99, 235, 0.2);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .category-tab-btn.active {
          background: var(--grad-main);
          color: white;
          border-color: transparent;
          box-shadow: 0 8px 20px -5px rgba(37, 99, 235, 0.3);
        }
        .tab-icon {
          font-size: 16px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 28px;
          position: relative;
          z-index: 1;
        }
        .category-card-premium {
          text-decoration: none;
          color: var(--text-main);
          background: var(--surface);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 24px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .category-card-premium:hover {
          transform: translateY(-6px);
          border-color: transparent;
          box-shadow: 0 20px 40px -15px rgba(var(--theme-color), 0.25),
                      0 0 0 1px rgba(var(--theme-color), 0.1);
        }
        .cat-img-box {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 1.1 / 1;
          margin-bottom: 16px;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.02);
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cat-img-box img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .category-card-premium:hover .cat-img-box img { 
          transform: scale(1.08) rotate(0.5deg); 
        }
        .cat-badge-floating {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: white;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .badge-emoji {
          font-size: 12px;
        }
        .cat-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .cat-info h4 { 
          font-size: 18px; 
          font-weight: 700; 
          margin-bottom: 6px; 
          transition: color 0.3s ease;
          text-align: left;
        }
        .category-card-premium:hover .cat-info h4 {
          color: rgba(var(--theme-color), 1);
        }
        .cat-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.4;
          margin-bottom: 16px;
          text-align: left;
          flex: 1;
        }
        .cat-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
          padding-top: 12px;
          margin-top: auto;
        }
        .cat-cta {
          font-size: 13px;
          font-weight: 700;
          color: var(--primary);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .category-card-premium:hover .cat-cta {
          color: rgba(var(--theme-color), 1);
          opacity: 1;
        }
        .cat-cta-arrow {
          font-size: 14px;
          color: var(--primary);
          transition: transform 0.3s ease;
        }
        .category-card-premium:hover .cat-cta-arrow {
          color: rgba(var(--theme-color), 1);
          transform: translateX(4px);
        }

        .category-empty-state {
          text-align: center;
          padding: 60px 20px;
          background: rgba(248, 250, 252, 0.5);
          border: 2px dashed rgba(226, 232, 240, 0.8);
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 480px;
          margin: 0 auto;
        }
        .empty-icon {
          font-size: 42px;
          opacity: 0.3;
        }
        .category-empty-state p {
          color: var(--text-muted);
          font-size: 16px;
          font-weight: 500;
        }

        .services-section {
          position: relative;
          overflow: hidden;
        }
        .services-spotlight {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 800px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(37, 99, 235, 0.02) 40%, rgba(255, 255, 255, 0) 70%);
          z-index: 0;
          pointer-events: none;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 32px;
          position: relative;
          z-index: 1;
        }
        .service-card {
          position: relative;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          background: var(--surface);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 28px;
          padding: 20px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover {
          transform: translateY(-8px);
          border-color: transparent;
          box-shadow: 0 20px 40px -15px var(--glow-color, rgba(37, 99, 235, 0.2)), 
                      0 0 0 1px rgba(255, 255, 255, 0.4);
        }
        .service-img {
          width: 100%;
          aspect-ratio: 1.2 / 1;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: inset 0 0 40px rgba(0,0,0,0.02);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover .service-img {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }
        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover .service-img img {
          transform: scale(1.08);
        }
        .service-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(37, 99, 235, 0.01), rgba(15, 23, 42, 0.04));
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .service-card:hover .service-img::after {
          opacity: 0;
        }
        .service-tag-floating {
          position: absolute;
          top: 12px;
          right: 12px;
          color: white;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          z-index: 5;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
        }
        .service-content {
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          flex: 1;
          width: 100%;
        }
        .service-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 8px;
          min-height: auto;
          display: block;
          text-align: left;
          letter-spacing: -0.5px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        .service-card:hover .service-content h3 {
          color: var(--primary);
        }
        .service-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          margin-bottom: 16px;
        }
        .service-rating .stars {
          color: var(--accent);
          font-weight: 700;
        }
        .service-rating .reviews {
          color: var(--text-muted);
          opacity: 0.8;
        }
        .service-features {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }
        .feature-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .feature-pill .check-icon {
          color: #10b981;
          font-weight: 800;
        }
        .service-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px dashed rgba(226, 232, 240, 0.8);
          width: 100%;
          margin-top: auto;
        }
        .price-tag {
          background: rgba(37, 99, 235, 0.04);
          padding: 8px 16px;
          border-radius: 12px;
          border: 1px solid rgba(37, 99, 235, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          min-width: 90px;
        }
        .service-card:hover .price-tag {
          background: var(--primary);
          border-color: var(--primary);
        }
        .price-value {
          font-size: 18px;
          font-weight: 800;
          color: var(--primary);
          transition: color 0.3s ease;
        }
        .service-card:hover .price-value {
          color: white;
        }
        .btn-small {
          padding: 8px 16px !important;
          font-size: 13px !important;
          border-radius: 12px !important;
        }
        .btn-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .service-card:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* ===== PREMIUM PROMO BANNER ===== */
        .promo-banner-premium {
          position: relative;
          background: linear-gradient(135deg, #1e1b4b 0%, #2563eb 45%, #7c3aed 100%);
          border-radius: 32px;
          padding: 72px 64px;
          color: white;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 60px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 40px 100px rgba(37,99,235,0.35), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .promo-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: promoFloat 8s ease-in-out infinite;
          pointer-events: none;
        }
        .promo-orb-1 { width: 300px; height: 300px; background: rgba(124,58,237,0.45); top: -80px; right: 100px; animation-delay: 0s; }
        .promo-orb-2 { width: 200px; height: 200px; background: rgba(37,99,235,0.5); bottom: -60px; left: 200px; animation-delay: 2s; }
        .promo-orb-3 { width: 150px; height: 150px; background: rgba(16,185,129,0.3); top: 50%; right: 40%; animation-delay: 4s; }
        @keyframes promoFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.95); }
        }
        .promo-mesh {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        /* Content */
        .promo-content-premium { position: relative; z-index: 2; }
        .promo-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: badgePulse 3s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
        .promo-headline {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          color: white;
        }
        .promo-headline-accent {
          background: linear-gradient(90deg, #a78bfa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .promo-subtext {
          font-size: 17px;
          opacity: 0.82;
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 480px;
        }

        /* Stats row */
        .promo-stats-row {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 40px;
        }
        .promo-stat { display: flex; flex-direction: column; gap: 2px; }
        .promo-stat-num { font-size: 22px; font-weight: 800; color: white; }
        .promo-stat-label { font-size: 11px; opacity: 0.65; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
        .promo-stat-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.2); }

        /* CTA buttons */
        .promo-cta-row { display: flex; gap: 16px; flex-wrap: wrap; }
        .promo-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #1e1b4b;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }
        .promo-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .promo-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          color: white;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.25);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .promo-btn-secondary:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-3px) scale(1.03);
          border-color: rgba(255,255,255,0.45);
        }

        /* Phone Visual */
        .promo-visual-premium {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .promo-phone-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%);
          border-radius: 50%;
          animation: promoFloat 5s ease-in-out infinite;
        }
        .promo-phone {
          width: 200px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
          animation: phoneFloat 6s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
        .promo-phone-screen { padding: 0; }
        .phone-screen-header {
          background: rgba(255,255,255,0.1);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .phone-dot {
          width: 8px; height: 8px;
          background: #34d399;
          border-radius: 50%;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .phone-screen-body { padding: 12px; display: flex; flex-direction: column; gap: 8px; }
        .phone-service-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 10px 12px;
          transition: background 0.3s;
        }
        .phone-service-row:hover { background: rgba(255,255,255,0.12); }
        .phone-service-icon { font-size: 18px; }
        .phone-service-text { flex: 1; }
        .phone-service-name { font-size: 11px; font-weight: 700; color: white; }
        .phone-service-sub { font-size: 9px; opacity: 0.55; color: white; margin-top: 1px; }
        .phone-service-badge {
          font-size: 9px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 8px;
          background: rgba(255,255,255,0.15);
          color: white;
        }
        .phone-service-badge.active {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          animation: badgePulse 2s ease-in-out infinite;
        }
        .phone-rating-banner {
          display: flex;
          justify-content: space-between;
          background: rgba(52,211,153,0.15);
          border: 1px solid rgba(52,211,153,0.3);
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 10px;
          font-weight: 700;
          color: #6ee7b7;
          margin-top: 4px;
        }

        /* Floating badges */
        .promo-float-badge {
          position: absolute;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 10px 16px;
          font-size: 12px;
          font-weight: 700;
          color: white;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 3;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .badge-top { top: -16px; right: -20px; animation: badgeFloatA 5s ease-in-out infinite; }
        .badge-bottom { bottom: -16px; right: 30px; animation: badgeFloatB 5s ease-in-out 1s infinite; }
        @keyframes badgeFloatA {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes badgeFloatB {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
        .white-bg { background: white; color: black; }
        .white-bg:hover { filter: brightness(0.9); }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }

        @keyframes kenBurns {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08) translate(10px, -5px); }
        }

        @keyframes morphBlob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            border-radius: 50%;
          }
          33% {
            transform: translate(40px, -60px) scale(1.15);
            border-radius: 30% 70% 70% 30% / 50% 60% 40% 50%;
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .events-section { background: #fff; }
        .event-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 250px);
          gap: 20px;
        }
        .event-photo {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          position: relative;
        }
        .event-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .event-photo:hover img { transform: scale(1.05); }
        .placeholder-bg {
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .placeholder-bg::after {
          content: 'Photo Placeholder';
          color: #94a3b8;
          font-weight: 600;
          font-size: 16px;
        }
        .photo-1 { grid-column: span 2; grid-row: span 2; }
        .photo-2 { grid-column: span 1; grid-row: span 1; }
        .photo-3 { grid-column: span 1; grid-row: span 1; }
        .photo-4 { grid-column: span 1; grid-row: span 1; }
        .photo-5 { grid-column: span 1; grid-row: span 1; }

        @media (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr; text-align: center; padding-top: 60px; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-title { font-size: 52px; }
          .hero-stats { justify-content: center; margin-bottom: 60px; }
          .steps-grid { grid-template-columns: 1fr; }
          .step-connector { display: none; }
          .category-grid { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
          .promo-banner { grid-template-columns: 1fr; padding: 40px; text-align: center; }
          .event-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .photo-1 { grid-column: span 2; grid-row: span 1; height: 300px; }
          .photo-2, .photo-3, .photo-4, .photo-5 { grid-column: span 1; height: 200px; }
        }
        @media (max-width: 768px) {
          .section { padding: 40px 0; }
          .section-title { font-size: 36px; }
          .hero-section { padding: 30px 0 45px; }
          .category-tabs-container {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            padding: 8px 24px;
            margin: 20px -24px 8px;
            gap: 8px;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .category-tabs-container::-webkit-scrollbar {
            display: none;
          }
          .category-tab-btn {
            padding: 8px 16px;
            font-size: 13px;
            flex-shrink: 0;
          }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 38px; letter-spacing: -1px; }
          .hero-subtitle { font-size: 16px; margin-bottom: 24px; }
          .hero-stats { gap: 16px; margin-top: 32px; }
          .stat strong { font-size: 20px; }
          .stat span { font-size: 12px; }
          .floating-card { display: none; }
          .promo-content h2 { font-size: 30px; }
          .promo-content p { font-size: 16px; margin-bottom: 24px; }
          .promo-banner { padding: 32px 20px; border-radius: 24px; }
          .section-title { font-size: 28px; }
          .event-gallery-grid { grid-template-columns: 1fr; }
          .photo-1, .photo-2, .photo-3, .photo-4, .photo-5 { grid-column: span 1; height: 250px; }
          
          /* Compact 2-column mobile category grid */
          .category-grid {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .category-card-premium {
            padding: 10px;
            border-radius: 18px;
          }
          .cat-img-box {
            margin-bottom: 8px;
            border-radius: 12px;
          }
          .cat-badge-floating {
            top: 6px;
            left: 6px;
            padding: 4px 8px;
            font-size: 9px;
            border-radius: 8px;
          }
          .badge-emoji {
            font-size: 10px;
          }
          .cat-info h4 {
            font-size: 14px;
            margin-bottom: 4px;
          }
          .cat-desc {
            font-size: 11px;
            margin-bottom: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.3;
          }
          .cat-footer {
            padding-top: 8px;
          }
          .cat-cta {
            font-size: 11px;
          }
          .cat-cta-arrow {
            font-size: 12px;
          }
          
          /* Service card mobile adjustments */
          .services-grid {
            gap: 20px;
          }
          .service-card {
            padding: 16px;
            border-radius: 20px;
          }
          .category-search-input {
            font-size: 14px;
            padding: 10px 0;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          .category-tabs-container {
            margin: 20px -16px 8px;
            padding: 8px 16px;
          }
          .hero-btns { flex-direction: column; width: 100%; gap: 12px; }
          .hero-btns a { width: 100%; text-align: center; }
        }
      `}</style>
    </MainLayout>
  );
}

export default Home;