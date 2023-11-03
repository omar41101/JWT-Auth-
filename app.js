const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/index')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/', authRoute)
app.use(cookieParser())

//database connection
const dbURI =
    'mongodb+srv://soprano:Omarajimiii@cluster0.wktz9qc.mongodb.net/?retryWrites=true&w=majority'
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err))
