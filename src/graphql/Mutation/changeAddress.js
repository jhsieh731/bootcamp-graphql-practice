const Address = require('../../models/Address')

const changeAddress = async (obj, { input }) => {
  try {
    const added = Address.query().patchAndFetchById(input.id, {
      street: input.street,
      city: input.city,
      state: input.state,
      zip: input.zip,
    })
    return added
  } catch (err) {
    throw new Error('Address not changed')
  }
}

const resolver = {
  Mutation: {
    changeAddress,
  },
}

module.exports = resolver
