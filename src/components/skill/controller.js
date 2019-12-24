const { add, get } = require('./store')

const addSkill = skill => {
  return add(skill)
}

const getSkill = id => {
  return get(id)
}

module.exports = {
  addSkill,
  getSkill,
}