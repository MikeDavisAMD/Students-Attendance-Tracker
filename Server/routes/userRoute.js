require('dotenv').config()
const express = require('express');
const User = require('../models/User');
const router = express.Router()
const jwt = require('jsonwebtoken')
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD
//     }
// })

// const setPassword = async (email, username, link) => {
//     const mailOptions = {
//         from: '"studentattendancetracker" studentattendancebymike@gmail.com',
//         to: email,
//         subject: 'Create new password for teacher account',
//         text: `Hi ${username}!! Please create new password`,
//         html: `
//             <div style="
//                 font-family: system-ui, sans-serif, Arial;
//                 font-size: 14px;
//                 color: #242F6C;
//                 padding: 20px 14px;
//                 background-color: #EFEDEB;
//             ">
//                 <div style="max-width: 600px; margin: auto; background-color: #FFFFFF">
//                     <div style="text-align: center; background-color: #F2E053; padding: 14px">
//                         <div style="display: flex; justify-content: center; gap: 20px;">
//                             <div>
//                                 <img style="height: 72px; vertical-align: middle" height="72px"
//                                     src="https://res.cloudinary.com/du4dkz2n8/image/upload/v1769060556/logo_mjzyer.png"
//                                     alt="logo" />
//                             </div>
//                             <div style="display: flex; flex-direction: column; align-items: flex-start;">
//                                 <h1 style="font-style: oblique; margin: 0;">Attendance</h1>
//                                 <h2 style="font-style: italic; margin: 0; color: #CD2C2C;">Tracking Application</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div style="padding: 14px">
//                         <h1 style="font-size: 22px; margin-bottom: 26px; color: #242F6C;">Please create a new password</h1>
//                         <p style="color: #CD2C2C;">
//                             To continue with your teacher account with <span style="color: #242F6C; font-weight: bold;">${username}</span> you need to set new password. To proceed,
//                             please click the
//                             link below to create a new password:
//                         </p>
//                         <p>
//                             <a href="${link}" style="text-decoration: none; color: #242F6C; font-weight: 500;">${link}</a>
//                         </p>
//                         <p style="color: #CD2C2C;">This link will expire in one hour.</p>
//                     </div>
//                 </div>
//                 <div style="max-width: 600px; margin: auto">
//                     <p style="color: #79B8C8">
//                         The email was sent to ${email}
//                     </p>
//                 </div>
//             </div>
//         `
//     }

//     await transporter.sendMail(mailOptions)
// }

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body

        const exUser = await User.findOne({ $or: [{ username }, { email }] })
        if (exUser) return res.status(422).json({ message: "User already exists" })

        const user = new User({ email, username, password, role: "admin" })
        await user.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(201).json({ message: `User registered as ${user.role} successfully`, token })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password, remember } = req.body

        const user = await User.findOne({ $or: [{ username: username }, { email: username }] })
        if (!user) return res.status(400).json({ message: "Invalid Username or Password" })

        const pw = await user.matchPassword(password)
        if (!pw) return res.status(400).json({ message: "Invalid Username or Password" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: remember ? '30d' : '1d' })

        res.status(200).json({
            token, user: { id: user._id, username: user.username, password: user.password, role: user.role }
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router