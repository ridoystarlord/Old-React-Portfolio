import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Mehedi Hasan Ridoy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="text-white" href="#about-me">
              About Me
            </Nav.Link>
            <Nav.Link className="text-white" href="#contact-me">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
