import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Header>Contact</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Benjamin</ListGroup.Item>
        <ListGroup.Item>Darren</ListGroup.Item>
        <ListGroup.Item>Ghazala</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Footer;