const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book] 
    bookCount: Int
  }

  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }  

  type Query {
    users: [User] 
    books: [Book]
  }

  type Mutations {
    getUser(username: String!, email: String!, _id: ID): User
    addUser(username: String!, email: String!, password: String!): User
    loginUser(username: String!, email: String!, password: String!): User
    saveBook(_id: ID!, bookId: String!): User // todo ? How to modify book nested model with graphql
    deleteBook(_id: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;
