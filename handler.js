const handler = (req, res) => {
    // console.log(req.accepts('json'));
    // console.log(req.get('content-type'));
    // req.app.get(res.render('page/about', {
    //     name: 'Mmh Shohagh',
    // }));
    // console.log(req.route);
    res.send('Hello World');
};

module.exports = handler;