const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

const restuarantRouter = require('./routes/restaurant')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('',restuarantRouter)

app.listen("3001",()=>{
    console.log("http://127.0.0.1:3001");
})