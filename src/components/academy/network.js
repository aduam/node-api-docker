const express = require('express')
const router = express.Router()
const { success, failure } = require('../../lib/response')
const { addAcademy, getAcademy } = require('./controller')

router.post('/', (req, res) => {
  addAcademy(req.body)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

router.get('/:id?', (req, res) => {
  const { id } = req.params
  getAcademy(id)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err)
    )
})

module.exports = router