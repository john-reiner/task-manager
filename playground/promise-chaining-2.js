require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = "5f5134bbea215457a0d6ead1"

Task.findByIdAndDelete(id).then(task => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then(result => console.log(result)).catch((e) => console.log(e))