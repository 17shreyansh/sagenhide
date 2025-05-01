import React from 'react';
import { Button } from 'antd';
import Hero from '../assets/hero.jpg';

const HeroSection = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '90vh',
        backgroundImage: `url(${Hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 5%',
        color: '#FFFFFF',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          zIndex: 1,
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}
      >
        <p
          style={{
            fontSize: '1.8rem',
            fontFamily: 'Roboto Serif, serif',
            margin: 0,
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          A Global B2B partner in the export and import of premium leather accessories
        </p>
        <div
          style={{
            fontSize: '4.5rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            fontFamily: 'Montserrat',
          }}
        >
          Crafted with precision & style
        </div>
        <div
          style={{
            fontSize: '1.25rem',
            fontFamily: 'Roboto Serif, serif',
            opacity: 0.9,
          }}
        >
          We deliver consistent quality, timely logistics, and personalized sourcing solutions tailored to your brand.
        </div>

        <div
          style={{
            marginTop: '1rem',
          }}
        >
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              color: '#000000',
              fontSize: '16px',
              fontFamily: 'Lora',
              fontWeight: 500,
            }}
          >
            Download Now
          </Button>
        </div>
      </div>

      {/* Inline Media Queries for Responsiveness */}
      <style>{`
        @media (max-width: 1200px) {
          p {
            font-size: 1.5rem !important;
          }
          .hero-title {
            font-size: 3.5rem !important;
          }
          .hero-subtext {
            font-size: 1.125rem !important;
          }
        }

        @media (max-width: 768px) {
          p {
            font-size: 1.2rem !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-subtext {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          p {
            font-size: 1rem !important;
          }
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-subtext {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
