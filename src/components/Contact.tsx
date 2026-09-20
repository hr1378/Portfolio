export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>I'm currently open to new opportunities. Feel free to reach out!</p>
        <div className="contact-links">
          <a href="https://github.com/hr1378" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
            <i className="fab fa-github"></i>
            <span className="tooltip">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/hatimr" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
            <span className="tooltip">LinkedIn</span>
          </a>
          <a href="mailto:contact@hatimrangwala.com" className="social-icon email" aria-label="Email">
            <i className="fas fa-envelope"></i>
            <span className="tooltip">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
