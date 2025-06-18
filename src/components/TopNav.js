import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Organic Grocery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Centered Search Bar */}
          <Form className="d-flex mx-auto my-2 my-lg-0" style={{ width: '50%' }}>
            <FormControl type="search" placeholder="Search for groceries..." className="me-2" />
          </Form>

          {/* Right-side Links */}
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Cart</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
