const express = require('express')
const mongoose = require('mongoose')
const beerRoutes= require('./routes/beer')
const app = express()
require("dotenv").config();

//app initialize
app.use(express.json());

//database
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})
const connection = mongoose.connection
connection.once("open",()=>{
    console.log("database established");
})

app.use("/beer", beerRoutes)

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server starting at ${PORT}`));

module.exports = app;

