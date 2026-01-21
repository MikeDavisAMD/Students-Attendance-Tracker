const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: {type: String, required: true},
    password: {type: String, required: true},
}, {timestamps: true})

// Hashing Passwords
adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch (error) {
        next(error)
    }
})

// comparing passwords
adminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('Admin', adminSchema)