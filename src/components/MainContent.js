import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';

const MainContent = () => {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    ratings: [],
    offers: [],
  });

  return (
    <Container fluid className="my-4">
      <Row>
        <Col md={3}>
          <ProductFilters filters={filters} setFilters={setFilters} />
        </Col>
        <Col md={9}>
          <ProductList filters={filters} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
