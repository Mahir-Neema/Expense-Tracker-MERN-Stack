const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(e=>res.status(400).json('Error: '+ e));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({username}); 

    newUser.save()
        .then(()=> res.json('user added!'))
        .catch(e => res.status(400).json('Error: '+ e));
});

module.exports = router;
