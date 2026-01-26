// npm install console-table-printer

const prompt = require('prompt-sync')({ sigint: true });
const { getClient } = require("./getClient.cjs");
const { Table } = require("console-table-printer");

(async () => {
    const client = await getClient();
    const table = await client.query("SELECT * FROM passwords ORDER BY id ASC;")
    const tableToPrint = new Table({
        columns:[]
    });
    table.rows.forEach((row) => {
        tableToPrint.addRow(row)
    })
    const operation = prompt("c - Create Entry\ns - Update a value in a row\nd - Delete an Entry\nr - Show Entries\n\nWhat operation you want to perform? (c/s/d/r):  ");
    switch(operation){
        case "c":
            tableToPrint.printTable()
            const username = prompt("Username: ");
            const email = prompt("Email: ");
            const password = prompt("Password: ");
            const expiration = prompt("Expiration: ");
            const expiration_date = prompt("Expiration Date: ");
            const website = prompt("Website: ");
            var addQuery = `INSERT INTO passwords (username, email, password, expiration, expiration_date, website) VALUES ('${username}', '${email}', '${password}', ${expiration == '' ? 'NULL' : expiration}, ${expiration_date == '' ? 'NULL' : expiration_date}, '${website}');`;
            console.log("---------------------")
            console.log(addQuery)
            console.log("---------------------")

            let insertRow = await client.query(addQuery);
            console.log(insertRow);
            await client.end();  
            break;
            
        case 's':
            tableToPrint.printTable()
            let field; let query; let row;
            const id = prompt("Enter the id: ");
            const question = prompt("Choose the field to be updated:-\n1. Username (u)\n2. Email (e)\n3. Password (p)\n4. Expiration (exp)\n5. Expiration Date (exp_d)\n6. Website (w)\n\nEnter your option: ");

            switch(question){
                case 'u': 
                    field = prompt("Username: ");
                    query = `UPDATE passwords SET username = ${field} WHERE id = ${id};`
                    row = await client.query(query)
                    console.log(row)
                    await client.end();
                    break;

                case 'e': 
                    field = prompt("Email: ");
                    query = `UPDATE passwords SET email = ${field} WHERE id = ${id};`
                    row = await client.query(query)
                    console.log(row)
                    await client.end();
                    break;

                case 'p': 
                    field = prompt("Password: ");
                    query = `UPDATE passwords SET password = ${field} WHERE id = ${id};`
                    row = await client.query(query)
                    console.log(row)
                    await client.end();
                    break;

                case 'exp': 
                    field = prompt("Expiration: ");
                    query = `UPDATE passwords SET expiration = ${field} WHERE id = ${id};`
                    row = await client.query(query)
                    console.log(row)
                    await client.end();
                    break;

                case 'exp_d': 
                    field = prompt("Expiration Date: ");
                    query = `UPDATE passwords SET expiration_date = ${field} WHERE id = ${id};`
                    row = await client.query(query)
                    console.log(row)
                    await client.end();
                    break;

                case 'w': 
                    field = prompt("Website: ");
                    query = `UPDATE passwords SET website = ${field} WHERE id = ${id};`
                    console.log(query)
                    row = await client.query(query)
                    console.log(row)
                    await client.end();
                    break;

                default:
                    console.log("Error.");
                
            }
            break;

        case 'd':
            tableToPrint.printTable()
            const rowId = prompt("Delete row id: ")
            const deleteQuery = await client.query(`DELETE FROM passwords WHERE id = ${rowId}`);
            console.log(deleteQuery);
            await client.end();
            break;

        case 'r':
            tableToPrint.printTable();
            await client.end();
            break;

        default:
            tableToPrint.printTable()
            console.log("Error");
    }
})();
