const express = require('express');

const publicRouter = express.Router();

/* publicRouter.all('*', (req, res, next) => {
    console.log('I am logging');
    next();
}); */

// publicRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'admin' : 'annoymous';
//     console.log('I am logging');
//     next();
// });

publicRouter.param((param, option) => (req, res, next, val) => {
    if (option === param) {
        console.log();
        next();
    } else {
        res.send(403);
    }
});

publicRouter.param('user', '12');

publicRouter.get('/:user', (req, res, next) => {
    res.send(`Hi ${req.user}`);
    console.log('I am user');
    next();
});

publicRouter.get('/:user/about', (req, res) => {
    res.send(`Hi ${req.user}
     This is About page`);
});

module.exports = publicRouter;
