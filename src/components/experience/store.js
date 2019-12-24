const Model = require('../../models/Experience')

const addExperience = experience => {
  const newExperience = new Model(experience)
  return newExperience.save()
}

const getExperience = id => {
  return new Promise((resolve, reject) => {
    if (id) {
      Model.findOne({ _id: id })
        .populate('person')
        .exec((err, populate) => {
          if(err) {
            reject('error')
            return false
          }
          resolve(populate)
        })
    }
    Model.find()
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
  add: addExperience,
  get: getExperience,
}