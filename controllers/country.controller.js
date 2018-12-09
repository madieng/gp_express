let countryModel = require('../models/country')

exports.index = (request, response) => {
    countryModel.find({}).populate('gps').then((countries) => {
        response.json(countries);
    })
}

exports.detail = (request, response) => {
    countryModel.findById(request.params.id).populate('gps').then((country) => {
        response.json(country);
    })
}

