import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
     $email: String!
      $password: String!
      ) {
    addUser(
      username: $username
      email: $email
      password: $password
      ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $itemText: String!,
     $itemAuthor: String!, 
     $isCollected: Boolean
     ) {
    addItem(
      itemText: $itemText 
      itemAuthor: $itemAuthor
      isCollected: $isCollected
      ) {
      _id
      itemText
      itemAuthor
      isCollected
    }
  }
`;

export const REMOVE_ITEM = gql`
mutation removeItem(
  $itemId: ID!
   ) {
  removeItem(
    itemId: $itemId
    ) {
    _id
    itemText
    itemAuthor
    isCollected
  }
}
`;

// export const UPDATE_ITEM = gql`
// mutation updateItem(
//   $isCollected: Boolean
//   ) {
//     updateItem(
//       isCollected: $isCollected
//     ) {
//       _id 
//       itemText 
//       itemAuthor 
//       isCollected
//     }
//   }
// )
// `;