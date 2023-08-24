const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const todoSchema = require('../schemas/todoSchema');

const Todo = new mongoose.model('Todo', todoSchema);

// Get All the todos
router.get('/', async (req, res) => {
    try {
        const getTodo = await Todo.find({
            status: 'active',
        })
            .select({
                _id: 0,
                __v: 0,
            })
            .limit(2);
        console.log(getTodo);
        res.status(200).json({
            message: 'Find Todos!',
            output: getTodo,
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});

// Get a todo by id
router.get('/:id', async (req, res) => {
    try {
        const getTodo = await Todo.find({
            _id: req.params.id,
        })
            .select({
                _id: 0,
                __v: 0,
            })
            .limit(2);
        console.log(getTodo);
        res.status(200).json({
            message: 'Find Todos!',
            output: getTodo,
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});

// post todo
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
        await newTodo.save();
        res.status(200).json({
            message: 'Todos was inserted successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});

// post multiple todo
router.post('/all', async (req, res) => {
    try {
        await Todo.insertMany(req.body);
        res.status(200).json({
            message: 'Todos was inserted successfully!',
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});

// put todo
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    status: 'active',
                },
            },
            {
                new: true,
                useFindAndModify: false,
            }
        );
        console.log(updatedTodo);
        res.status(200).json({
            message: 'Todos was updated successfully!',
            output: updatedTodo,
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});

// delete todo
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(
            { _id: req.params.id },
            {
                $set: {
                    status: 'active',
                },
            },
            {
                useFindAndModify: false,
            }
        );
        console.log(deletedTodo);
        res.status(200).json({
            message: 'Todos was deleted successfully!',
            output: deletedTodo,
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});

module.exports = router;
