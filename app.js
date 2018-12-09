let express = require('express')
let bodyParser = require('body-parser')

let app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
// app.use('/api', require('./routes/index'))
app.use('/api/gps', require('./routes/gp'))
app.use('/api/countries', require('./routes/country'))

let server = app.listen(3000, function(){
    console.log('app running on port:', server.address().port)
})