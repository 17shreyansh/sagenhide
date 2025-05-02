import React from "react";
import { Row, Col, Typography, Button, Grid } from "antd";
import infraLeft from "../assets/infra1.jpg";
import trulyPouch from "../assets/infra2.jpg";
import modelBag from "../assets/infra3.jpg";

const { Paragraph } = Typography;
const { useBreakpoint } = Grid;

const OurInfrastructure = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Montserrat', sans-serif",
        color: "#1E1E1E",
        overflow: "hidden",
      }}
    >
      {/* Page Title */}
      <h2
        style={{
          fontSize: isMobile ? "36px" : "60px",
          fontWeight: 500,
          textAlign: "left",
          margin: isMobile ? "1rem" : "2rem 3rem 1rem",
          fontFamily: "Montserrat",
        }}
      >
        Our Infrastructure
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          minHeight: isMobile ? "auto" : "80vh",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${infraLeft})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: isMobile ? "400px" : "60vh",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: isMobile ? "1rem" : 0,
          }}
        >
          <div
            style={{
              color: "#FFF",
              fontFamily: "'Lora', serif",
              fontSize: isMobile ? "16px" : "24px",
              fontWeight: 500,
              lineHeight: "normal",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            <p>
              State-of-the-Art Manufacturing Facilities – Equipped with cutting-edge machinery for precision craftsmanship.
            </p>
            <p>
              Skilled Artisan Workforce – Craftsmen trained in both traditional and modern techniques to produce high-quality leather goods.
            </p>
            <p>
              Sustainable Leather Processing Units – Using eco-friendly tanning and finishing processes to minimize environmental impact.
            </p>
            <p>
              Dedicated R&D Department – Continuously innovating in textures, styles, and functionality to meet evolving fashion trends and corporate demands.
            </p>

            <Button
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                color: "white",
                fontWeight: "bold",
                padding: "0 1rem",
                marginTop: "1rem",
              }}
            >
              Download Now
            </Button>
          </div>
        </div>
      </div>

      {/* Truly Clean Materials Section */}
      <div style={{ position: "relative", width: "100%", height: isMobile ? "40vh" : "80vh", overflow: "hidden" }}>
        <img
          src={trulyPouch}
          alt="Truly Clean Background"
          style={{
            width: isMobile ? "200px" : "800px",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            right: isMobile ? "0" : "0",
            left: isMobile ? "auto" : "auto",
            bottom: isMobile ? "10%" : "20%",
          }}
        />

        {/* Overlay Text - Truly Clean */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "60px" : "250px",
              fontWeight: 200,
              fontFamily: "The Seasons",
              color: "#1E1E1E",
              margin: isMobile ? "10px" : 60,
              lineHeight: "1",
            }}
          >
            100%
          </h1>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "45px" : "150px",
              fontWeight: 200,
              fontFamily: "The Seasons, serif",
              color: "#1E1E1E",
              margin: isMobile ? "10px" : "10px 200px",
              lineHeight: "1",
              textAlign: "center",
            }}
          >
            Original Leather
          </h1>
        </div>
      </div>

      {/* Bottom Text + Model Image */}
      <h2
        style={{
          fontSize: isMobile ? "36px" : "60px",
          fontWeight: 500,
          textAlign: "left",
          margin: isMobile ? "1rem" : "2rem 3rem 1rem",
          fontFamily: "Montserrat",
          color: "#4F3114",
        }}
      >
        Varieties of Leather
      </h2>

      <div
        style={{
          backgroundColor: "#D9C3AE",
          padding: isMobile ? "1rem" : "2rem 0rem 0rem 1rem",
        }}
      >
        <Row gutter={[24, 24]} align="middle" justify="space-between" style={{ padding: "0 0" }}>
          <Col xs={24} md={10}>
            <Paragraph
              style={{
                color: "#1E1E1E",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "14px" : "18px",
                fontWeight: 300,
                lineHeight: "1.5",
                margin: isMobile ? "0 1rem" : "0 10px 0 50px",
                textAlign: "left",
              }}
            >
              We specialize in a diverse range of premium leathers, sourced responsibly and processed using sustainable techniques:
              <br /><br />
              <strong>Full-Grain Leather</strong> – The highest quality with natural grains, offering exceptional durability and beauty.
              <br /><br />
              <strong>Top-Grain Leather</strong> – A refined, polished leather known for its softness and longevity.
              <br /><br />
              <strong>Genuine Leather</strong> – A cost-effective yet sturdy option for versatile applications.
              <br /><br />
              <strong>Vegetable-Tanned Leather</strong> – Naturally processed, environmentally friendly leather that ages beautifully.
              <br /><br />
              <strong>Exotic Leathers</strong> – Premium finishes including croc-embossed, suede, and nubuck for luxury appeal.
            </Paragraph>
          </Col>

          {/* Right Image */}
          <Col xs={24} md={13}>
            <img
              src={modelBag}
              alt="Model with bag"
              style={{
                width: isMobile ? "100%" : "60%",
                display: "block",
                marginLeft: "auto",
                objectFit: "contain",
              }}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurInfrastructure;
