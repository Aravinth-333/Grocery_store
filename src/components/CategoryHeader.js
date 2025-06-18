import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAppleAlt, FaWineBottle, FaCookieBite, FaLeaf } from 'react-icons/fa';

const categories = [
  { icon: <FaCookieBite />, label: 'Snacks' },
  { icon: <FaWineBottle />, label: 'Beverages' },
  { icon: <FaAppleAlt />, label: 'Fruits' },
  { icon: <FaLeaf />, label: 'Organic' },
];

const CategoryHeader = () => {
  return (
    <Container fluid className="bg-light py-3">
      <Row className="justify-content-around">
        {categories.map((cat, index) => (
          <Col key={index} xs="auto" className="text-center">
            <div style={{ fontSize: '1.5rem' }}>{cat.icon}</div>
            <div>{cat.label}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryHeader;
