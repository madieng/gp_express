let mongoose = require('mongoose')
let Schema = mongoose.Schema

let countrySchema = new Schema({
    name: String,
    telephoneCode: String,
})

countrySchema.virtual('gp', {
    'ref': 'Gp',
    'localField': 'gps',
    'foreignField': '_id'
})

let Country = mongoose.model('Country', countrySchema)

module.exports = Country