const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models/mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json()) // tell the app that we are going to use json to handle incoming payload

function success(res, payload) {
    return res.status(200).json(payload)
}

app.get('/todos', async (req, res, next) => {
    try {
        const todos = await db.Todo.find({})
        return success(res, todos)
    } catch(e) {
        next({ status: 400, message: 'failed to get todos' })
    }
})

app.post('/todos', async (req, res, next) => {
    try {
        const todo = await db.Todo.create(req.body)
        return success(res, todo)
    } catch(e) {
        next({ status: 400, message: 'failed to create todos' })
    }
})

app.put('/todos/:id', async (req, res, next) => {
    try {
        const todo = await db.Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return success(res, todo)
    } catch(e) {
        next({ status: 400, message: 'failed to update todos' })
    }
})

app.delete('/todos/:id', async (req, res, next) => {
    try {
        await db.Todo.findByIdAndRemove(req.params.id)
        return success(res, "todo deleted!")
    } catch(e) {
        next({ status: 400, message: 'failed to delete todos' })
    }
})

app.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
        status: err.status || 400,
        message: err.message || 'There was an error processing request'
    })
})

app.listen(PORT, () => {
    console.log("Server is up on port " + PORT);
})