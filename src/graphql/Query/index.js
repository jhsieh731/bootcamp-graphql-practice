const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Authors = require('./Authors')
const Books = require('./Books')
const Publishers = require('./Publishers')

const resolvers = [Welcome, Authors, Books, Publishers]

module.exports = merge(...resolvers)
