import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Monitor, Database, Globe, Headphones, Check } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Monitor: Monitor,
  Database: Database,
  Globe: Globe,
  Headphones: Headphones
};

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Services</h1>
          <p className="page-subtitle">
            Practical IT solutions delivered by an independent consultant with 
            hands-on enterprise system experience.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={service.id} 
              id={service.id}
              className={`service-detail ${isEven ? 'service-detail-left' : 'service-detail-right'}`}
            >
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-detail-icon">
                    <IconComponent size={40} />
                  </div>
                  <h2 className="service-detail-title">{service.title}</h2>
                </div>
                <p className="service-detail-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <Check size={18} className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary service-cta">
                  Discuss This Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Engagement Models */}
      <section className="engagement-section">
        <div className="engagement-content">
          <h2 className="engagement-title">Flexible Engagement Models</h2>
          <p className="engagement-subtitle">
            Choose the arrangement that works best for your business
          </p>
          <div className="engagement-grid">
            <div className="engagement-card">
              <h3>Project-Based</h3>
              <p>Defined scope, timeline, and deliverables for specific initiatives.</p>
            </div>
            <div className="engagement-card">
              <h3>Retainer Support</h3>
              <p>Ongoing monthly support with predictable costs and availability.</p>
            </div>
            <div className="engagement-card">
              <h3>Ad-Hoc Assistance</h3>
              <p>On-demand support for urgent issues or occasional needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Not Sure Which Service You Need?</h2>
          <p className="cta-description">
            Let's discuss your situation and find the right approach together.
          </p>
          <Link to="/contact" className="btn-primary cta-btn">
            Request a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
