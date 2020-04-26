const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const path = require('path')
const app = express()


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//ROUTES 
app.use('/api', routes)
//EXPORT
module.exports = app