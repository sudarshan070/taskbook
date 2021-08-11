const express = require('express')
const router = express.Router()
const Todo = require('../model/todo')

// get todo
router.get('/', async (req, res, next) => {
    try {
        let todo = await Todo.find({})
        res.status(201).json({ todo })
    } catch (error) {
        next(error)
    }
})

// get single todo
router.get('/:id', async (req, res, next) => {
    try {
        let todo = await Todo.findById(req.params.id)
        res.status(201).json({ todo })
    } catch (error) {
        next(error)
    }
})

// create todo
router.post('/create', async (req, res, next) => {
    try {
        let todo = await Todo.create(req.body)
        res.status(201).json({ todo })
    } catch (error) {
        next(error)
    }
})

// update todo
router.put('/update/:id', async (req, res, next) => {
    try {
        let todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({ success: "Todo update successfully" })
    } catch (error) {
        next(error)
    }
})

// delete todo
router.delete('/delete/:id', async (req, res, next) => {
    try {
        let todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: "Todo delete successfully" })
    } catch (error) {
        next(error)
    }
})

module.exports = router