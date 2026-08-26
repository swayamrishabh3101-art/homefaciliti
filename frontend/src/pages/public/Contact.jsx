import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import useReveal from "../../hooks/useReveal";
import contactBg from "../../assets/images/contact-bg.jpg";
import emailIcon from "../../assets/images/email-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import locationIcon from "../../assets/images/location-icon.png";

function Contact() {
  useReveal();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle -> sending -> success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

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
    
    const icon = card.querySelector(".icon-wrapper");
    if (icon) {
      const moveX = (percentX * -8).toFixed(2);
      const moveY = (percentY * -8).toFixed(2);
      icon.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1) rotate(5deg)`;
    }
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardTiltLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const icon = card.querySelector(".icon-wrapper");
    if (icon) {
      icon.style.transform = `translate3d(0, 0, 0) scale(1) rotate(0deg)`;
    }
  };

  return (
    <MainLayout>
      <section className="contact-page">
        {/* Background Hero */}
        <div className="contact-hero" style={{ position: "relative", overflow: "hidden" }}>
          <div className="contact-hero-bg" style={{ backgroundImage: `url(${contactBg})` }}></div>
          <div className="overlay-dark"></div>

          {/* Ambient Glow Blurs */}
          <div className="contact-glow-1"></div>
          <div className="contact-glow-2"></div>

          <div className="container">
            <div className="contact-card glass reveal" style={{ maxWidth: '1000px', padding: '50px 40px' }}>
              <span className="section-tag">Get in Touch</span>
              <h1 className="auth-title">Contact HomeFaciliti</h1>
              <p className="auth-subtitle" style={{ marginBottom: '40px' }}>We're available 24/7 to help you with your home service needs.</p>

              {formStatus === "success" ? (
                <div className="form-success-animation">
                  <div className="success-icon-svg-wrapper">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you. We will get back to you shortly.</p>
                </div>
              ) : (
                <div className="contact-main-layout">
                  {/* Left Side: Info cards & Social links */}
                  <div className="contact-info-section">
                    <div className="contact-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                      {/* Email Us */}
                      <div 
                        className="contact-info-card glow-card" 
                        style={{ "--theme-color": "37, 99, 235" }}
                        onMouseMove={handleCardTilt}
                        onMouseLeave={handleCardTiltLeave}
                      >
                        <div className="icon-wrapper">
                          <img src={emailIcon} alt="Email" className="info-icon-img" />
                        </div>
                        <div className="info-text">
                          <h3>Email Us</h3>
                          <p style={{ fontSize: '13px' }}>homefaciliti@gmail.com</p>
                        </div>
                      </div>

                      {/* Call Us */}
                      <div 
                        className="contact-info-card glow-card" 
                        style={{ "--theme-color": "124, 58, 237" }}
                        onMouseMove={handleCardTilt}
                        onMouseLeave={handleCardTiltLeave}
                      >
                        <div className="icon-wrapper">
                          <img src={phoneIcon} alt="Phone" className="info-icon-img" />
                        </div>
                        <div className="info-text">
                          <h3>Call Us</h3>
                          <p style={{ fontSize: '13px' }}>+91 9462661184<br />+91 9054628864</p>
                        </div>
                      </div>

                      {/* WhatsApp Us */}
                      <a 
                        href="https://wa.me/919462661184" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-info-card full-width whatsapp-card glow-card"
                        style={{ "--theme-color": "16, 185, 129" }}
                        onMouseMove={handleCardTilt}
                        onMouseLeave={handleCardTiltLeave}
                      >
                        <div className="icon-wrapper">
                          <svg className="info-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div className="info-text">
                          <h3>WhatsApp Us</h3>
                          <p>+91 9462661184</p>
                        </div>
                      </a>

                      {/* Location */}
                      <div 
                        className="contact-info-card full-width glow-card" 
                        style={{ "--theme-color": "249, 115, 22" }}
                        onMouseMove={handleCardTilt}
                        onMouseLeave={handleCardTiltLeave}
                      >
                        <div className="icon-wrapper">
                          <img src={locationIcon} alt="Location" className="info-icon-img" />
                        </div>
                        <div className="info-text">
                          <h3>Corporate Office</h3>
                          <p style={{ fontSize: '13px' }}>
                            Super Home Technology Pvt Ltd<br />
                            208 2nd Floor, Shayona Arcade, Opp. Dinesh Chamber,<br />
                            India Colony, Bapunagar, Ahmedabad, 380024
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Connections */}
                    <div className="social-section" style={{ marginTop: '24px' }}>
                      <div className="social-divider">
                        <span>Connect With Us</span>
                      </div>
                      <div className="social-mini">
                        <a href="https://www.facebook.com/share/17V5MXQqN1/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-capsule fb">
                          <svg className="social-icon fb-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/homefaciliti/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-capsule ig">
                          <svg className="social-icon ig-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/superhome-technologies-pvt-ltd-homefaciliti-" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-capsule li">
                          <svg className="social-icon li-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="https://x.com/homefacili29767" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="social-capsule x">
                          <svg className="social-icon x-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Message Form */}
                  <form className="contact-form-premium" onSubmit={handleSubmit}>
                    <h3>Send a Quick Message</h3>
                    
                    <div className="input-group-premium">
                      <input 
                        type="text" 
                        name="name"
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label>Your Name</label>
                      <span className="input-bar"></span>
                    </div>

                    <div className="input-group-premium">
                      <input 
                        type="email" 
                        name="email"
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <label>Your Email</label>
                      <span className="input-bar"></span>
                    </div>

                    <div className="input-group-premium">
                      <textarea 
                        name="message"
                        required 
                        rows="4" 
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                      <label>Your Message</label>
                      <span className="input-bar"></span>
                    </div>

                    <button type="submit" className="btn-premium btn-full" style={{ padding: '16px' }}>
                      {formStatus === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 80px 0;
          overflow: hidden;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 0;
          animation: kenBurnsBg 22s ease-in-out infinite;
          transform-origin: center;
        }
        .overlay-dark {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          z-index: 1;
        }
        
        @keyframes kenBurnsBg {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08) translate(5px, -3px); }
        }
        
        /* Ambient Glow Blurs */
        .contact-glow-1 {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0) 70%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }
        .contact-glow-2 {
          position: absolute;
          bottom: 15%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%);
          filter: blur(50px);
          z-index: 1;
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        /* True Glassmorphism Panel */
        .contact-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px;
          border-radius: 40px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.6);
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .auth-title { 
          font-size: 42px; 
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 12px; 
          color: var(--text-main);
        }
        .auth-subtitle { 
          color: var(--text-muted); 
          font-size: 16px;
          margin-bottom: 48px; 
        }
        
        /* Contact Cards Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }
        .contact-info-card {
          background: rgba(248, 250, 252, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          padding: 32px 24px;
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
        }
        .contact-info-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(var(--theme-color), 0.08) 0%, rgba(var(--theme-color), 0) 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .contact-info-card:hover::before {
          opacity: 1;
        }
        .contact-info-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(var(--theme-color), 0.3);
          box-shadow: 0 20px 40px -15px rgba(var(--theme-color), 0.18),
                      0 0 0 1px rgba(var(--theme-color), 0.05);
        }
        .whatsapp-card:hover {
          border-color: rgba(37, 211, 102, 0.35);
          box-shadow: 0 20px 40px -15px rgba(37, 211, 102, 0.2);
        }
        
        /* Floating Glowing Circular Icon Box */
        .icon-wrapper {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(var(--theme-color), 0.05);
          border: 1px solid rgba(var(--theme-color), 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: inset 0 2px 6px rgba(var(--theme-color), 0.02);
          position: relative;
          z-index: 1;
        }
        .contact-info-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: rgba(var(--theme-color), 0.1);
          border-color: rgba(var(--theme-color), 0.35);
          box-shadow: 0 8px 20px -6px rgba(var(--theme-color), 0.25);
        }
        
        .info-icon-img, .info-icon-svg {
          width: 34px;
          height: 34px;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        .info-icon-svg {
          color: rgba(var(--theme-color), 1);
          fill: currentColor;
        }
        
        /* Text element headers */
        .info-text {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .info-text h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-main);
          transition: color 0.3s ease;
        }
        .contact-info-card:hover .info-text h3 {
          color: rgba(var(--theme-color), 1);
        }
        .info-text p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }
        
        .full-width { grid-column: span 2; }

        /* Social Divider and mini capsules */
        .social-section {
          margin-top: 16px;
        }
        .social-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          position: relative;
        }
        .social-divider::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, rgba(226, 232, 240, 1) 50%, rgba(226, 232, 240, 0) 100%);
          z-index: 1;
        }
        .social-divider span {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.6);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
        }
        
        .social-mini {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .social-capsule {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(226, 232, 240, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }
        .social-capsule:hover {
          transform: translateY(-5px) scale(1.12);
          background: white;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
        }
        
        .social-icon {
          width: 20px;
          height: 20px;
          color: #64748b;
          transition: color 0.3s ease;
        }
        .social-capsule.fb:hover { border-color: rgba(24, 119, 242, 0.3); }
        .social-capsule.fb:hover .social-icon { color: #1877F2; }
        
        .social-capsule.ig:hover { border-color: rgba(225, 48, 108, 0.3); }
        .social-capsule.ig:hover .social-icon { color: #E1306C; }
        
        .social-capsule.li:hover { border-color: rgba(10, 102, 194, 0.3); }
        .social-capsule.li:hover .social-icon { color: #0A66C2; }
        
        .social-capsule.x:hover { border-color: rgba(15, 20, 25, 0.3); }
        .social-capsule.x:hover .social-icon { color: #0F1419; }
        
        .social-capsule.wa:hover { border-color: rgba(37, 211, 102, 0.3); }
        .social-capsule.wa:hover .social-icon { color: #25D366; }

        /* Responsiveness adjustments */
        @media (max-width: 768px) {
          .contact-hero {
            padding: 40px 0;
            min-height: 80vh;
          }
          .contact-card {
            padding: 40px 24px;
            border-radius: 32px;
          }
          .auth-title {
            font-size: 32px;
          }
          .auth-subtitle {
            margin-bottom: 32px;
          }
        }
        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .full-width {
            grid-column: span 1;
          }
          .contact-info-card {
            padding: 24px 16px;
            border-radius: 20px;
          }
          .icon-wrapper {
            width: 64px;
            height: 64px;
            margin-bottom: 16px;
          }
          .info-icon-img, .info-icon-svg {
            width: 28px;
            height: 28px;
          }
          .info-text h3 {
            font-size: 16px;
          }
          .info-text p {
            font-size: 14px;
          }
        }
      `}</style>
    </MainLayout>
  );
}

export default Contact;