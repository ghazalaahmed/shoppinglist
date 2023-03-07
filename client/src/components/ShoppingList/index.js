import React from "react";
import { QUERY_ITEMS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

const ShoppingList = () => {
    const { data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];
//   if (!items.length) {
//     return <p>Nothing in your shopping list yet!</p>;
//   }
console.log(items);
  return (
    <>
    <p>This is a shopping list return</p>
    </>
  );
//   return (
//     <>
//     {items && items.map((item) => (
//         <div key={item._id}>{item.itemText}</div>
//     ))}
//       <InputGroup className="mb-3">
//         <InputGroup.Checkbox />
//         <Form.Control placeholder="Spinach" disabled />
//         <Button variant="outline-secondary" id="button-addon1">
//           Delete Item
//         </Button>
//       </InputGroup>
//     </>
//   );
};

export default ShoppingList;
