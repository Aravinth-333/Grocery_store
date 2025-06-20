import React, { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; 

const allItems = [
  { id: 1, name: 'Organic Mango Juice', category: 'Beverages', brand: 'Organic Farm', rating: 4, offer: '10% Off', price: 120, img: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Baked Chips', category: 'Snacks', brand: 'Healthy Harvest', rating: 3, offer: 'Buy 1 Get 1', price: 80, img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Green Tea Pack', category: 'Beverages', brand: 'Nature’s Best', rating: 4, offer: 'Free Delivery', price: 150, img: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Dry Figs', category: 'Dry Fruits', brand: 'Fresh Land', rating: 5, offer: '10% Off', price: 220, img: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Fresh Apple', category: 'Fruits', brand: 'Organic Farm', rating: 5, offer: 'Free Delivery', price: 60, img: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Salted Peanuts', category: 'Snacks', brand: 'Healthy Harvest', rating: 3, offer: '', price: 45, img: 'https://via.placeholder.com/150' },
];

const ProductList = ({ filters }) => {
  const { addToCart } = useContext(CartContext); 

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
        {filteredItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price}</Card.Text>
                <Button variant="success" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
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
