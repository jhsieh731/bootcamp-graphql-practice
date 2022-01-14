const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authors: [Author!]!
    getAuthor(authorId: ID!): Author!  
    books: [Book!]! 
    getBook(bookId: ID!): Book!
    publishers: [Publisher!]!
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author!
    addPublisher(input: AddPublisherInput!): Publisher!
    addBook(input: AddBookInput!): Book!
    changeAddress(input: ChangeAddress!): Address!
  }

  input AddAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String 
    numBooksPublished: Int!
  }

  input AddPublisherInput {
    company: String! 
    phoneNumber: String!
    numBooksPublished: Int 
    }

  input AddBookInput {
    title: String!
    language: String!
    numPages: Int!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
  }

  input ChangeAddress {
    id: ID!
    street: String!
    city: String!
    state: String! 
    zip: String!
  }

  type Author {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    age: Int
    numBooksPublished: Int!
    address: [Address!]
    books: [Book!]
  }
  
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    bestseller: Boolean
    author: [Author!]
    publisher: [Publisher!]  
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int!
    address: [Address!]
    books: [Book!]!
    authors: [Author!]!
  }
`
