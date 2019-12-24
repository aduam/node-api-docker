const { add, get } = require('./store')

const addExperience = data => {
  add(data)
}

const getExperience = id => {
  return get(id)
}

module.exports = {
  addExperience,
  getExperience,
}