const express = require('express');
const jwtoken = require('jsonwebtoken');
const router = express.Router();
require('../db/conn')
const User = require('../model/userSchema')


router.get('/', (req, res) => {
    res.send("App is running from backend")
})


//Register route

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill the field properly" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password and confirm password should be match" })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword })

            const userRegister = await user.save()
            if (userRegister) {
                return res.status(201).json({ message: "User registered successfully" })
            }
        }

        //hashing password field


    } catch (err) {
        console.log(err);
    }


})


//login route`
router.post('/signin', async (req, res) => {
    res.send("Hello from backend")
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Invaid detail" })
        }

        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
           const token = await userLogin.generateAuthToken()
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })


            if (!isMatch) {
                res.status(400).json({ error: "Invalid credientals" })
            } else {
                res.json({ message: "user Signin Successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid credientals" })
        }


    } catch (err) {
        console.log(err);
    }
})
module.exports = router