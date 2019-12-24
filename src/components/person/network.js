const express = require('express')
const router = express.Router()
const { uuid } = require('uuidv4');
const fs = require('fs')
const { success, failure } = require('../../lib/response')
const { addPerson, getPerson, removePerson } = require('./controller')
const upload = require('../../lib/uploadImage')

router.get('/:id?', (req, res) => {
  const id = req.params.id
  getPerson(id)
    .then(data => success(res, 200, data))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

router.post('/', upload.single('file'), (req, res) => {
  const file = req.file ? { ...req.file, originalname: uuid() + '__' + req.file.originalname } : null
  addPerson(req.body, file)
    .then(data => {
      if (file) {
        fs.unlink(req.file.path, (err) => {
          if(err) throw err
        })
      }
      return success(res, 200, data)
    })
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  removePerson(id)
    .then(data => success(res, 200, `Registros eliminados: ${data.deletedCount}`))
    .catch(err => failure(res, 500, 'Falló la operación', err))
})

module.exports = router