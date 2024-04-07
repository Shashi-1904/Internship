import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  let today = new Date();
  return (
    <footer className="bg-dark text-light py-3 mt-lg-5" style={{ boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Container>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <p className="mb-0">
              {" "}
              &copy; {today.getFullYear()}{" "}
              <a href="https://orianatechsolutions.com" target="_blank" style={{ color: "brown", textDecoration: "none" }}>
                OrianaTech Solutions Private Limited
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
