import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';



const Home = () => {
  
  return (
    <Card> 
    <Card.Header> Never forget what to get</Card.Header>
    <Card.Body> 
    <Card.Title> Shopping List
    </Card.Title>
    <Card.Text> 
    <ListGroup className="list-group-flush">
        <ListGroup.Item>Can't remember what you came for?</ListGroup.Item>
        <ListGroup.Item>Keep track of what to buy</ListGroup.Item>
        <ListGroup.Item>Always come home with what you need</ListGroup.Item>
      </ListGroup>
      
    </Card.Text>
    <Button variant="primary"> Signup Now</Button>
    </Card.Body>
    </Card>
    // <div className="card bg-white card-rounded w-50">
    //   This is the Homepage in client/src/pages/Home.js
    // </div>
  );
};

export default Home;