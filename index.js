const app = require('./app')
const config = require('./config')


//start the server

app.listen(config.port, () => {
    console.log('server http://localhost:'+config.port)
})
