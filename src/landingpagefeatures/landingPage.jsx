import React from 'react';
import { useNavigate } from "react-router-dom";
import './landingPage.css';

const LandingPage = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        {/* Top Navigation Bar (inside hero) */}
        <div className="hero-top-bar">
          <div className="container flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/Vector 7.png" 
                alt="SureHold Logo" 
                className="logo-image"/>
              </div><button
            className="login-btn"
            onClick={() => (window.location.href = "/Mocklanding")}
            >Login</button>
          </div>
        </div>

        {/* Background Image */}
        <img 
          src="/hero-escrow 3.png" 
          alt="Secure escrow service background" 
          className="hero-bg-image"
        />
        
        {/* Overlay for readability */}
        <div className="hero-overlay"></div>
        
        {/* Main Hero Content */}
        <div className="hero-content">
          <h2>SureHold Services for Safe Transactions</h2>
          <p>
            Protect your payments with our secure escrow platform. We hold and verify funds until both parties confirm transaction completion.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary hero-btn" 
            onClick={() => (window.location.href = "/Mocklanding")}>
              Start Your First Escrow
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn btn-secondary hero-btn">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose SureHold?</h2>
          <p>Built for secure transactions with blockchain technology and comprehensive transaction security.</p>

          <div className="feature-row">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Secure Transactions</h3>
              <p>Your funds are protected with bank-level security until both parties confirm completion.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Trusted Platform</h3>
              <p>Connect with verified buyers and sellers in a safe, regulated environment.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Fast Processing</h3>
              <p>Quick setup and automated payments with streamlined workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Flow & Protection */}
      <section className="transaction-flow">
        <div className="container">
          <div className="flow-protection-grid">
            <div className="flow-column">
              <h3>Transaction Flow</h3>
              <div className="step-list">
                <div className="step-item">
                  <span className="step-number">1</span>
                  <span>Buyer funds the escrow account</span>
                </div>
                <div className="step-item">
                  <span className="step-number">2</span>
                  <span>Seller delivers goods/services</span>
                </div>
                <div className="step-item">
                  <span className="step-number">3</span>
                  <span>Funds released to seller</span>
                </div>
              </div>
            </div>

            <div className="protection-column">
              <h3>Complete Transaction Protection</h3>
              <ul className="protection-list">
                <li>
                  <span className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-4-4"></path>
                    </svg>
                  </span>
                  Buyer protection with secure fund holding
                </li>
                <li>
                  <span className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-4-4"></path>
                    </svg>
                  </span>
                  Seller guarantee of payment upon delivery
                </li>
                <li>
                  <span className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-4-4"></path>
                    </svg>
                  </span>
                  Dispute resolution system
                </li>
                <li>
                  <span className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-4-4"></path>
                    </svg>
                  </span>
                  Real-time transaction tracking
                </li>
                <li>
                  <span className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-4-4"></path>
                    </svg>
                  </span>
                  Multiple payment methods supported
                </li>
                <li>
                  <span className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-4-4"></path>
                    </svg>
                  </span>
                  Transparent fee structure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container text-center">
          <h2>Ready to Secure Your Next Transaction?</h2>
          <p>Join thousands of users who trust SureHold to keep their transactions safe with simple, secure platforms.</p>
          <button className="btn btn-primary" onClick={() => (window.location.href = "/Mocklanding")}>
            Create Your First Escrow
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#f3f4f6",
          borderTop: "1px solid #e5e7eb",
          padding: "1rem",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "0.875rem",
          flexShrink: 0,
        }}
      >
        © {new Date().getFullYear()} SureHold. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;