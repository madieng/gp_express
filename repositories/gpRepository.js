let GpModel = require('../models/gpModel')
require('../models/countryModel')
require('../config/db')
let forEach = require('async-foreach').forEach;
let countryRepository = require('../repositories/countryRepository')

class GpRepository {
    create(data) {
        console.log(data)
        let gpModel = new GpModel({
            name: {
                first: data.firstname,
                last: data.lastname,
            },
            phoneNumber: this.transformPhoneNumber(data.phoneNumber)
        })
        
        return gpModel.save()
    }

    findAll() {
        return GpModel.find({}).populate('country');
    }

    findById(id) {
        return GpModel.findById(id).populate('country');
    }

    transformPhoneNumber(phoneNumber) {
        // let arr = []
        // phoneNumber.forEach((element, index) => {
        //     countryRepository.findIdByName(element.country).then((country) => {
        //         element.country = country._id
        //         arr.push(element)
        //     })
        // })
        forEach(phoneNumber, function(item, index, arr) {
            countryRepository.findIdByName(item.country).then((country) => {
                item.country = country._id
                // arr.push(element)
            })
            console.log("each", item, index, arr);
        });
        console.log('element.country : ', phoneNumber )
    }
}


module.exports = GpRepository