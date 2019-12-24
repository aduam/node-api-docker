const Skill = require('../../models/Skill')

const addSkill = skill => {
  const newSkill = new Skill(skill)
  return newSkill.save()
}

const getSkill = id => {
  return new Promise((resolve, reject) => {
    if (id) {
      Skill.findOne({ _id: id })
        .populate('person')
        .exec((err, pupulated) => {
          if (err) {
            reject(err)
            return false
          }
          resolve(pupulated)
        })
    }
    Skill.find()
    .populate('person')
    .exec((err, populate) => {
      if (err) {
        reject('error')
        return false
      }
      resolve(populate)
    })
  })
}

module.exports = {
  add: addSkill,
  get: getSkill,
}