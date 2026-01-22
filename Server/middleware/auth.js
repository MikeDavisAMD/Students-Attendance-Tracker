const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/BlacklistToken')

const auth = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    }
    //split(' ') <-- space between quotes is important or it causes no token found error 

    if (!token) return res.status(400).json({ error: "Token not found" })

    const blacklistedToken = await BlacklistToken.findOne({ token })
    if (blacklistedToken) return res.status(500).json({ message: "Token has Expired due to logout" })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()
    } catch (error) {
        res.status(500).json({ error, message: "Invalid Token" })
    }
}

module.exports = auth