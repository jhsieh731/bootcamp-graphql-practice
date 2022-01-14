const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const books = async () => {
  try {
    const bks = await Book.query()
    return bks
  } catch (err) {
    throw new Error('failed to get books')
  }
}

const getBook = async (obj, { bookId }) => {
  const book = await Book.query().findOne({ id: bookId })
  return book
}

const author = async ({ authorId }) => {
  const a = await Author.query().where({ id: authorId })
  return a
}

const publisher = async ({ publisherId }) => {
  const b = await Publisher.query().where({ id: publisherId })
  return b
}

const resolver = {
  Query: {
    books,
    getBook,
  },

  Book: {
    author,
    publisher,
  },
}

module.exports = resolver
