const express = require('express')
const app = express()

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
}

app.get('/',logger, (req,res) => {
    res.send('home')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.listen(5000, ()=>{
    console.log("The server is running on port 5000...");
})