
import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

const Fruits = () => {
  const filters = {
    categories: ['Fruits'],
    brands: [],
    ratings: [],
    offers: []
  };

  return (
    <Container className="mt-4">
      <h2>Fruits</h2>
      <ProductList filters={filters} />
    </Container>
  );
};

export default Fruits;
