export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hey, I'm</p>
          <h1>Hatim Rangwala</h1>
          <p className="subtitle">Software Engineer</p>
          <p className="location">Rochester, New York</p>
          <div className="education-hero">
            <p className="education-item-hero">MS Computer Science – Advanced AI, 2026</p>
            <p className="education-item-hero">B.Tech Electronics & Telecommunications, 2022</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/hr1378" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
              <i className="fab fa-github"></i>
              <span className="tooltip">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/hatimr" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
              <span className="tooltip">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
