const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/users.js') 
const automovilController = require('../controllers/automovil')

router.get('/usuarios', usersController.getUsuarios);
router.get('/automovil/placas',automovilController.getPlacas)

module.exports = router;