import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.mobile || !user.address) {
      alert("Please fill all fields");
      return;
    }
    login();
    alert("Login Successful");
    navigate('/');
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '500px' }}>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" value={user.mobile} onChange={(e) => setUser({ ...user, mobile: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Home Address</Form.Label>
          <Form.Control as="textarea" rows={2} value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
        </Form.Group>
        <Button type="submit" variant="primary">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
