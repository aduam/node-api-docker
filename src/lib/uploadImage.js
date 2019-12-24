const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads'),
  filename: (req, file, cb) => {
    cb(null, (file.originalname));
  }
})

const upload = (multer({
  storage,
  dest: path.join(__dirname, '../../uploads'),
  limits: {
    fieldSize: 1000000
  },
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png|gif|svg/
    const mimetype = fileType.test(file.mimetype)
    const extname = fileType.test(path.extname(file.originalname))

    if (mimetype && extname) {
      return cb(null, true)
    }
    cb("El archivo debe ser una imagen valida")
  }
}))

module.exports = upload