const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is home page');
});
app.post('/', (req, res) => {
    res.send('This is home page using post method');
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});