require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/network/routes')
const db = require('./src/db')

const app = express()
const PORT = process.env.PORT || 4000

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
db(url)

app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
router(app)
app.get('*', (req, res) => {
  res.status(200).send({ message: 'Ruta no existe' })
})

app.listen(PORT, () => {
  console.log(`API running in http://localhost:${PORT}`)
})
