let GpModel = require('../models/gp')
require('../models/country')
require('../config/db')

let countryRepository = require('./country.repository')

class GpRepository {
    create(data) {
        console.log(data)
        let gpModel = new GpModel({
            name: {
                first: data.firstname,
                last: data.lastname,
            },
            phoneNumber: data.phoneNumber,
            country: data.country
        })
        
        return gpModel.save()
    }

    findAll() {
        return GpModel.find({}).populate('country phoneNumber.country');
    }

    findById(id) {
        return GpModel.findById(id).populate('country');
    }
}


module.exports = GpRepository