const express = require('express')
, router = express.Router()
, usuarios_controller = require('./usuarios_controller');

router.get('/', usuarios_controller.getAll);
router.get('/:id', usuarios_controller.getById);
router.post('/', usuarios_controller.add);
router.put('/:id', usuarios_controller.update);
router.delete('/:id', usuarios_controller.delete);

module.exports = router;