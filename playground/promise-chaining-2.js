require('../src/db/mongoose')
const { findByIdAndDelete } = require('../src/models/task')
const Task = require('../src/models/task')

const id = "5f5929fd7535cce1ff6f1bc0"

// Task.findByIdAndDelete(id).then(task => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then(result => console.log(result)).catch((e) => console.log(e))

// Task.deleteMany({ description: "teat"}, (err, res) => {
//     if (err) {
//         res.send(err)
//     }
// })

const deleteTaskAndCount = async (id) => {
    
    deletedTask = await Task.findByIdAndDelete(id)
    if (deletedTask === null) {
        return `Cannot find task id ${id}... please try again with a differed task id.`
    }
    count = await Task.countDocuments({completed: false})
    return {deletedTask, count}
}

deleteTaskAndCount(id).then(task => console.log(task)).catch(e => console.log(e))
