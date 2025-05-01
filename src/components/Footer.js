import React from "react";
import { Row, Col, Button } from "antd"; // Ensure Ant Design is installed
import {
    MailOutlined,
    PhoneOutlined,
    FacebookFilled,
    LinkedinFilled,
} from "@ant-design/icons";
import logo from "../assets/logo.png"; // Ensure this path is correct
import iso from "../assets/iso.png";   // Ensure this path is correct

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#e7dfd1" }}>
            {/* Content Container with Margin */}
            <div style={{ margin: "0 auto", maxWidth: "1350px", padding: "1rem" }}>
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
                        <p style={{ fontFamily: "Montserrat", fontSize: "14px", color: "#1E1E1E" }}>
                            <MailOutlined style={{ marginRight: 8 }} />
                            inquiry.sagenhide@gmail.com
                        </p>
                        <p style={{ fontFamily: "Montserrat", fontSize: "14px", color: "#1E1E1E" }}>
                            <PhoneOutlined style={{ marginRight: 8 }} />
                            +91 863 736 0492 / +91 891 006 9765
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col xs={24} md={10}>
                        <h3
                            style={{
                                color: "#A46428",
                                fontFamily: "Roboto Serif",
                                fontSize: "20px",
                                fontWeight: 500,
                                marginBottom: "1rem",
                            }}
                        >
                            Quick Links
                        </h3>
                        <Row>
                            <Col span={12}>
                                <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                                    {["Home", "Our Story", "Products", "Our Standards", "Contact Us"].map((item) => (
                                        <li
                                            key={item}
                                            style={{
                                                fontFamily: "Montserrat",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                lineHeight: "28px",
                                                color: "#1E1E1E",
                                            }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col span={12}>
                                <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                                    {["Privacy Policy", "Refund & Purchase", "Terms & Conditions", "Others"].map((item) => (
                                        <li
                                            key={item}
                                            style={{
                                                fontFamily: "Montserrat",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                lineHeight: "28px",
                                                color: "#1E1E1E",
                                            }}
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
                        <h3
                            style={{
                                color: "#A46428",
                                fontFamily: "Roboto Serif",
                                fontSize: "20px",
                                fontWeight: 500,
                                marginBottom: "1rem",
                            }}
                        >
                            Follow us
                        </h3>
                        <div style={{ fontSize: "20px", marginBottom: "1rem" }}>
                            <FacebookFilled style={{ marginRight: "1rem" }} />
                            <LinkedinFilled />
                        </div>
                        <Button
                            style={{
                                border: "1px solid #000",
                                backgroundColor: "#f5f5f5",
                                color: "#000",
                                fontFamily: "Montserrat",
                                fontSize: "14px",
                                padding: "0.3rem 1rem",
                                height: "auto",
                            }}
                        >
                            Download Now
                        </Button>
                    </Col>
                </Row>
            </div>

            {/* Bottom Bar */}
            <div
                style={{
                    marginTop: "2rem",
                    backgroundColor: "#A46428",
                    textAlign: "center",
                    padding: "0.8rem",
                    fontSize: "12px",
                    color: "#fff",
                    fontFamily: "Montserrat",
                }}
            >
                Lorem ipsum dolor sit amet, conse tetur adipis icing
            </div>
        </div>
    );
};

export default Footer;
