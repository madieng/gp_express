let mongoose = require('mongoose')
let Schema = mongoose.Schema

let gpSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    active: { type: Boolean, default: true },
    phoneNumber: [
        {
            number: String,
            country: {
                type: Schema.Types.ObjectId,
                ref: 'Country'
            }
        }
    ],
    country: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Country'
        }   
    ],
    date: { type: Date, default: Date.now }
})

gpSchema.virtual('fullname').get(() => {
    return this.name.first + ' ' + this.name.last
})


let Gp = mongoose.model('Gp', gpSchema)

module.exports = Gp