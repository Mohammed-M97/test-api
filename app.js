const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

let publicPath = path.join(__dirname, 'public');

app.get('/index', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});