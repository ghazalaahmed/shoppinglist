import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="greige footer pb-5 pt-4">
      <Container>
        <Row className="justify-content-md-around">
          <Col md={3}>
            <h5 className="playFair">INFORMATION</h5>
            <hr className="hrFooter"></hr>
            <p className="playFair">
              This page will help you organize your crazy life. Sign up and
              start organizing a shopping list today!
            </p>
          </Col>
          <Col md={3}>
            <h5 className="playFair">QUICK LINKS</h5>
            <hr className="hrFooter"></hr>
            <Stack gap={2}>
              <Link className="fLink playFair" to="/">
                Home
              </Link>

              <Link className="fLink playFair" to="/List">
                My List
              </Link>
            </Stack>
          </Col>
          <Col md={3}>
            <h5 className="playFair mb-0 pb-0">CONTACT</h5>
            <hr className="hrFooter"></hr>
            <Stack gap={1}>
              <p className="playFair">Ben</p>
              <p className="playFair">Darren</p>
              <p className="playFair">Ghazala</p>
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
