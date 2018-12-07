let route = require('express').Router()
let gpController = require('../controllers/gpController')

route.get('/', gpController.index)

route.get('/:id', gpController.detail)

route.post('/create', gpController.save)

module.exports = route
