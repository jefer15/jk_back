const express = require('express');
require('dotenv').config({ path: './env/.env' });
const cors = require('cors');
const registerApiRouter = require('./components');
const config = require('./config/config')
require('./db/config');
const app = express();
http = require('http').Server(app)

const optionsCors = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

app.use(cors(optionsCors));
app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ extended: false }));

registerApiRouter(app);
  http.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
});

module.exports = app;
