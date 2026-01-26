# Project 1: Password Manager

Sources Table:
|  SID  |  How it helped?  |  Link to the Source  |  Remarks  |

|--------|------------------|-------------------------|------------------------------------|
|  1  |  Connecting and Querying DB  |  [NorthFlank - https://dev.to/caspergeek/how-to-use-require-in-ecmascript-modules-1l42](https://northflank.com/guides/connecting-to-a-postgresql-database-using-node-js)  |   |
|  2  |  Reset my password for DB |  [PostgreSQL Default Password: How to View, Set, and Change](https://phoenixnap.com/kb/postgresql-default-password)  |  
<ul>
<li>Go to C:\Program Files\PostgreSQL\17\data\pg_hba.conf</li> 
<li>Change scram-sha-256 to trust </li>
<li>Windows -> Services -> restart PostgreSQL</li>
<li>ALTER USER postgres PASSWORD 'new_secure_password'; | Result should be ALTER ROLE</li>
</ul>  |
|  3  |  Getting input from User  | [Getting User Input](https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console)  |  I discovered prompt-sync and understood async, await and Promise |
|  4  |  Adding type : "module" / in C:\Users\DhanyaB\package.json  |[DevCommunity](https://dev.to/caspergeek/how-to-use-require-in-ecmascript-modules-1l42)|  Helped overcome this error: "ReferenceError: require is not defined in ES module"  |
|  5  |  Markdown guide  | [Markdown Guide](https://dev.to/caspergeek/how-to-use-require-in-ecmascript-modules-1l42)  |   |