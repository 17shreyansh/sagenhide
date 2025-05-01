import React from "react";
import { Row, Col } from "antd";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/infra2.jpg";

const products = [
  { img: p1, title: "Fashion Bags", subtitle: "& Accessories" },
  { img: p2, title: "Laptop Bags", subtitle: "& Briefcases" },
  { img: p3, title: "Be-spoke", subtitle: "leather items" },
  { img: p4, title: "Corporate Gifting", subtitle: "& Merchandise" },
];

const ProductGrid = () => {
  return (
    <div style={{ padding: "2rem 2rem" }}>
      <h2
        style={{
            fontSize: "60px",
          fontWeight: 500,
          textAlign: "right",
          margin: "2rem 1rem 1rem",
          fontFamily: "Montserrat",
        }}
      >
        Products
      </h2>

      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col xs={12} sm={12} md={8} lg={6} key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "90%", // Slightly smaller square
                overflow: "hidden",
                borderRadius: "4px",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(188, 144, 97, 0.9)",
                    color: "white",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: "600" }}>
                    {product.title}
                    <br />
                    <span style={{ fontWeight: "400", fontSize: "12px" }}>
                      {product.subtitle}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      border: "2px solid white",
                      borderRadius: "50%",
                      width: "26px",
                      height: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
