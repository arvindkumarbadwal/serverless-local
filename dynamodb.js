'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

AWS.config.accessKeyId = "xxxxxxxxxxxxxx";
AWS.config.secretAccessKey = "xxxxxxxxxx";

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;