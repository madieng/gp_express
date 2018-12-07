let CountryModel = require('../models/countryModel')
require('../models/gpModel')
require('../config/db')

class CountryRepository {
    // private data

    // constructor(data: object) {
    //     this.data = data
    // }

    save(data) {
        let countryModel = new CountryModel({
            name: data.country,
            telephoneCode: data.telephoneCode,
        })

        countryModel.save((err) => {
            if (err) return next(err)

            console.log("Saved : " + data.country + " --- " + data.telephoneCode)
        })
    }

    findAll() {
       return CountryModel.find({}).populate('gp')
    }

    findById(id) {
       return CountryModel.findById(id).populate('gp')
    }

    static findIdByName(name) {
       return CountryModel.findOne({ name: name })
    }
}

module.exports = CountryRepository