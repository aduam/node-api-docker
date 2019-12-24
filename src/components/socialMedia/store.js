const SocialModel = require('../../models/SocialMedia')

const addSocialMedia = socialMedia => {
  const social = {
    person: socialMedia.person,
    facebook: socialMedia.facebook,
    instagram: socialMedia.instagram,
    twitter: socialMedia.twitter,
    linkedin: socialMedia.linkedin,
    github: socialMedia.github,
    web: socialMedia.web
  }
  const newSocial = new SocialModel(social)
  return newSocial.save()
}

const getSocialMedia = id => {
  return new Promise((resolve, reject) => {
    if (id) {
      SocialModel.findOne({ _id: id })
        .populate('person')
        .exec((err, populated) => {
          if (err) {
            reject('err')
            return false
          }
          resolve(populated)
        })
    }
    SocialModel.find()
      .populate('person')
      .exec((err, populated) => {
        if (err) {
          reject('err')
          return false
        }
        resolve(populated)
      })
  })
}

module.exports = {
  add: addSocialMedia,
  get: getSocialMedia,
}