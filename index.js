const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const bodyParser = require('body-parser');
const axios = require('axios');

const {
    PORT = 5466,
} = process.env;

const TARGET_INTROSPECT_URL = 'https://abumedia-graviton-gateway-apac.media.yahoo.com/api/v1/admin/introspect'; // TODO
const TARGET_QUERY_URL = 'https://abumedia-graviton-gateway-apac.media.yahoo.com/api/v1/gql/query'; // TODO

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/playground', expressPlayground({
    endpoint: '/graphql'
}));

app.post('/graphql', async (req, res) => {
    // TODO
    // console.log('req:', req.body);
    const { operationName, query, variables, body } = req.body;
    if (operationName === 'IntrospectionQuery') {
        const result = await axios.get(TARGET_INTROSPECT_URL);
        return res.send(result.data);
    }

    const result = await axios.get(TARGET_QUERY_URL, {
        params: {
            query,
            variables
        }
    })
    res.send(result.data);
});

app.listen(PORT, () => {
    console.log('server listening on', PORT);
});
