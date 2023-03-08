import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      items {
        _id
        itemText
        itemAuthor
        isCollected
      }
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
  `;

  export const QUERY_ITEMS = gql`
  query getItems {
    items {
        _id 
        itemText
        itemAuthor
        isCollected
    }
  }
  `;

  export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      items {
        _id
        itemText
        itemAuthor
        isCollected
      }
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;