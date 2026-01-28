import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Eye, TrendingUp } from 'lucide-react';
import { values, siteConfig } from '../data/mock';

const valueIcons = {
  Independence: Shield,
  Reliability: Target,
  Discretion: Eye,
  Results: TrendingUp
};

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">About</h1>
          <p className="page-subtitle">
            Independent IT consulting built on real-world experience 
            and a commitment to practical results.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="about-content">
          <div className="about-intro">
            <h2 className="about-heading">Independent Consultant, Genuine Expertise</h2>
            <p className="about-text">
              {siteConfig.businessName} is a standalone freelance consultancy providing 
              practical, results-driven technology solutions to small and medium businesses 
              across Australia.
            </p>
            <p className="about-text">
              With years of hands-on experience supporting enterprise systems, business 
              applications, and operational workflows, I bring a strong background in ERP 
              environments, technical support, and system optimisation to every engagement.
            </p>
            <p className="about-text">
              Operating independently means my advice is objective and aligned solely with 
              your business interests — no vendor agendas, no corporate politics, just 
              straightforward guidance focused on what works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-content">
          <h2 className="values-title">Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => {
              const IconComponent = valueIcons[value.title];
              return (
                <div key={index} className="value-card">
                  <div className="value-card-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-card-desc">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section">
        <div className="approach-content">
          <h2 className="approach-title">My Approach</h2>
          <div className="approach-steps">
            <div className="approach-step">
              <span className="step-number">01</span>
              <h3>Listen & Understand</h3>
              <p>Every engagement starts with understanding your business, challenges, and objectives.</p>
            </div>
            <div className="approach-step">
              <span className="step-number">02</span>
              <h3>Analyse & Recommend</h3>
              <p>Thorough assessment leading to clear, practical recommendations tailored to your situation.</p>
            </div>
            <div className="approach-step">
              <span className="step-number">03</span>
              <h3>Execute & Deliver</h3>
              <p>Hands-on implementation with regular communication and transparent progress updates.</p>
            </div>
            <div className="approach-step">
              <span className="step-number">04</span>
              <h3>Support & Evolve</h3>
              <p>Ongoing support and guidance as your business and technology needs change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-description">
            Ready to discuss how independent IT consulting can benefit your business?
          </p>
          <Link to="/contact" className="btn-primary cta-btn">
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
