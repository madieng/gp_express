let route = require('express').Router()

let gpController = require('../controllers/gpController')
let countryController = require('../controllers/countryController')

// GP
route.get('/gps', gpController.index)
route.get('/gp/:id', gpController.detail)
route.post('/gp/create', gpController.create)

// COUNTRY
route.get('/countries', countryController.index)
route.get('/country/:id', countryController.detail)

module.exports = route