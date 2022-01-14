const Author = require('../../models/Author')
const Address = require('../../models/Address')
const Book = require('../../models/Book')

const authors = async () => {
  try {
    const auths = await Author.query()
    return auths
  } catch (err) {
    throw new Error('failed to get authors')
  }
}

const getAuthor = async (obj, { authorId }) => {
  const auth = await Author.query().findOne({ id: authorId })
  return auth
}

const address = async ({ addressId }) => {
  const addy = await Address.query().where({ id: addressId })
  return addy
}

const books = async ({ id }) => {
  const authBooks = await Book.query().where({ authorId: id })
  return authBooks
}

const resolver = {
  Query: {
    authors,
    getAuthor,
  },

  Author: {
    address,
    books,
  },
}

module.exports = resolver
