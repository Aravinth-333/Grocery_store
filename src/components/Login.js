import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <Container className="text-center mt-5">
      <h3>Login Required</h3>
      <Button onClick={handleLogin} variant="primary" className="mt-3">
        Click to Login
      </Button>
    </Container>
  );
};

export default Login;
