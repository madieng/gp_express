let gpModel = require('../models/gp')

exports.index = (request, response) => {
    gpModel.find({}).populate('country phoneNumber.country').then((gps) => {
        response.json(gps)
    })
}

exports.detail = (request, response) => {
    gpModel.findById(request.params.id).populate('country phoneNumber.country').then((gp) => {
        response.json(gp)
    })
}

exports.create = (request, response) => {
    let data = request.body
    let gp = new gpModel({
        name: {
            first: data.firstname,
            last: data.lastname,
        },
        phoneNumber: data.phoneNumber,
        country: data.country
    })

    gp.save((err, gp, numAffected) => {
        if (err) {
            response.status(500).json(err)
        }
        else {
            response.status(200).json(gp)
        }
    })
}

exports.update = (request, response) => {
    let data = request.body
    gpModel.where({_id: request.params.id}).update({
        name: { first: data.firstname, last: data.lastname },
        phoneNumber: data.phoneNumber,
        country: data.country,
        active: data.active
    }, (err, gp) => {
        if (err) {
            response.status(500).json(err)
        }
        else {
            response.status(200).json(gp)
        }
    })
}
