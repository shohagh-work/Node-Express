const express = require('express');

const app = express();

app.use(express.text());

app.get('/', (req, res) => {
    res.send('This is home page');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('This is home page using POST method');
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});