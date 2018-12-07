let CountryRepository = require('../repositories/countryRepository')

let countryRepository = new CountryRepository();

exports.index = (request, response) => {
    countryRepository.findAll().then((countries) => {
        response.json(countries);
    })
}

exports.detail = (request, response) => {
    countryRepository.findById(request.params.id).then((country) => {
        response.json(country);
    })
}

