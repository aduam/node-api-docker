const { add, get } = require('./store')

const addAcademy = academy => {
  return add(academy)
}

const getAcademy = id => {
  return get(id)
}

module.exports = {
  addAcademy,
  getAcademy,
}