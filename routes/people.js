const express = require('express')
const router = express.Router()

const {getPerson,createPerson,postman,updateUser,deleteUser,} = require('../controllers/people')

router.get('/', getPerson)

router.post('/', createPerson)

router.post('/postman', postman)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports= router