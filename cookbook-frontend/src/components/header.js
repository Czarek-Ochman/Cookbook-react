import React, { Component } from "react";
import "../styles/header.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

class Header extends Component {
  render() {
    return (
      <Container fluid className="header-box">
        <Row>
          <Col><h1 className="header-title">Cookbook</h1></Col>
          <Col className="text-center mt-4"><h2>Witaj w naszej kuchni!</h2></Col>
          <Col><a href="https://www.w3schools.com" className="login"><Button className="text-right" variant="light">Light</Button></a></Col>
        </Row>
      </Container>
    );
  }
}

export default Header;

// <div class="column"><h1 className="header-title">Cookbook</h1></div>
// <div class="column">Witaj w naszej kuchni!</div>
// <div class="column"><a href="https://www.w3schools.com" className="login">Visit W3Schools.com!</a></div>
