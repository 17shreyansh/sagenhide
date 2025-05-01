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
    <section style={{ width: "100%", overflow: "hidden" }}>
      {/* Top Section */}
      <div style={{ backgroundColor: "#f9f6f2" }}>
        <Row gutter={0} align="stretch">
          {/* Text Column */}
          <Col xs={24} md={12} style={{ padding: isMobile ? "1.5rem" : "3rem" }}>
            <Title
              level={2}
              style={{
                fontSize: isMobile ? "36px" : "80px",
                fontFamily: "Montserrat, sans-serif",
                color: "#4F3114",
                marginBottom: "1rem",
              }}
            >
              Our Story
            </Title>
            <Title
              level={3}
              style={{
                fontSize: isMobile ? "18px" : "28px",
                fontWeight: "normal",
                fontFamily: "Montserrat, sans-serif",
                marginBottom: "1.5rem",
              }}
            >
              The Story Behind Our Brand
            </Title>
            <Paragraph
              style={{
                fontSize: isMobile ? "14px" : "18px",
                lineHeight: "1.8",
                color: "#333",
              }}
            >
              Founded with a passion for fine craftsmanship, our journey in the leather industry began with a vision to bring premium Indian leather goods to global markets. From a humble beginning as a small workshop, we have grown into a globally recognized brand, known for our commitment to excellence and innovation.
            </Paragraph>
          </Col>

          {/* Image Column */}
          <Col xs={24} md={12}>
            <div
              style={{
                backgroundImage: `url(${topImage})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                width: "100%",
                height: "100%",
                minHeight: isMobile ? "250px" : "600px",
              }}
            />
          </Col>
        </Row>
      </div>

      {/* Bottom Section */}
      {/* Bottom Section */}
<div
  style={{
    position: "relative",
    width: "100%",
    minHeight: isMobile ? "auto" : "800px",
    padding: isMobile ? "2rem 1rem" : "2rem",
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* Background Image */}
  <div
    style={{
      backgroundImage: `url(${bottomImage})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -2,
      filter: "brightness(0.8)",
    }}
  />

  {/* Overlay full vertical color block */}
  <div
    style={{
      background: "rgba(164, 100, 40, 0.40)",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: isMobile ? "95%" : "55%",
      zIndex: -1,
    }}
  />

  {/* Heading */}
  <Title
    level={3}
    style={{
      fontSize: isMobile ? "28px" : "80px",
      fontFamily: "Montserrat",
      color: "#4F3114",
      textAlign: isMobile ? "center" : "left",
      marginBottom: isMobile ? "1.5rem" : "2rem",
    }}
  >
    Our Capabilities
  </Title>

  {/* Text on top of color block */}
  <div
    style={{
      padding: isMobile ? "1.2rem" : "2rem",
      width: isMobile ? "100%" : "50%",
      marginLeft: isMobile ? "0" : "auto",
      color: "#fff",
    }}
  >
    <Paragraph
      style={{
        fontSize: isMobile ? "14px" : "20px",
        color: "#fff",
        lineHeight: "1.6",
        whiteSpace: "pre-line",
        margin: 0,
      }}
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
