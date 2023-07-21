const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In the middlewear')
    next()
})

app.use((req, res, next) => {
    console.log('In another middlewear')
    res.send('<h1>Hello from Express</h1>')
    // res.send({ "name": "Bhanu" })
})

app.listen(3000)

