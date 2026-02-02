import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/mock';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="dark-header">
        <Link to="/" className="logo-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-text">{siteConfig.businessName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="dark-nav desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`dark-nav-link ${location.pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary nav-cta">
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation - Outside header for proper layering */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`mobile-nav-link ${location.pathname === link.href ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
