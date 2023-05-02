const router = require('express').Router();
const controller = require('./MVC/controller.js');

router.get('/itineraries', controller.getAll),

module.exports = router;
