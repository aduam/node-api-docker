const Model = require('../../models/Person')

const addPerson = (person) => {
  const newPerson = new Model(person)
  return newPerson.save()
}

const getPerson = async (id) => {
  if (id) {
    return await Model.findOne({
      _id: id
    })
  }
  return await Model.find()
}

const removePerson = async (id) => {
  return await Model.deleteOne({ _id: id })
}

module.exports = {
  add: addPerson,
  get: getPerson,
  remove: removePerson
}