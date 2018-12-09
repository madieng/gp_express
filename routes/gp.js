let route = require('express').Router()
let gp_controller = require('../controllers/gp.controller')

route.get('/', gp_controller.index)

route.get('/:id', gp_controller.detail)

route.post('/create', gp_controller.create)

route.put('/edit/:id', gp_controller.update)

module.exports = route
