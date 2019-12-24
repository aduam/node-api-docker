const person = require('../../components/person/network')
const experience = require('../../components/experience/network')
const skill = require('../../components/skill/network')
const academy = require('../../components/academy/network')
const socialMedia = require('../../components/socialMedia/network')

const router = (app) => {
  app.use('/person', person)
  app.use('/experience', experience)
  app.use('/skill', skill)
  app.use('/academy', academy)
  app.use('/social_media', socialMedia)
}

module.exports = router