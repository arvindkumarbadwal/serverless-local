'use strict';

const dynamodb = require('../dynamodb');

module.exports.create = async (event, context, callback) => {

    //const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    const params = {
        TableName: "usersTable",
        Item: {
            email: data.email,
        },
    };

    // write the user to the database
    dynamodb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t create the user item.',
            });
            return;
        }
    });


    // create a response
    const response = {
        statusCode: 200,
        body: JSON.stringify(params.Item),
    };
    callback(null, response);
};