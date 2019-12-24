const { Schema, model } = require('mongoose')



const Person = model('Person', new Schema({
  names: {
    type: String,
    required: true
  },
  surnames: {
    type: String,
    required: true
  },
  photo_profile: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  phone_home: {
    type: String,
    required: false
  },
  direction: {
    type: String,
    required: false
  },
}))

module.exports = Person