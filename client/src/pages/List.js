import React from "react";
import { ADD_ITEM } from '../utils/mutations';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const List = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox />
        <Form.Control placeholder="Spinach" disabled />
        <Button variant="outline-secondary" id="button-addon1" onClick={() => {
        alert('WARNING: Removing!!r')}}>

          Delete Item
        </Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox />
        <Form.Control placeholder="Peanut Butter" disabled />
        <Button variant="outline-secondary" id="button-addon1">
          Delete Item
        </Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox />
        <Form.Control placeholder="Bacon" disabled />
        <Button variant="outline-secondary" id="button-addon2">
          Delete Item
        </Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control />
        <Button variant="outline-secondary" id="button-addon3">
          Add Item
        </Button>
      </InputGroup>
    </>
  );
};

export default List;
