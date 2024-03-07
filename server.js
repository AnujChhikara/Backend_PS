require('dotenv').config()

const express = require('express')

const app = express()
app.use(express.json())
const routes = require('./router/auth-router')
const connectDb = require('./utils/db')


app.use('/api/auth' , routes)


const port = 3000

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is runnning at port : ${port}`)
    })
})
