const Author = require('../../models/Author')

const addAuthor = async (obj, { input }) => {
  try {
    const added = Author.query().insert({
      firstName: input.firstName,
      lastName: input.lastName,
      age: input.age,
      email: input.email,
      numBooksPublished: input.numBooksPublished,
    }).returning('*')
    return added
  } catch (err) {
    throw new Error('Author not added')
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
