const Book = require('../../models/Book')

const addBook = async (obj, { input }) => {
  try {
    const added = Book.query().insert({
      title: input.title,
      language: input.language,
      numPages: input.numPages,
      bestseller: input.bestseller,
      authorId: input.authorId,
      publisherId: input.publisherId,
    })
    return added
  } catch (err) {
    throw new Error('Book not added')
  }
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
