const express = require('express')
const {json} = require('express')
const tasksRouter = require('./tasks/tasks.router').router

const app = express()

app.use(express.json())

app.use('/hola', (req, res) => {
    res.json({
        messaje: "Hola desde el app.use",
        metodoUsado : req.method
    })
})

app.use('/api/v1', tasksRouter)


app.listen(8000, () => {
    console.log('Server started at 8000 port')
})