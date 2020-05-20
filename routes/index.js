var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function (req, res) {
  // devolvemos el formulario
})

router.post('/register', function (req, res) {
  // encriptar la contraseña que llega en req.body.password

  // guardo el usuario en el archivo users.json

  // redirigir al usuario a la pagina de perfil

  // leemos el formulario
  res.json(req.body)
})

router.get('/profile', function (req, res) {
  res.send('Perfil del usuario')
})

module.exports = router;
