const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

let name;

const table = `CREATE TABLE people (id int not null auto_increment, name varchar(255), primary key(id))`;
const insert = `INSERT INTO people (name) values('Marcondes')`;
const all = `SELECT * FROM people`


connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to nodedb");
    connection.query(`SHOW TABLES`, (err, result) => {
        if (err) throw err;
        if (result.length <=0) {
            connection.query(table, (err, result) => {
                if (err) throw err;
                console.log("Table created");
            });
            connection.query(insert, (err, result) => {
                if (err) throw err;
                console.log("Value inserted into table");
            });
            connection.query(all, (err, result) => {
                if (err) throw err;
                console.log(result[0].name);
                name = result[0].name;
            });
        } else {
            console.log(result);
            connection.query(all, (err, result) => {
                if (err) throw err;
                console.log(result[0].name);
                name = result[0].name;
            });
        };
    }); 
});


app.get('/', (req, res) => {
    res.write('<h1>Full Cycle Rocks!</h1>');
    res.write(`<p>${name}</p>`);
    res.end();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
})