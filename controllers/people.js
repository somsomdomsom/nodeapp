let {people} = require('../data')
console.log(people);
const getPerson = (req, res) =>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(404).json({success: false})
    }
    res.status(201).json({success:true, person:name})
}

const postman = (req,res)=>{
    const {name} = req.body
    if(!name){
        res.status(404).json({success:false, msg: 'The user with the name does not exist'})
    }
    res.status(201).json({success:true, data: [...people,name]})
}

const updateUser = (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => (person.id) === Number(id))
    if(!name){
        return res.json({success:false,msg:`Person with id ${id} does not exist`}).status(404)
    }
    person.name = name;
    res.status(200).json({success:true,msg:`The name of the person has been updated with id ${id}`})
}

const deleteUser =(req, res) =>{
    const person = people.find((person) => (person.id) === Number(req.params.id))
    if(!person){
        res.status(404).json({success:false, msg:`Person with id ${req.params.id} does not exist`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    res.status(200).json({success:true, data:newPeople})
}

module.exports = {getPerson,createPerson,postman,updateUser,deleteUser}