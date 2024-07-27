require('dotenv').config();
const express = require('express');
const cors = require('cors');


const server = express();


server.use(cors());

server.get('/' , (req , res) =>
{
    res.send("<h1> HELLO WORLD </H1>");
})


server.listen(process.env.PORT || 8080 , ()=>
{
    console.log(`server connected to ${process.env.PORT} port`);
} )