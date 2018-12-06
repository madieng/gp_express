let Country = require('../models/country')
require('../config/db')

class CountryRepository {
    // private data

    // constructor(data: object) {
    //     this.data = data
    // }

    save(data) {
        let country = new Country({
            name: data.country,
            telephoneCode: data.telephoneCode,
        })

        country.save((err) => {
            if (err) return next(err)

            console.log("Saved : " + data.country + " --- " + data.telephoneCode)
        })
    }

    findAll() {
       return Country.find({})
    }
}

module.exports = CountryRepository