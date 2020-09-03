const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex: true,
})

const User = mongoose.model('User', {
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

// const me = new User({
//     name: '  John   ',
//     password: '  passssword  ',
//     email : 'john@gmail.com'
// })

// me.save().then(response => console.log(me)).catch(error => console.log(error))



const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim : true,

    },
    completed: {
        type: Boolean,
        default : false 
    }
})

const task1 = new Task({description: '       Go to the gym.'})

task1.save().then(Response => console.log(task1)).catch(error => console.log(error))