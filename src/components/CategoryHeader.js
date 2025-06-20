
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAppleAlt, FaWineBottle, FaCookieBite, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  { icon: <FaCookieBite />, label: 'Snacks', path: '/snacks' },
  { icon: <FaWineBottle />, label: 'Beverages', path: '/beverages' },
  { icon: <FaAppleAlt />, label: 'Fruits', path: '/fruits' },
  { icon: <FaLeaf />, label: 'Organic', path: '/organic' },
];

const CategoryHeader = () => {
  return (
    <Container fluid className="bg-light py-3">
      <Row className="justify-content-around">
        {categories.map((cat, index) => (
          <Col key={index} xs="auto" className="text-center">
            <Link to={cat.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontSize: '1.5rem' }}>{cat.icon}</div>
              <div>{cat.label}</div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryHeader;
