/*
npm install readline-sync
npm install readline
npm install prompt-sync -> the one I will be using

Source: https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
*/

const prompt = require('prompt-sync')({ sigint: true }); // required to avoid the below error
/*
The error represents that it is expecting autocomplete. With signint: true, it will wait for the user to reply
TypeError: Cannot create property 'autocomplete' on string 'Enter username if any: '
    at create (C:\Users\DhanyaB\node_modules\prompt-sync\index.js:24:42)
    at Object.<anonymous>
1. how to do automcomplete and how does it look like.
2. email domain is correct
3. password encryption
4. expiration must be either date / count of 90 days. 
5. email to remind the expiration
*/

var username = prompt("Enter username if any: ") // any conditions / uniqueness against db 
var email = prompt("Enter email if associated: ")
var password = prompt("Enter password provided: ")
var expiration = prompt("Enter expiration of password if you know: ")
console.log(`${username}, ${email}, ${password}, ${expiration}`)

