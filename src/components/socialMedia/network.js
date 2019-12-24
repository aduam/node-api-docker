const express = require('express')
const router = express.Router()
const { success, failure } = require('../../lib/response')
const { addSocialMedia, getSocialMedia } = require('./controller')

router.post('/', (req, res) => {
  addSocialMedia(req.body)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

router.get('/:id?', (req, res) => {
  const { id } = req.params
  getSocialMedia(id)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Ocurrió un error', err))
})

module.exports = router