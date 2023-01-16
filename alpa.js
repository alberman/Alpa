
//jshint esversion:8

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mariadb = require("mariadb");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
  console.log("serverstarted on port 3000");
});

//INSERIMENTO SOCIETA' ->

// function insertSociet () {
//   mariadb
//     .createConnection({
//       host: "localhost",
//       user: "root",
//       password: "Daitai22$",
//       database: "alpa",
//     })

//     .then((conn) => {
//       async function insertRow() {
//         const rows = await conn.query(
//           "INSERT INTO societ VALUES (?, ?, ?, ?, ?)",
//           [1, "società random", 0, 0, "NO"]
//         );
//         console.log(rows);
//       }

//       insertRow();
//       console.log("connected ! connection id is " + conn.threadId);
//     })

//     .catch((err) => {
//       console.log("not connected due to error: " + err);
//     });
// }


// OPEN AI


let conn;
let ciao;

async function connect() {
  conn = await mariadb.createConnection({
    host: "localhost",
    user: "root",
    password: "Daitai22$",
    database: "alpa",
  });
}

async function main() {
  await connect();

  async function getRows() {
    const rows = await conn.query("SELECT MAX(codsoc) FROM societ");
    //console.log(rows); // [{...}, {...}, ...]
    return rows;
  }

  return await getRows();
 
}

async function logger() {
  const rows = await main();
  console.log(rows); // [{...}, {...}, ...]
  //$(".codSocLabel").text("Codice Società:66 ");
}

logger();





