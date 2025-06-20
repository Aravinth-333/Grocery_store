import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Table, Button } from 'react-bootstrap';

const ConfirmOrder = () => {
  const { cart, getTotal } = useContext(CartContext);

  return (
    <>
      <h3>Your Cart</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Item</th><th>Qty</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>₹{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ₹{getTotal()}</h4>
      <Button variant="success">Confirm Order</Button>
    </>
  );
};

export default ConfirmOrder;
