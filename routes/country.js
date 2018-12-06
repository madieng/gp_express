let route = require('express').Router()
let CountryRepository = require('../repositories/country')


route.get('/', (request, response) => {
    let countryRepository = new CountryRepository();
    countryRepository.findAll().then((countries) => {
        response.json(countries);
    })

    
})

module.exports = route