const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');




//configure enviroment variables
dotenv.config();



//create connectionsc
const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
    //test connection
db.connect((err) => {
    if (err) {
        return console.log("error connectioning to the database", err)
    }
    console.log("succefuly connected to mysql", db.threadId)

})


//retrive all patients
app.get('', (req, res) => {
    const getPatients = "SELECT*FROM patients"
    db.query(getPatients, (err, data) => {
        if (err) {
            return res.status(400).send("failed to get data", err)
        }

        res.status(200).send(data)
    })
})


//retrive all providers
app.get('', (req, res) => {
    const getPatients = "SELECT *FROM providers"
    db.query(getPatients, (err, data) => {
        if (err) {
            return res.status(400).send("failed to get data", err)
        }

        res.status(200).send(data)
    })
})


//filter all first name for providers
app.get('', (req, res) => {
    const getPatients = "SELECT  first_name *FROM providers"
    db.query(getPatients, (err, data) => {
        if (err) {
            return res.status(400).send("failed to get data", err)
        }

        res.status(200).send(data)
    })
})

// listen to the server
app.listen(3300, () => {
    console.log(`server is runnig on port 3300...`)
})