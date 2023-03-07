import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from '../utils/mutations';
import { QUERY_ITEMS } from "../utils/queries";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ShoppingList from '../components/ShoppingList';

import Auth from "../utils/auth";

const List = () => {
  const [itemText, setItemText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addItem, { error }] = useMutation(ADD_ITEM, {
    update(cache, { data: { addItem } }) {
      try {
        const { items } = cache.readQuery({ query: QUERY_ITEMS });

        cache.writeQuery({
          query: QUERY_ITEMS,
          data: { items: [addItem, ...items] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, items: [...me.items, addItem] } },
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(itemText, Auth.getProfile().data.username);
      const { data } = await addItem({
        variables: {
          itemText,
          itemAuthor: Auth.getProfile().data.username,
          isCollected: false,
        },
      });

      setItemText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "itemText" && value.length <= 280) {
      setItemText(value);
      setCharacterCount(value.length);
    }
  };

  return (

    <div>
      {Auth.loggedIn() ? (
        <>
        <ShoppingList />
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
            <Button variant="outline-secondary" id="button-addon1">
              Delete Item
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="itemText"
              placeholder="Enter Shopping List Item"
              value={itemText}
              onChange={handleChange}
            />
            <Button
              variant="outline-secondary"
              id="button-addon1"
              type="submit"
              onClick={handleFormSubmit}
            >
              Add Item
            </Button>
            {error && (
              <div>
                {error.message}
              </div>
            )}
          </InputGroup>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>

  );
};

export default List;
