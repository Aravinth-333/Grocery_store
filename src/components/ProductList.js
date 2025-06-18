import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const allItems = [
  { name: 'Organic Mango Juice', category: 'Beverages', brand: 'Organic Farm', rating: 4, offer: '10% Off', price: '₹120', img: 'https://via.placeholder.com/150' },
  { name: 'Baked Chips', category: 'Snacks', brand: 'Healthy Harvest', rating: 3, offer: 'Buy 1 Get 1', price: '₹80', img: 'https://via.placeholder.com/150' },
  { name: 'Green Tea Pack', category: 'Beverages', brand: 'Nature’s Best', rating: 4, offer: 'Free Delivery', price: '₹150', img: 'https://via.placeholder.com/150' },
  { name: 'Dry Figs', category: 'Dry Fruits', brand: 'Fresh Land', rating: 5, offer: '10% Off', price: '₹220', img: 'https://via.placeholder.com/150' },
  { name: 'Fresh Apple', category: 'Fruits', brand: 'Organic Farm', rating: 5, offer: 'Free Delivery', price: '₹60', img: 'https://via.placeholder.com/150' },
  { name: 'Salted Peanuts', category: 'Snacks', brand: 'Healthy Harvest', rating: 3, offer: '', price: '₹45', img: 'https://via.placeholder.com/150' },
];

const ProductList = ({ filters }) => {
  const { categories, brands, ratings, offers } = filters;

  
  const filterItems = (item) => {
    const ratingStr = `${item.rating}★ & above`;

    return (
      (categories.length === 0 || categories.includes(item.category)) &&
      (brands.length === 0 || brands.includes(item.brand)) &&
      (ratings.length === 0 || ratings.includes(ratingStr)) &&
      (offers.length === 0 || offers.includes(item.offer))
    );
  };

  const filteredItems = allItems.filter(filterItems);

  return (
    <>
      <h4 className="mb-3">Products</h4>
      <Row>
        {filteredItems.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <button className="btn btn-success">Add to Cart</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {filteredItems.length === 0 && <p>No products match the selected filters.</p>}
      </Row>
    </>
  );
};

export default ProductList;
