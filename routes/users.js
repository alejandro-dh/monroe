var express = require('express');
var router = express.Router();
var multer = require('multer')
var { validationResult } = require('express-validator')
let registerValidation = require('../middlewares/validators/register')
let path = require('path')

let user = {
  email: '',
  password: '',
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/avatar', function (req, res) {
  res.render('avatar')
})

router.post('/avatar', upload.any(), function (req, res) {
  console.log(req.files)
  res.send('subiendo...')
})

router.get('/register', function (req, res) {
  res.render('register', {data: user, errors: []})
})

router.post('/register', registerValidation , function (req, res) {
  let errors = validationResult(req)

  if (errors.isEmpty()) {
    res.render('dashboard')
  }

  res.render('register', {
    data : {...user, ...req.body},
    errors: errors.array()
  })
})

module.exports = router;
