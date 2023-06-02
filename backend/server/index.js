const passport = require("passport")
const express = require("express")
const db = require("../database")
const app = express();
const bodyParser = require("body-parser")

db();

const PORT = 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(passport.initialize());


app.listen(PORT, ()=>console.log("Express started, backendApis"))

