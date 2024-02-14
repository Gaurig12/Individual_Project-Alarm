const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Routes = require('./routes/route')
const http = require('http');
const port = 3000;
const fs = require('fs') 

dotenv.config();
app.use(express.json());

app.use('/', Routes);
app.get('/readData',function(req,res){ 
    res.sendFile(__dirname+'/index.html') 
}) 

app.listen(3000, () => {
    console.log(`server is listening in port 3000`)
})

