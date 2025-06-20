
import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

const Snacks = () => {
  const filters = {
    categories: ['Snacks'],
    brands: [],
    ratings: [],
    offers: []
  };

  return (
    <Container className="mt-4">
      <h2>Snacks</h2>
      <ProductList filters={filters} />
    </Container>
  );
};

export default Snacks;
