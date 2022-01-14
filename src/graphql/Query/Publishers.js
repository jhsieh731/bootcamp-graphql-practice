const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')
const Book = require('../../models/Book')

const publishers = async () => {
  try {
    const pubs = await Publisher.query()
    return pubs
  } catch (err) {
    throw new Error('failed to get publishers')
  }
}

const address = async ({ addressId }) => {
  const addy = await Address.query().where({ id: addressId })
  return addy
}

const books = async ({ id }) => {
  const a = await Book.query().where({ publisherId: id })
  return a
}

const resolver = {
  Query: {
    publishers,
  },

  Publisher: {
    address,
    books,
  },
}

module.exports = resolver
