'strict'
const crypto = require('crypto');
const express = require('express');
const app = express();
const PORT = 7800;

const HOST = '0.0.0.0';

app.get('/', (req, res) => {
	res.send('Hello Nodejs aws devops from github jenkins cicd');
});

app.get('/info', (req, res) => {
        res.send('Admin infomation: Abdoul K Koanda');
});

app.get('/version', (req, res) => {
        res.send('Nodejs App version: v3.0');
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
