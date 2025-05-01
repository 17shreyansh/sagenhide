import React from 'react';
import { Row, Col, Typography } from 'antd';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';

const { Text } = Typography;

const ResponsiveComponent = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <Row gutter={[16, 16]} justify="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
            <img 
              src={c1} 
              alt="Image 1" 
              style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '1rem' }} 
            />
            <Text style={{ color: '#000', textAlign: 'center', fontFamily: 'Montserrat', fontStyle: 'normal', lineHeight: 'normal', fontSize: '20px', fontWeight: 500 }}>
              End-to-end sourcing, private labeling & OEM services
            </Text>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
            <img 
              src={c2} 
              alt="Image 2" 
              style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '1rem' }} 
            />
            <Text style={{ color: '#000', textAlign: 'center', fontFamily: 'Montserrat', fontStyle: 'normal', lineHeight: 'normal', fontSize: '20px', fontWeight: 500 }}>
              Reliable partner for wholesalers, retailers, and design firms
            </Text>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
            <img 
              src={c3} 
              alt="Image 3" 
              style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '1rem' }} 
            />
            <Text style={{ color: '#000', textAlign: 'center', fontFamily: 'Montserrat', fontStyle: 'normal', lineHeight: 'normal', fontSize: '20px', fontWeight: 500 }}>
              Seamless supply chain management for on-time delivery worldwide
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResponsiveComponent;
