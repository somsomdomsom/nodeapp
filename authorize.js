const authorize = (req,res,next) => {
    console.log(req.query);
    const {user} = req.query.user
    const {surname} = req.query.surname
    if(req.query.user == 'john' || req.query.surname =='depda'){
        req.user = { name: 'john', id: 1}
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
    
}
module.exports = authorize