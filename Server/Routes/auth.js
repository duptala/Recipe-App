const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

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

module.exports = router;
