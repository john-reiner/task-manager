const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String, 
        required: true,
        trim: true,
        validate(value) {

            if (value.length < 6) {
                throw new Error("Password must be at least 6 characters")
            }

            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot include "password"')
            }
        }
    },  
    email: {
        type : String,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not a valid email")
            }
        },
        trim : true
    },
    age : {
        type: Number,
        default: 0, 
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    }
})

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User