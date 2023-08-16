const express = require('express');

const app = express(); // the main app



/* app.set('view engine', 'ejs');

app.route('/user/designer')
    .get((req, res) => {
            res.render('page/about');
        })
    .post((req, res) => {
            res.send('This is app home pag post');
        })
    .put((req, res) => {
            res.send('This is app home pag put');
        }); */

// app.get('/user/:id', (req, res) => {
//     console.log(req.userDetails);
//     res.send('This is app home page');
// });


app.listen(3000, () => {
    console.log('listening on port 3000');
});