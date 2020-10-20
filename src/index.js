const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send('GET Requests are disabled')
//     } else {
//         next()
//     }
// })

app.use((req, res, next) => {
    if (req.method) {
        res.status(503).send('Server is down')
    }
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is on port : ', port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismysecret', {expiresIn: '1 days'})
//     const data = jwt.verify(token, 'thisismysecret')
//     console.log(data)
// }

// myFunction()