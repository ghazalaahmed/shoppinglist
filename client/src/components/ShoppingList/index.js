import React from "react";
import { QUERY_ITEMS } from '../../utils/queries';
import { REMOVE_ITEM, UPDATE_ITEM } from '../../utils/mutations';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ShoppingList = () => {
    const { data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];

    // const [updateItem] = useMutation(UPDATE_ITEM, {
    //   update(cache, {data: { updateItem } }) {
    //     try {
    //       const { items } = cache.readQuery({ query: QUERY_ITEMS });

    //       cache.writeQuery({
    //         query: QUERY_ITEMS,
    //         data: { items: [...items.filter(item => item._id !== updateItem._id)] },
    //       });
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   }
    // });

    // const handleCheckbox = async (event, value) => {
    //   event.preventDefault();
    //   try {
    //     const { data } = await updateItem({
    //       variables: {
    //         itemId: value,
    //         isCollected: Boolean,
    //       }
    //     });
    //     console.log(data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    const [removeItem] = useMutation(REMOVE_ITEM, {
      update(cache, {data: { removeItem } }) {
        try {
          const { items } = cache.readQuery({ query: QUERY_ITEMS });
  
          cache.writeQuery({
            query: QUERY_ITEMS,
            data: { items: [...items.filter(item => item._id !== removeItem._id )] },
          });
        } catch (e) {
          console.error(e);
        }
      }
    });

    const handleFormSubmit = async (event, value) => {
      event.preventDefault();
      try {
        const { data } = await removeItem({
          variables: {
            itemId: value,
          }
        });
      } catch (err) {
        console.error(err);
      }
    };

  if (!items.length) {
    return <p>Nothing in your shopping list yet!</p>;
  }

  return (
    <>
    {items && items.map((item) => {
      return(
        <InputGroup className="mb-3">
        <InputGroup.Checkbox 
        // checked={item.isCollected} 
        // onClick={(e) => handleCheckbox(e, item._id)} 
        />
        <Form.Control value={item.itemText} disabled />
        <Button 
        value={item._id}
        variant="outline-secondary" 
        id="button-addon1"
        onClick={(e) => handleFormSubmit(e, item._id)}
        >
          Delete Item
        </Button>
      </InputGroup>
    )})}

    </>
  );
};

export default ShoppingList;
