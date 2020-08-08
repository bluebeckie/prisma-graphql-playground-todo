const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express');
const bodyParser = require('body-parser');
const axios = require('axios');

const {
    PORT = 5466,
} = process.env;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/playground', (req, res) => {
    // TODO
});

app.post('/graphql', (req, res) => {
    // TODO
});

app.listen(PORT, () => {
    console.log('server listening on', PORT);
});
