'strict'
const crypto = require('crypto');
const express = require('express');
const app = express();
const PORT = 7800;

const HOST = '0.0.0.0';

app.get('/', (req, res) => {
	res.send('Hello Node Docker from github jenkins cicd');
});

app.get('/info', (req, res) => {
        res.send('Admin infomation: Abdoul D Derk');
});

app.get('/version', (req, res) => {
        res.send('Nodejs App version: v1.0');
});
app.get('/about',(req,res) => {
        res.send('This is BFK-Solutions that focus on training kids in special need');
});
const secret = 'kadederklin78';
const hash = crypto.createHmac('sha256',secret).update('I love linuxacademy').digest('hex');

app.get('/secret',(req,res) => {
        res.send('here is my secret: ' + hash);
});
app.listen(PORT,HOST);
console.log(`Running on https://${PORT}:{host}`);
