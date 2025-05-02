import React, { useState, useEffect } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Our Story', id: 'our-story' },
    { label: 'Products', id: 'products' },
    { label: 'Our Infrastructure', id: 'infrastructure' },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setVisible(false); // Close drawer on mobile
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    

      <div
        style={{
          height: 80,
          padding: '0 5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          boxShadow: scrolled
            ? '0 4px 12px rgba(0,0,0,0.1)'
            : '0 2px 4px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.3s ease',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ flex: 'none' }}>
          <img src={Logo} alt="Logo" style={{ height: 60, objectFit: 'contain' }} />
        </div>

        <div className="desktop-navbar" style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>
          {menuItems.map((item, index) => (
            <button key={index} className="nav-link" onClick={() => handleScrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="desktop-navbar" style={{ flex: 'none' }}>
          <button className="download-btn">Download Now</button>
        </div>

        <div className="mobile-navbar" style={{ display: 'none', alignItems: 'center' }}>
          <MenuOutlined onClick={() => setVisible(true)} style={{ fontSize: 28, color: '#1E1E1E' }} />
        </div>
      </div>

      {visible && (
        <div className="drawer">
          {menuItems.map((item, index) => (
            <div key={index} style={{ marginBottom: 12 }}>
              <button className="nav-link" onClick={() => handleScrollTo(item.id)} style={{ width: '100%', textAlign: 'left' }}>
                {item.label}
              </button>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <button onClick={() => setVisible(false)} style={{ background: 'transparent', border: 'none' }}>
              <CloseOutlined style={{ fontSize: 22 }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
