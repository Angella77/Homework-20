import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function NavTabs() {

  return (
<>
  <Navbar expand = 'md' bg="dark" variant="dark" sticky='top' >
    <Navbar.Brand as={Link} to="/" >Angella Jean-Louis</Navbar.Brand>
    <Nav className="d-flex justify-content-center">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link}  to="/portfolio">Portfolio</Nav.Link>
      <NavDropdown title="Contact" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><a href="tel:1-317-258-0021">Phone:  (561) 800-9947</a></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><a href="mailto:angiejeanlewis@gmail.com">E-mail:  angiejeanlewis@gmail.com</a></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
</>
  );
}

export default NavTabs;