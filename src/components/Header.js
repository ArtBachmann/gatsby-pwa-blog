import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = ({ title }) => (
  <Navbar bg="light" expand="lg">
    <Link to='/'>
      <Navbar.Brand>Gatsby-Bootstrap</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to='/about/'>
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to='/contact/'>
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
