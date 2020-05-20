var express = require('express');
var router = express.Router();
var chatsController = require('../controllers/chatsController')

router.get('/', chatsController.list)
router.get('/:id', chatsController.read)
router.post('/', chatsController.create)
router.patch('/:id', chatsController.update)
router.delete('/:id', chatsController.delete)

module.exports = router;