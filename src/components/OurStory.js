import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import topImage from "../assets/ourstory1.jpg";
import bottomImage from "../assets/ourstory2.png";


const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const OurStory = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <section className="our-story-section">
      {/* Top Section */}
      <div className="our-story-top">
        <Row gutter={0} align="stretch">
          <Col xs={24} md={12} style={{ padding: isMobile ? "1.5rem" : "3rem" }}>
            <Title
              level={2}
              className="our-story-title"
              style={{ fontSize: isMobile ? "36px" : "80px" }}
            >
              Our Story
            </Title>
            <Title
              level={3}
              className="our-story-subtitle"
              style={{ fontSize: isMobile ? "18px" : "28px" }}
            >
              The Story Behind Our Brand
            </Title>
            <Paragraph
              className="our-story-paragraph"
              style={{ fontSize: isMobile ? "14px" : "18px" }}
            >
              Founded with a passion for fine craftsmanship, our journey in the leather industry began with a vision to bring premium Indian leather goods to global markets. From a humble beginning as a small workshop, we have grown into a globally recognized brand, known for our commitment to excellence and innovation.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <div
              className="our-story-image"
              style={{
                backgroundImage: `url(${topImage})`,
                minHeight: isMobile ? "250px" : "600px",
              }}
            />
          </Col>
        </Row>
      </div>

      {/* Bottom Section */}
      <div
        className="our-story-bottom"
        style={{ padding: isMobile ? "2rem 1rem" : "2rem", minHeight: isMobile ? "auto" : "800px" }}
      >
        <div
          className="our-story-background"
          style={{ backgroundImage: `url(${bottomImage})` }}
        />
        <div
          className="our-story-overlay"
          style={{ width: isMobile ? "95%" : "55%" }}
        />
        <Title
          level={3}
          className="our-story-capabilities-title"
          style={{
            fontSize: isMobile ? "28px" : "80px",
            textAlign: isMobile ? "center" : "left",
            marginBottom: isMobile ? "1.5rem" : "2rem",
          }}
        >
          Our Capabilities
        </Title>

        <div
          style={{
            padding: isMobile ? "1.2rem" : "2rem",
            width: isMobile ? "90%" : "50%",
            marginLeft: isMobile ? "0" : "auto",
            color: "#fff",
          }}
        >
          <Paragraph
            className="our-story-capabilities-text"
            style={{ fontSize: isMobile ? "14px" : "20px" }}
          >
            With years of expertise in leather manufacturing and export, we provide:{"\n\n"}
            Bespoke Product Development – Custom designs and branding solutions for clients.{"\n\n"}
            Scalable Production – A capacity to produce bulk orders without compromising on quality.{"\n\n"}
            Advanced Leather Treatment – Techniques including waterproofing, color fastness, and anti-scratch coatings.{"\n\n"}
            Sustainable & Ethical Sourcing – Working with responsible tanneries and suppliers.{"\n\n"}
            Global Logistics & Distribution – Seamless supply chain management for on-time delivery worldwide.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
