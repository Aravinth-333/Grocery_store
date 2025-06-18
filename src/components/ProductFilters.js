import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const ProductFilters = ({ filters, setFilters }) => {
  const [categorySearch, setCategorySearch] = useState('');

  const categories = ['Snacks', 'Beverages', 'Fruits', 'Vegetables', 'Dry Fruits'];
  const brands = ['Organic Farm', 'Nature’s Best', 'Healthy Harvest', 'Fresh Land'];
  const ratings = ['4★ & above', '3★ & above', '2★ & above'];
  const offers = ['Buy 1 Get 1', '10% Off', 'Free Delivery'];

  const handleChange = (type, value) => {
    const current = filters[type];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    setFilters({ ...filters, [type]: updated });
  };

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <Card className="p-3 mb-3">
      <h5 className="mb-3">Filter</h5>

      {/* Category with Search */}
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search Category"
          value={categorySearch}
          onChange={(e) => setCategorySearch(e.target.value)}
          className="mb-2"
        />
        {filteredCategories.map((cat, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={cat}
            checked={filters.categories.includes(cat)}
            onChange={() => handleChange('categories', cat)}
          />
        ))}
      </Form.Group>

      {/* Brand */}
      <Form.Group className="mb-3">
        <Form.Label>Brand</Form.Label>
        {brands.map((brand, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={brand}
            checked={filters.brands.includes(brand)}
            onChange={() => handleChange('brands', brand)}
          />
        ))}
      </Form.Group>

      {/* Ratings */}
      <Form.Group className="mb-3">
        <Form.Label>Customer Ratings</Form.Label>
        {ratings.map((rate, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={rate}
            checked={filters.ratings.includes(rate)}
            onChange={() => handleChange('ratings', rate)}
          />
        ))}
      </Form.Group>

      {/* Offers */}
      <Form.Group className="mb-3">
        <Form.Label>Offers</Form.Label>
        {offers.map((offer, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={offer}
            checked={filters.offers.includes(offer)}
            onChange={() => handleChange('offers', offer)}
          />
        ))}
      </Form.Group>
    </Card>
  );
};

export default ProductFilters;
