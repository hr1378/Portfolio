'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'fullstack', label: 'Full Stack', subitem: true },
  { id: 'ml', label: 'Machine Learning', subitem: true },
  { id: 'data', label: 'Data Engineering', subitem: true },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let activeSectionId = '';
      let minDistance = Infinity;

      const sections = document.querySelectorAll('section[id], .project-category[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeSectionId = sectionId || '';
        }
      });

      if (!activeSectionId) {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const distance = Math.abs(scrollPosition - sectionTop);
          if (distance < minDistance) {
            minDistance = distance;
            activeSectionId = section.getAttribute('id') || '';
          }
        });
      }

      setActiveSection(activeSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="side-nav">
      <div className="nav-line"></div>
      <ul className="side-nav-links">
        {navItems.map((item) => (
          <li key={item.id} className={item.subitem ? 'nav-subitem' : ''}>
            <a
              href={`#${item.id}`}
              className={`nav-dot ${activeSection === item.id ? 'active' : ''}`}
              data-section={item.id}
              onClick={(e) => handleNavClick(e, `#${item.id}`)}
            >
              <span className="nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
