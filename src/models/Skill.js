const { Schema, model } = require('mongoose')

const Skill = model('Skill', new Schema({
  person: {
    type: Schema.ObjectId,
    ref: 'Person'
  },
  title: {
    type: String,
    required: true
  },
}))

module.exports = Skill