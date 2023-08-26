const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const userSchema = require('../schemas/userSchema');

const User = new mongoose.model('User', userSchema);
const checkLogin = require('../middlewares/checkLogin');

// view users
// Get All the todos
router.get('/', checkLogin, async (req, res) => {
    try {
        const getUser = await User.find({})
            .populate('todos', 'title')
            .select({
                _id: 0,
                __v: 0,
            })
            .limit(5);
        console.log(getUser);
        res.status(200).json({
            message: 'Find Users!',
            output: getUser,
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a problem in server side!',
        });
    }
});
// signUp user
router.post('/signup/', async (req, res) => {
    try {
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
        });
        const data = await newUser.save();
        res.status(200).json({
            message: 'SignUp successfull!',
            userDetails: data,
        });
    } catch (Err) {
        res.status(500).json({
            error: 'SignUp Failed!',
        });
    }
});

// user login
router.post('/login/', async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username });
        if (user && user.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            if (isValidPassword) {
                // generate token
                const token = jwt.sign(
                    {
                        username: user[0].username,
                        // eslint-disable-next-line no-underscore-dangle
                        userId: user[0]._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h',
                    }
                );

                res.status(200).json({
                    access_token: token,
                    message: 'Login Successfull!',
                });
            } else {
                res.status(401).json({
                    error: 'Authentication Error!',
                });
            }
        } else {
            res.status(401).json({
                error: 'Authentication Error!',
            });
        }
    } catch (err) {
        res.status(401).json({
            error: 'Authentication Failed!',
        });
    }
});

module.exports = router;
