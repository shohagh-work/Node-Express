const express = require('express');
const publicRouter = require('./publicRouter');
const adminRouter = require('./adminRouter');
// const cookieParser = require('cookie-parser');
// const handler = require('./handler');

const app = express(); // the main app

app.use('/', publicRouter);
app.use('/admin/', adminRouter);

// app.use(cookieParser());
// app.use(express.json());

// const loggerWrapper = (option) =>
//     function (req, res, next) {
//         if (option.log) {
//             console.log(
// eslint-disable-next-line max-len
//                 `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
//                     req.protocol
//                 } - ${req.ip}`
//             );
//             next();
//         } else {
//             throw new Error('This is an error');
//         }
//     };

/* const looger = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
            req.protocol
        } - ${req.ip}`
    );
    // next();
    throw new Error('This is an error');
}; */

// adminRouter.use(loggerWrapper({ log: false }));

// adminRouter.get('/dashboard/', (req, res) => {
//     res.send('This is admin Dashboard');
// });

// app.use('/admin/', adminRouter);

// app.get('/about/', (req, res) => {
//     res.send('This is about');
// });

// const errorMiddleware = (err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send('There was a server side error!');
// };

// app.use(errorMiddleware);
// const admin = express();
// app.use(express.json());
// app.use(cookieParser());

/* app.set('view engine', 'ejs');

app.get('/test/', (req, res) => {
    res.location('/test/');
    res.send('Hello Shohagh');
});

app.get('/user/', (req, res) => {

    res.set('codedBy', 'Shohagh');
    console.log(res.get('codedBy'));
    res.end()
    // res.location('/test/');;
    // res.redirect('/test/');

    // res.end();

    // res.cookie('Shohagh', 'DesignerAndDeveloper', {});
    // res.end();

   res.format({
        'text/plain': () => {
            res.send('hi');
        },
        'text/html': () => {
            res.render('page/about', {
                title: 'About',
                name: 'Mmh Shohagh',
            });
        },
        'application/json': () => {
            res.json({message: 'About',});
        },
        default: () => {
            res.status(406).send('Not Acceptable');
        }
    });

    // res.sendStatus(403);
    // res.json({
    //     name: 'Shohagh',
    // });
    // console.log(res.headersSent);
    // res.send('Hello Shohagh');
    // res.end();
    // console.log(res.headersSent);
}); */
/* app.get('/user/', (req, res) => {
    console.log(res.headersSent);
    res.render('page/about', {
        name: 'Shohagh',
        title: 'about page'
    });
    console.log(res.headersSent);
}); */

// app.get('/user/', handler);

/* app.post('/user/', (req, res) => {
    console.log(req.body);
    console.log(req.route);
    res.send('Hello World');
});

app.use('/admin', admin); */

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
