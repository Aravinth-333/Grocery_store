
import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

const Beverages = () => {
  const filters = {
    categories: ['Beverages'],
    brands: [],
    ratings: [],
    offers: []
  };

  return (
    <Container className="mt-4">
      <h2>Beverages</h2>
      <ProductList filters={filters} />
    </Container>
  );
};

export default Beverages;
