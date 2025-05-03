import React from "react";
import { Row, Col } from "antd";
import {
    MailOutlined,
    PhoneOutlined,
    FacebookFilled,
    LinkedinFilled,
} from "@ant-design/icons";
import logo from "../assets/logo.png";
import iso from "../assets/iso.png";


const Footer = () => {
    return (
        <div className="footer-container">
            {/* Content Container */}
            <div className="footer-content">
                <Row gutter={[24, 24]} justify="space-between">
                    {/* Logo & Contact Info */}
                    <Col xs={24} md={8}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ maxWidth: "150px", marginBottom: "1rem" }}
                        />
                        <div>
                            <img
                                src={iso}
                                alt="ISO Certified"
                                style={{ width: "60px", marginBottom: "1rem" }}
                            />
                        </div>
                        <p className="footer-contact">
                            <MailOutlined style={{ marginRight: 8 }} />
                            inquiry.sagenhide@gmail.com
                        </p>
                        <p className="footer-contact">
                            <PhoneOutlined style={{ marginRight: 8 }} />
                            +91 863 736 0492 / +91 891 006 9765
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col xs={24} md={10}>
                        <h3 className="footer-quick-links-title">
                            Quick Links
                        </h3>
                        <Row>
                            <Col span={12}>
                                <ul className="footer-quick-links-list">
                                    {["Home", "Our Story", "Products", "Our Standards", "Contact Us"].map((item) => (
                                        <li
                                            key={item}
                                            className="footer-quick-links-item"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col span={12}>
                                <ul className="footer-quick-links-list">
                                    {["Privacy Policy", "Refund & Purchase", "Terms & Conditions", "Others"].map((item) => (
                                        <li
                                            key={item}
                                            className="footer-quick-links-item"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    {/* Follow Us */}
                    <Col xs={24} md={6}>
                        <h3 className="footer-quick-links-title">Follow us</h3>
                        <div className="footer-social-media">
                            <FacebookFilled className="icon" />
                            <LinkedinFilled className="icon" />
                        </div>
                        <button className="footer-button">Download Now</button>
                    </Col>
                </Row>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <p style={{ textAlign: "center", margin: 0 }}>
                    © {new Date().getFullYear()} Sagenhide. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
