/*
npm install pg
npm install dotenv
*/

const { Client } =  require('pg');
/*
Line 6 equivalent to 
const someModule = require('some-module');
const Client = someModule.Client;
*/
require('dotenv').config();

module.exports.getClient = async () => {
    const client = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        db: process.env.PG_DATABASE,
        ssl: false
    });
    await client.connect();
    return client;
};

