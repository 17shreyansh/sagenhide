import React from 'react';
import Hero from '../assets/hero.jpg';


const HeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tagline">
          A Global B2B partner in the export and import of premium leather accessories
        </p>
        <div className="hero-title">
          Crafted with precision & style
        </div>
        <div className="hero-subtext">
          We deliver consistent quality, timely logistics, and personalized sourcing solutions tailored to your brand.
        </div>
        <div className="hero-button">
        <button className="download-btn">Download Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
