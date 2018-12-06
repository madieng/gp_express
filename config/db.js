let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/gp_express')

module.exports = mongoose