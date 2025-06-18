import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState('');
  const [pickupDetails, setPickupDetails] = useState({ date: '', time: '' });

  const handleSubmit = () => {
    if (deliveryOption === 'pickup' && (!pickupDetails.date || !pickupDetails.time)) {
      alert('Please select date and time for pickup.');
      return;
    }
    alert(`Order placed successfully via ${deliveryOption}!`);
  };

  return (
    <Card className="p-4 mt-4">
      <h5>Choose Delivery Option</h5>
      <Form>
        <Form.Check
          type="radio"
          label="Home Delivery"
          value="delivery"
          name="deliveryOption"
          onChange={(e) => setDeliveryOption(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="Store Pickup"
          value="pickup"
          name="deliveryOption"
          onChange={(e) => setDeliveryOption(e.target.value)}
        />

        {deliveryOption === 'pickup' && (
          <>
            <Form.Group className="mt-3">
              <Form.Label>Pickup Date</Form.Label>
              <Form.Control
                type="date"
                value={pickupDetails.date}
                onChange={(e) =>
                  setPickupDetails({ ...pickupDetails, date: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Pickup Time</Form.Label>
              <Form.Control
                type="time"
                value={pickupDetails.time}
                onChange={(e) =>
                  setPickupDetails({ ...pickupDetails, time: e.target.value })
                }
              />
            </Form.Group>
          </>
        )}

        <Button className="mt-4" onClick={handleSubmit}>
          Place Order
        </Button>
      </Form>
    </Card>
  );
};

export default Checkout;
