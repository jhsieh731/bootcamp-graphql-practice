const Publisher = require('../../models/Publisher')

const addPublisher = async (obj, { input }) => {
  try {
    const added = Publisher.query().insert({
      company: input.company,
      phoneNumber: input.phoneNumber,
      numBooksPublished: input.numBooksPublished,
    })
    return added
  } catch (err) {
    throw new Error('Publisher not added')
  }
}

const resolver = {
  Mutation: {
    addPublisher,
  },
}

module.exports = resolver
