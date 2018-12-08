let GpRepository = require('../repositories/gp.repository')

let gpRepository = new GpRepository()

exports.index = (request, response) => {
    gpRepository.findAll().then((gp) => {
        response.json(gp)
    })
}

exports.detail = (request, response) => {
    gpRepository.findById().then((gp) => {
        response.json(gp)
    })
}

exports.create = (request, response) => {
    console.log(request.body)
    gpRepository.create(request.body).then((err) => {
        if (err) {
            response.status(500).json(err)
        }
        else {
            response.status(200).json({'message': 'Gp bien enregistré.'})
        }
    })
}
