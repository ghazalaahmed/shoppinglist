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
          <Col md="8" className="jumbotron"></Col>
        </Row>
      </Container>
      <div className="container pt-5">
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
              <img src="" className="w-100 cardPic" alt=""></img>
              <div className="card-body">
                <h1>test</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg">
              <img src="" className="w-100 cardPic" alt=""></img>
              <div className="card-body">
                <h1>test</h1>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-4 text-center">
            <button>
              <Link className="link" to="/signup">
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
