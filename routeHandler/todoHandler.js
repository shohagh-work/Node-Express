const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const todoSchema = require('../schemas/todoSchema');

const Todo = new mongoose.model('Todo', todoSchema);

// Get All the todos
router.get('/', async (req, res) => {
    console.log('Hello');
    res.send('Hello');
});

// Get a todo by id
router.get('/:id', async (req, res) => {});

// post todo
router.post('/', async (req, res) => {
    console.log(req.body);
    const newTodo = new Todo(req.body);

    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error!',
            });
            res.end();
        } else {
            res.status(200).json({
                error: 'Todos was inserted successfully!',
            });
            res.end();
        }
    });
});

// post multiple todo
router.post('/all', async (req, res) => {});

// put todo
router.put('/:id', async (req, res) => {});

// delete todo
router.delete('/:id', async (req, res) => {});

module.exports = router;
