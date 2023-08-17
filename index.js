const express = require('express');
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const app = express(); // the main app
const admin = express();
// app.use(express.json());
// app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/user/', (req, res) => {
    res.json({
        name: 'Shohagh',
    });
    // console.log(res.headersSent);
    // res.send('Hello Shohagh');
    // res.end();
    // console.log(res.headersSent);
});
/* app.get('/user/', (req, res) => {
    console.log(res.headersSent);
    res.render('page/about', {
        name: 'Shohagh',
        title: 'about page'
    });
    console.log(res.headersSent);
}); */

// app.get('/user/', handler);

app.post('/user/', (req, res) => {
    console.log(req.body);
    console.log(req.route);
    res.send('Hello World');
});

app.use('/admin', admin);

/* admin.get('/user/:id', (req, res) => {
    // console.log(req.originalUrl);
    // console.log(req.url);
    // console.log(req.path);
    // console.log(req.hostname);
    // console.log(req.ip);
    // console.log(req.method);
    // console.log(req.protocol);
    // console.log(req.params.id);
    // console.log(req.query);
    res.send('Amin Dashboard');
});
 */

/* 
app.get('/user/:id', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.url);
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.params);
    console.log(req.query);
    console.log(req.cookies);
    console.log(req.secure);
    res.send('Hello World');
}); */



/* 
app.set('view engine', 'ejs');

app.route('/user/designer')
    .get((req, res) => {
            res.render('page/about');
        })
    .post((req, res) => {
            res.send('This is app home pag post');
        })
    .put((req, res) => {
            res.send('This is app home pag put');
        });

app.get('/user/:id', (req, res) => {
    console.log(req.userDetails);
    res.send('This is app home page');
});
 */

app.listen(3000, () => {
    console.log('listening on port 3000');
});