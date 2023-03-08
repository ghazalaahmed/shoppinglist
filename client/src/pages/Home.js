import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row, Container } from "react-bootstrap";


const Home = () => {
  return (
    <div className="container-fluid beige px-0 pb-5">
      <div className="col-md-12  displayBox text-center">
        <h2 className="never playFair">Never Forget <br></br> What To Get</h2>
      </div>
      <Container className=" p-0 mb-5">
        <Row className="justify-content-center ">
          <Col lg="8" className="jumbotron"></Col>
        </Row>
      </Container>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="cardPic1">
                
              </div>
              <div className="card-body">
                <p>No more multiple trips</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="cardPic2">
                
              </div>
              <div className="card-body">
                <p>Keep track on what to buy</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="cardPic3">
                
              </div>
              <div className="card-body">
                <p>Always come home with what you need</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-5 text-center">
            <button className="button2">
              <Link className="button2Link" to="/signup">
                Sign Up Now!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
