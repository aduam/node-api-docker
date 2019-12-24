const express = require('express')
const router = express.Router()
const { success, failure } = require('../../lib/response')
const { addSkill, getSkill } = require('./controller')

router.post('/', (req, res) => {
  addSkill(req.body)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

router.get('/:id?', (req, res) => {
  const { id } = req.params
  getSkill(id)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

module.exports = router