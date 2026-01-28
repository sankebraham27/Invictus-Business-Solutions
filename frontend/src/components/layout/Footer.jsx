import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { siteConfig, navLinks } from '../../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">{siteConfig.businessName}</span>
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>{siteConfig.email}</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Navigation</h4>
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-cta-section">
            <h4 className="footer-heading">Ready to Start?</h4>
            <p className="footer-cta-text">Get independent IT advice for your business.</p>
            <Link to="/contact" className="btn-primary footer-cta-btn">
              Request a Consultation
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} {siteConfig.businessName}. All rights reserved.</p>
            <p className="footer-disclaimer">
              This business operates independently and is not affiliated with any employer or third-party organisation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
