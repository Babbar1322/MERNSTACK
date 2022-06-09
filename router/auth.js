const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const verify = require('./verify');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

require('../data/connect');
const User = require('../data/userSchema');

// Signup
router.post('/signup', async (req, res) => {
    const {name, email, password, role} = req.body;

    if(!name || !email || !password){
        return res.status(422).json({error: 'Please fill all fields!'});
    }
    // res.json({message: req.body})

    try {
        const isUser = await User.findOne({email: email})
        if(isUser){
            return res.status(422).json({error: 'E-Mail Already Registered!'})
        }

        const user = new User({name, email, password});

        await user.save();

        // if(userRegistered){
            res.status(201).json({message: 'User Saved Successfully!'});
        // }else{
        //     res.status(500).json({error: 'Failed To Register!'});
        // }
    } catch (err) {
        console.log(err);
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return (res.status(400).json({error: 'Please fill all fields!'}))
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2592000000),
                httpOnly: true
            })

            if(!isMatch){
                res.status(400).json({error: "Invalid Details!"});
            }else{
                res.json({message: "Login Success"})
            }
        }else{
            res.status(400).json({error: "Invalid Details!"});
        }

    } catch (err) {
        console.log(err)
    }
})

router.get('/about', verify, (req, res) => {
    res.send(req.rootUser);
})

router.get('/getdata', verify, (req, res) => {
    res.send(req.rootUser);
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
       res.status(200).send("user logout ");
  });

module.exports = router;