const express = require('express')
const router = express.Router()
let {people} = require('../data')

router.post('/', (req,res)=> {
    const name = req.body.name;
    if(name){
        res.send(`welcome ${name}`)
    }
    else{
        res.send("Please enter username")
    }
})

module.exports =router