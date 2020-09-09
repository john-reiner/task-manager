require('../src/db/mongoose')
const User = require('../src/models/user')

const id = "5f57fe00cc7b92ab4609fcfd"

User.findByIdAndUpdate(id, {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age:1})
}).then((result) => {
    console.log(result)
}).catch(e => console.log(e))

