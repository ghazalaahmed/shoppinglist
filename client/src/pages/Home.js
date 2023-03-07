import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

const Home = () => {
  return (
    <div className="container-fluid beige px-0 pb-5">
      <div className="col-md-12 mb-4 playFair text-center">
        <h3>Never forget what to get</h3>
      </div>
      <div className="jumbotron">
        <img
          src="../images/cart.jpg"
          class="object-fit-cover"
          alt="shopping cart"
        ></img>
      </div>
      <div className="container">
        <div className="row">
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
    // <Card>
    // <Card.Header> Never forget what to get</Card.Header>
    // <Card.Body>
    // <Card.Title> Shopping List
    // </Card.Title>
    // <Card.Text>
    // <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Can't remember what you came for?</ListGroup.Item>
    //     <ListGroup.Item>Keep track of what to buy</ListGroup.Item>
    //     <ListGroup.Item>Always come home with what you need</ListGroup.Item>
    //   </ListGroup>

    // </Card.Text>
    // <Button variant="primary"> Signup Now</Button>
    // </Card.Body>
    // </Card>
    // <div className="card bg-white card-rounded w-50">
    //   This is the Homepage in client/src/pages/Home.js
    // </div>
  );
};

export default Home;
