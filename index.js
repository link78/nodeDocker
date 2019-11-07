'strict'
const crypto = require('crypto');
const express = require('express');
const app = express();
const PORT = 8080;

const HOST = '0.0.0.0';

app.get('/', (req, res) => {
	res.send('Hello Node Docker');
});
app.get('/about',(req,res) => {
        res.send('This is BFK-Solutions that focus on training kids in special need');
});
const secret = 'kadederklin78';
const hash = crypto.createHmac('sha256',secret).update('I love linuxacademy').digest('hex');

app.get('/secret',(res,req) => {
        res.send('Here is the secret: ' + hash);
});
app.listen(PORT,HOST);
console.log(`Running on https://${PORT}:{host}`);
