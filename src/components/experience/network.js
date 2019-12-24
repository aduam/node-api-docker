const express = require('express')
const router = express.Router()
const { success, failure } = require('../../lib/response')
const { addExperience, getExperience } = require('./controller')

router.get('/:id?', (req, res) => {
  const { id } = req.params
  getExperience(id)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

router.post('/', (req, res) => {
  addExperience(req.body)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

module.exports = router