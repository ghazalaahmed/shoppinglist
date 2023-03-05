import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";
const Footer = () => {
  return (
    <section className="greige footer py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h6>Information</h6>
            <hr></hr>
            <p>
              This page will help you organize your crazy life. Sign up and start organizing a shopping list today!
            </p>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <hr></hr>
            <div>
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="link" to="/List">
                My List
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <h6>Contact</h6>
            <hr></hr>
            <Stack gap={3}>
              <p>Ben</p>
              <p>Darren</p>
              <p>Ghazala</p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>

    //     <Card style={{ width: '18rem' }}>
    //   <Card.Header>Contact</Card.Header>
    //   <ListGroup variant="flush">
    //     <ListGroup.Item>Benjamin</ListGroup.Item>
    //     <ListGroup.Item>Darren</ListGroup.Item>
    //     <ListGroup.Item>Ghazala</ListGroup.Item>
    //   </ListGroup>
    // </Card>
  );
};

export default Footer;
