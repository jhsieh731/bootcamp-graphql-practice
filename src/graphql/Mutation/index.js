const merge = require('lodash.merge')
const addAuthor = require('./addAuthor')
const addPublisher = require('./addPublisher')
const addBook = require('./addBook')
const changeAddress = require('./changeAddress')

const resolvers = [addAuthor, addPublisher, addBook, changeAddress]

module.exports = merge(...resolvers)
