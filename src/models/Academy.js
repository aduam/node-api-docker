const { Schema, model } = require('mongoose')

const Academy = model('Academy', new Schema({
  person: {
    type: Schema.ObjectId,
    ref: 'Person'
  },
  date_to: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
}))

module.exports = Academy