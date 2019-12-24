const AcademyModel = require('../../models/Academy')

const addAcademy = academy => {
  const newAcademy = new AcademyModel(academy)
  return newAcademy.save()
}

const getAcademy = id => {
  return new Promise((resolve, reject) => {
    if (id) {
      AcademyModel.findOne({ _id: id })
        .populate('person')
        .exec((err, populated) => {
          if (err) {
            reject('error')
            return false
          }
          resolve(populated)
        })
    }
    AcademyModel.find()
      .populate('person')
      .exec((err, populated) => {
        if (err) {
          reject('error')
          return false
        }
        resolve(populated)
      })
  })
}

module.exports = {
  add: addAcademy,
  get: getAcademy,
}