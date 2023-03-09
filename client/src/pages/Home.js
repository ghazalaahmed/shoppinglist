import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row, Container, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="beige p-0 pb-5">
      <Container fluid="md" >
        <Col className="displayBox text-center">
          <h2 className="giant playFair">
            <i>Never</i> Forget <br></br> <i>-</i>What <i>To</i> Get
          </h2>
        </Col>
        <Row xs={1} md={2} className="my-5">
          <Col className="p-0 shadow-lg">
            <div className="cardPic0 "></div>
          </Col>
          <Col className="p-0 shadow-lg">
            <Card>
              <Card.Body className="text-center">
                <Card.Text>Catalog your items</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} className="my-5">
          <Col md={{ order: "last" }} className="p-0 shadow-lg">
            <div className="cardPic1 "></div>
          </Col>
          <Col md={{ order: "first" }} className="p-0 shadow-lg">
            <Card>
              <Card.Body className="text-center">
                <Card.Text>No more multiple trips</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} className="my-5">
          <Col className="p-0 shadow-lg">
            <div className="cardPic2 "></div>
          </Col>
          <Col className="p-0 shadow-lg">
            <Card>
              <Card.Body className="text-center">
                <Card.Text>Keep track on what to buy</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} className="my-5">
          <Col md={{ order: "last" }} className="p-0 shadow-lg">
            <div className="cardPic3 "></div>
          </Col>
          <Col md={{ order: "first" }} className="p-0 shadow-lg">
            <Card>
              <Card.Body className="text-center">
                <Card.Text>Always come home with what you need</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="col-md-12 my-5 text-center">
          <button className="button2">
            <Link className="button2Link" to="/signup">
              Sign Up Now!
            </Link>
          </button>
        </div>
      </Container>
    </Container>
  );
};

export default Home;
