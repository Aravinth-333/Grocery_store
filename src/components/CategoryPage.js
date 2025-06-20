import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

const CategoryPage = () => {
  const { categoryName } = useParams();


  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();

  const filters = {
    categories: [formattedCategory], 
    brands: [],
    ratings: [],
    offers: []
  };

  return (
    <Container className="mt-4">
      <h2>{formattedCategory} Products</h2>
      <ProductList filters={filters} />
    </Container>
  );
};

export default CategoryPage;
