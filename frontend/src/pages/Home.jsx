import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Database, Globe, Headphones, ChevronRight, Shield, Zap, Users } from 'lucide-react';
import { services, stats, siteConfig } from '../data/mock';

const iconMap = {
  Monitor: Monitor,
  Database: Database,
  Globe: Globe,
  Headphones: Headphones
};

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Independent IT Consulting<br />
              <span className="hero-highlight">for Growing Businesses</span>
            </h1>
            <p className="hero-description">
              Practical, results-driven technology solutions from an experienced 
              independent consultant. No hype, no buzzwords — just reliable IT 
              guidance tailored to your business needs.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-primary">
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="illustration-grid">
                <div className="illustration-card">
                  <Shield size={28} />
                  <span>Trusted Partner</span>
                </div>
                <div className="illustration-card">
                  <Zap size={28} />
                  <span>Fast Solutions</span>
                </div>
                <div className="illustration-card">
                  <Users size={28} />
                  <span>Direct Support</span>
                </div>
                <div className="illustration-card accent">
                  <Monitor size={28} />
                  <span>IT Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions delivered with hands-on expertise
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>
                <Link to={`/services#${service.id}`} className="service-link">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-section">
        <div className="value-content">
          <h2 className="value-title">Why Work With an Independent Consultant?</h2>
          <ul className="value-list">
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Objective Advice</strong>
                <p>No vendor allegiances or corporate agendas — just honest recommendations.</p>
              </div>
            </li>
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Direct Communication</strong>
                <p>Work directly with your consultant, not through layers of management.</p>
              </div>
            </li>
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Flexible Engagement</strong>
                <p>Tailored arrangements that fit your timeline and budget.</p>
              </div>
            </li>
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Real-World Experience</strong>
                <p>Practical insights from hands-on enterprise system support.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Discuss Your IT Needs?</h2>
          <p className="cta-description">
            Get independent, practical IT advice for your business. 
            No obligation, no pressure.
          </p>
          <Link to="/contact" className="btn-primary cta-btn">
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
