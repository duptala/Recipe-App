const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (user) {
        return res.json({ message: "user existed" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashPassword });
    await newUser.save();

    return res.json({ message: "new record saved" });
});

router.post('/login', async (req,res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username});
    if(!user) {
        return res.json({message: "wrong credentials"});
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) {
        return res.json({message: "wrong password"});
    }
    const token = jwt.sign({id: user._id}, "secret");
    res.cookie("token", token);
    return res.json({message: "successful login!", id: user._id});
});

module.exports = router;
