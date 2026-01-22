require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

mongoose.connect(process.env.MONGODB)
.then(()=>console.log("Connected to Database"))
.catch((error) => console.error("unable to connect to database",error.message))

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const userRoute = require('./routes/userRoute')

app.use('/user',userRoute)

app.get('/',(req, res) => {
    res.send("🙏 Welcome to Student Attendance by Mike Davis A - web application's backend 🙏")
})

const port = process.env.PORT
app.listen(port,() => console.log(`Connected to backend with url http://localhost:${port}`))