const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/index')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/', authRoute)
app.use(cookieParser())

//database connection
const dbURI =
    'mongodb+srv://soprano:Omarajimiii@cluster0.wktz9qc.mongodb.net/?retryWrites=true&w=majority'
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
        app.listen(3001, () => {
            console.log("Server is running on port 3001");
        });
    })
    .catch(err => console.error("Error connecting to the database:", err));
