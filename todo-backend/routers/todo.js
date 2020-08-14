const express = require('express')
const router = new express.Router()
const db = require('../models/mongoose')

function success(res, payload) {
    return res.status(200).json(payload)
}

router.get('/todos', async (req, res, next) => {
    try {
        const todos = await db.Todo.find({})
        return success(res, todos)
    } catch(e) {
        next({ status: 400, message: 'failed to get todos' })
    }
})

router.post('/todos', async (req, res, next) => {
    try {
        const todo = await db.Todo.create(req.body)
        return success(res, todo)
    } catch(e) {
        next({ status: 400, message: 'failed to create todos' })
    }
})

router.put('/todos/:id', async (req, res, next) => {
    try {
        const todo = await db.Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return success(res, todo)
    } catch(e) {
        next({ status: 400, message: 'failed to update todos' })
    }
})

router.delete('/todos/:id', async (req, res, next) => {
    try {
        await db.Todo.findByIdAndRemove(req.params.id)
        return success(res, "todo deleted!")
    } catch(e) {
        next({ status: 400, message: 'failed to delete todos' })
    }
})


module.exports = router