const express = require('express');
const multer = require('multer');
const path = require('path');
// const fs = require('fs');
// const publicRouter = require('./publicRouter');
// const adminRouter = require('./adminRouter');
// const cookieParser = require('cookie-parser');
// const handler = require('./handler');

// file upload folder
const UPLOADS_FOLDER = './uploads/';

// storage object
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        // important file.pdf => important-file.pdf
        const fileExt = path.extname(file.originalname);
        const fileName = `${file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(' ')}-${Date.now()}`;
        cb(null, fileName + fileExt);
    },
});

// prepare the final multer upload object
const upload = multer({
    storage: Storage,
    limits: {
        fileSize: 10000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
        console.log(file);
        if (file.fieldname === 'avatar') {
            if (
                file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg' ||
                file.mimetype === 'image/jpeg'
            ) {
                cb(null, true);
            } else {
                cb(new Error('Only .jpg, .png, .jpeg format allowed!'));
            }
        } else if (file.fieldname === 'zip') {
            if (file.mimetype === 'application/x-zip-compressed') {
                cb(null, true);
            } else {
                cb(new Error('Only .zip format allowed!'));
            }
        } else {
            cb(new Error('There was an unknown error!'));
        }
    },
});

const app = express(); // the main app
// application route
app.post(
    '/',
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'zip', maxCount: 1 },
    ]),
    (req, res) => {
        console.log(req.files);
        res.send('Hello World');
    }
);
/* app.post('/', upload.single('avatar'), (req, res) => {
    res.send('Hello World');
}); */

// default error handler
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error!');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('success');
    }
});
/* app.get('/', [
    (req, res, next) => {
        setTimeout(() => {
        try {
            console.log('a');
            res.send('a');
        } catch (err) {
            next(err);
        }
    }, 100);

        fs.readFile('/file-doesnot-exist', 'utf-8', (err, data) => {
            console.log(data);
            next(err);
        });
    },
    (req, res, next) => {
        console.log(data.property);
    },
]);

app.use((req, res, next) => {
    console.log('I am not called!');
    next();
}); */

// all error handler
/* app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('There was a problem!');
    } else if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There was an error!');
    }
}); */
// app.get('/', (req, res, next) => {
// eslint-disable-next-line no-plusplus
//     for (let i = 0; i <= 10; i++) {
//         if (i === 5) {
//             next('There was a get problem!');
//         } else {
//             res.write('a');
//         }
//     }
//     res.end();
// });

// 404 error handler
// app.use((req, res, next) => {
// res.status(404).send('Requested url was not found!');
//     next('Requested Url is not found!');
// });

// all error handler
// app.use((err, req, res, next) => {
//     if (res.headersSent) {
//         next('There was a problem!');
//     } else if (err.message) {
//         res.status(500).send(err.message);
//     } else {
//         res.status(500).send('There was an error!');
//     }

// console.log(err.message);
// res.status(500).send(`${err.message}`);
// });

// app.use('/', publicRouter);
// app.use('/admin/', adminRouter);

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
