import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from 'D:/ReactPr/frontdiploma/logoGC.png'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Select from "./HotelSelect";


function Header() {
  return (
      <Navbar expand="md" className="navbar-dark" bg="dark">
        <Container>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Navbar.Brand>
          
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Программа для анализа
          
          </Navbar.Brand>
        </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
            </Nav>
            <Navbar.Text>
              
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
} 

export default Header;


