import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock submission - simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Store in localStorage for demo purposes
      const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      inquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('inquiries', JSON.stringify(inquiries));
    }, 1000);
  };

  if (submitted) {
    return (
      <main className="contact-page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">Get in touch to discuss your IT needs.</p>
          </div>
        </section>
        
        <section className="contact-success">
          <div className="success-content">
            <CheckCircle size={64} className="success-icon" />
            <h2>Thank You</h2>
            <p>Your inquiry has been received. I'll be in touch within 1-2 business days.</p>
            <Button 
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', company: '', service: '', message: '' });
              }}
              className="btn-secondary"
            >
              Send Another Message
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            Ready to discuss your IT needs? Get in touch for a no-obligation conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-info-title">Get Independent IT Advice</h2>
            <p className="contact-info-text">
              Whether you need strategic IT consulting, ERP support, or web development, 
              I'm here to help. Let's start with a conversation about your business needs.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail size={24} />
                <div>
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="detail-value">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="contact-detail-item">
                <MapPin size={24} />
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <p>Serving clients remotely Australia-wide and locally where practical.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="erp-support">ERP Support & Advisory</option>
                    <option value="web-development">Web Development</option>
                    <option value="freelance-support">Freelance IT Support</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or how I can help..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                className="btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
