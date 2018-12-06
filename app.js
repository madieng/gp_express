let express = require('express')
let nunjucks = require('nunjucks')


let app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist/'))

// app.get('/', (request, response) => {
//     response.status(200).json(['toto', 'tata'])
// })

app.use('/api/countries', require('./routes/country'))

let server = app.listen(3000, function(){
    console.log('app running on port:', server.address().port)
})