import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png'; // Update path if needed

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const menuItems = ['Home', 'Our Story', 'Products', 'Our Standards'];

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <>
      {/* Responsive visibility styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-navbar {
            display: none !important;
          }
          .mobile-navbar {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-navbar {
            display: flex !important;
          }
          .mobile-navbar {
            display: none !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <div
        style={{
          height: 80,
          padding: '0 5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div style={{ flex: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" style={{ height: 60, objectFit: 'contain' }} />
        </div>

        {/* Center Nav - Desktop */}
        <div className="desktop-navbar" style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>
          <Menu mode="horizontal" style={{ borderBottom: 'none' }} selectable={false}>
            {menuItems.map((text, index) => (
              <Menu.Item key={index} style={menuItemStyle}>
                {text}
              </Menu.Item>
            ))}
          </Menu>
        </div>

        {/* Button - Desktop */}
        <div className="desktop-navbar" style={{ flex: 'none', display: 'flex', alignItems: 'center' }}>
          <Button type="default" style={downloadButtonStyle}>
            Download Now
          </Button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="mobile-navbar" style={{ display: 'none', alignItems: 'center' }}>
          <MenuOutlined onClick={showDrawer} style={{ fontSize: 28, color: '#1E1E1E' }} />
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
        width="70%"
      >
        <Menu mode="vertical" selectable={false}>
          {menuItems.map((text, index) => (
            <Menu.Item key={index} style={menuItemStyle}>
              {text}
            </Menu.Item>
          ))}
        </Menu>
        <Button
          type="default"
          block
          style={{ ...downloadButtonStyle, marginTop: 24, height: 45 }}
        >
          Download Now
        </Button>
      </Drawer>
    </>
  );
};

// Styles
const menuItemStyle = {
  fontSize: 18,
  fontFamily: 'Roboto Serif',
  fontWeight: 500,
  color: '#1E1E1E',
};

const downloadButtonStyle = {
  borderColor: '#000000',
  color: '#1E1E1E',
  width: 180,
  fontSize: 18,
  fontFamily: 'Roboto Serif',
  fontWeight: 500,
};

export default Navbar;
