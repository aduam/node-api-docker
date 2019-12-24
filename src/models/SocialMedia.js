const { Schema, model } = require('mongoose')

const SocialMedia = model('social_media', new Schema({
  person: {
    type: Schema.ObjectId,
    ref: 'Person'
  },
  facebook: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false
  },
  github: {
    type: String,
    required: false
  },
  web: {
    type: String,
    required: false
  },
}))

module.exports = SocialMedia