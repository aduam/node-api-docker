const { Schema, model } = require('mongoose')

const Experience = model('Experience', new Schema({
  person: {
    type: Schema.ObjectId,
    ref: 'Person'
  },
  date_from: {
    type: Number,
    required: true
  },
  date_to: {
    type: Number,
    required: true
  },
  name_business: {
    type: String,
    required: true
  },
  type_business: {
    type: String,
    required: false
  },
  job: {
    type: String,
    required: true
  }
}))

module.exports = Experience