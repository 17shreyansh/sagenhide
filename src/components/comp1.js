import React from 'react';
import { Row, Col, Typography } from 'antd';

import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';

const { Text } = Typography;

const ResponsiveComponent = () => {
  return (
    <div className="container">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card-wrapper">
            <img src={c1} alt="Image 1" />
            <Text>
              End-to-end sourcing, private labeling & OEM services
            </Text>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card-wrapper">
            <img src={c2} alt="Image 2" />
            <Text>
              Reliable partner for wholesalers, retailers, and design firms
            </Text>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card-wrapper">
            <img src={c3} alt="Image 3" />
            <Text>
              Seamless supply chain management for on-time delivery worldwide
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResponsiveComponent;
