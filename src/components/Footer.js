import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h6>About Us</h6>
            <p>We deliver fresh and organic grocery items straight to your door.</p>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#login" className="text-light">Login</a></li>
              <li><a href="#cart" className="text-light">Cart</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: support@organicstore.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">© 2025 Organic Grocery Store. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
