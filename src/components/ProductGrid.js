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
    <div className="product-grid-container">
      <h2 className="product-grid-heading">Products</h2>

      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col xs={12} sm={12} md={8} lg={6} key={index}>
            <div className="product-tile">
              <div
                className="product-image-container"
                style={{ backgroundImage: `url(${product.img})` }}
              >
                <div className="product-overlay">
                  <div className="product-title">
                    {product.title}
                    <br />
                    <span className="product-subtitle">{product.subtitle}</span>
                  </div>
                  <div className="product-arrow">→</div>
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
