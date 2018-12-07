let express = require('express')
let bodyParser = require('body-parser')

let app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/api', require('./routes/index'))

let server = app.listen(3000, function(){
    console.log('app running on port:', server.address().port)
})