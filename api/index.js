const express = require('express');
const app = express();
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/jobs',async(req,res) =>{
    const jobs = await getAsync('github');
    // console.log(JSON.parse(jobs).length);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(jobs);
})



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`App listening to port ${PORT}`)
})