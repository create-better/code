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

(async () => {
    const client = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        db: process.env.PG_DATABASE,
        ssl: false
    });
    await client.connect();
    const rest = await client.query('SELECT $1::text as connected', ['Connection to postgres is successful!']);
    console.log(rest.rows[0]);
    await client.end();
})();

