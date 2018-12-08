let csv = require('csvtojson')
let CountryRepository = require('../repositories/country.repository')
require('../config/db')
require('../models/country')

let csvFile = __dirname + '/../datas/countries.csv'

csv().fromFile(csvFile).then((jsonObject) => {
    jsonObject.forEach((value, index) => {
        let countryRepository = new CountryRepository()
        countryRepository.save(value)
    })
})

