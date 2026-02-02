import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Database, Globe, Headphones, ChevronRight, Shield, Zap, Users, Code, TrendingUp } from 'lucide-react';
import { services, stats } from '../data/mock';

const iconMap = {
  Monitor: Monitor,
  Database: Database,
  Globe: Globe,
  Headphones: Headphones,
  Code: Code
};

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Floating Orbs */}
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Independent IT Consultant
            </div>
            <h1 className="hero-title">
              Technology Solutions<br />
              <span className="hero-highlight">That Drive Results</span>
            </h1>
            <p className="hero-description">
              20+ years of hands-on experience delivering practical IT consulting, 
              software development, and enterprise solutions for Australian businesses. 
              No corporate overhead — just direct, expert guidance.
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
            <div className="bento-grid">
              <div className="bento-card">
                <div className="bento-icon">
                  <Shield size={24} />
                </div>
                <h3 className="bento-title">Trusted Partner</h3>
                <p className="bento-desc">Independent advice aligned with your goals</p>
              </div>
              <div className="bento-card">
                <div className="bento-icon">
                  <Zap size={24} />
                </div>
                <h3 className="bento-title">Fast Delivery</h3>
                <p className="bento-desc">Efficient solutions without bureaucracy</p>
              </div>
              <div className="bento-card">
                <div className="bento-icon">
                  <TrendingUp size={24} />
                </div>
                <h3 className="bento-title">Proven Results</h3>
                <p className="bento-desc">Track record of successful projects</p>
              </div>
              <div className="bento-card featured">
                <div className="bento-icon">
                  <Users size={24} />
                </div>
                <div className="bento-stat">20+</div>
                <h3 className="bento-title">Years Experience</h3>
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
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Comprehensive IT Services</h2>
          <p className="section-subtitle">
            From strategic consulting to hands-on development, we deliver solutions 
            that make a real difference to your business operations.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={26} />
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
          <h2 className="value-title">Why Choose an Independent Consultant?</h2>
          <ul className="value-list">
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Objective Advice</strong>
                <p>No vendor allegiances or corporate agendas — just honest recommendations that serve your business interests.</p>
              </div>
            </li>
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Direct Communication</strong>
                <p>Work directly with your consultant throughout the engagement. No account managers or middlemen.</p>
              </div>
            </li>
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Flexible Engagement</strong>
                <p>Tailored arrangements that fit your timeline, budget, and specific requirements.</p>
              </div>
            </li>
            <li>
              <span className="value-bullet"></span>
              <div>
                <strong>Enterprise Experience</strong>
                <p>Two decades of hands-on experience with business systems, ERP platforms, and enterprise IT.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your IT?</h2>
          <p className="cta-description">
            Let's discuss how independent IT consulting can help your business 
            achieve its technology goals. No obligation, no pressure.
          </p>
          <Link to="/contact" className="btn-primary cta-btn">
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
