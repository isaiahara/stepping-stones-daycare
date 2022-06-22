import { Navbar, Nav } from "react-bootstrap";
import React, { Component } from "react";
import steppingStonesLogo from "./components/images/steppingStonesLogo.jpeg";

const Navigation = () => {
  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg" position="top">
        <img
          className="logo"
          src={steppingStonesLogo}
          alt="SteppingStones Day School logo"
        />
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/Infants">Infants</Nav.Link>
            <Nav.Link href="/Ones">One's</Nav.Link>
            <Nav.Link href="/Twos">Two's</Nav.Link>
            <Nav.Link href="/Threes">Pre K Three</Nav.Link>
            <Nav.Link href="/FourFive">Pre K 4/5</Nav.Link>
            <Nav.Link href="/schoolKids">School Kids</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export class NavigationBar extends Component {
  render() {
    return (
      <div> <Navigation /> </div>
    );
  }
}
