import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link } from "react-router-dom";
const Header = ()=>{
  const Logout = ()=>{};
 return(
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bus Booking</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/Login"} class="nav-link">Login</Link>
            <Link to={"/Register"} class="nav-link">Register</Link>
            <Link to={"/"} class="nav-link">Manage Appointments</Link>
            <Link to={"/"} class="nav-link">Manage Travellers</Link>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link onClick={(Logout)}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
 )
};



export default Header