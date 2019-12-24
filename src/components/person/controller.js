const aws = require('aws-sdk')
const fs = require('fs')
const { add, get, remove } = require('./store')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
})

const parametersUpload = file => ({
  Bucket: 'containerwanda/api',
  Key: file.originalname,
  Body: fs.readFileSync(file.path),
  ACL: 'public-read'
})

const addPerson = async (person, file) => {
  const { names, surnames, phone, phone_home, direction } = person
  let user = {}

  if (!names || !surnames) Promise.reject('fields names and surnames must be completed')

  if (file) {
    const paramsImage = parametersUpload(file)
    const stored = await s3.upload(paramsImage).promise()
    user = {
      names: names,
      surnames: surnames,
      phone: phone,
      phone_home: phone_home,
      direction: direction,
      photo_profile: stored.Location
    }
    return add(user)
  }


  user = {
    names: names,
    surnames: surnames,
    phone: phone,
    phone_home: phone_home,
    direction: direction,
  }

  return add(user)
}

const getPerson = id => {
  return get(id)
}

const removePerson = id => {
  return remove(id)
}

module.exports = {
  addPerson,
  getPerson,
  removePerson,
}