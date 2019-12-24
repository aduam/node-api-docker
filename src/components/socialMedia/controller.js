const { add, get } = require('./store')

const addSocialMedia = socialMedia => {
  return add(socialMedia)
}

const getSocialMedia = id => {
  return get(id)
}

module.exports = {
  addSocialMedia,
  getSocialMedia,
}