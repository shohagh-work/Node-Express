const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    try {
        const { Authorization } = req.headers;
        const token = Authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const { username, userId } = decode;
        req.username = username;
        req.userId = userId;
        next();
    } catch (err) {
        next('authentication failure!');
    }
};

// exports
module.exports = checkLogin;
