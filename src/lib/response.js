const success = (res, status, message) => {
  res.status(status || 200).send({
    error: '',
    data: message
  })
}

const failure = (res, status, message, err) => {
  console.error(err.message)
  res.status(status || 500).send({
    error: message,
    data: ''
  })
}

module.exports = {
  success,
  failure,
}