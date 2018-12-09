let route = require('express').Router()
let country_controller = require('../controllers/country.controller')

route.get('/', country_controller.index)
route.get('/:id', country_controller.detail)

module.exports = route