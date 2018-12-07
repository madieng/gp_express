let route = require('express').Router()
let CountryRepository = require('../repositories/countryRepository')
let countryController = require('../controllers/countryController')


route.get('/', countryController.index)

route.get('/:id', countryController.detail)

module.exports = route