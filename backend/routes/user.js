const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

router.get('/',(req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

// var id = '61a72e9a32826418041a1bdd'

// User.findById(id, (err,doc) => {
//     if(err){
//         console.log('err')
//     }else{
//         console.log(doc)
//     }
// })

router.post('/add',(req, res) => {
    console.log(req.body)
    const userName = req.body.userName;

    const newUser = new User({userName});

    newUser.save()
        .then(() => res.json('User added successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;