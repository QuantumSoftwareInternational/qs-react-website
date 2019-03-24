import React from 'react';
import './Navigation.css';
import {
  Button,
  NavItem,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

const Navigation = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Quantum Software</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav color="default-color">
          <Nav.Link className="test" eventKey={1} href="#deets">
            About
          </Nav.Link>
          <Nav.Link className="test" eventKey={2} href="#memes">
            Services
          </Nav.Link>
          <Nav.Link className="test" eventKey={3} href="#memes">
            Portfolio
          </Nav.Link>
          <Nav.Link className="test" eventKey={4} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
