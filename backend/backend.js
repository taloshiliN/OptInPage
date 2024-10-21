const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const Joi = require('joi');
const helmet = require('helmet')

const corsOptions = {
    origin: ["http://localhost:5173"],
}

const app = express();
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Establishing a connection to the mysql database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "optin_page_db"
});

db.connect(err => {
    if (err){
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
})

//CRUD operations
//Adding the name and email to the database
app.post("/api/user", (req, res) =>{

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required()
    })
    const {error} = schema.validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});

    const {name, email} = req.body;

    db.query(
        "INSERT INTO users_tbl (name, email) VALUES (?,?)",
        [name, email],
        (err, result) => {
            if(err){
                console.error("Database error:", err);
                return res.status(500).json({error: "Database insertion failed"});
            }
            const newUser = {
                id: result.insertId,
                name: name,
                email: email
            };
            return res.json(newUser);
        }
    )
})

app.listen(8080, ()=> {
    console.log("Server started on port 8080")
})