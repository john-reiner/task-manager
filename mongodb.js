const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'John', 
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jess',
    //         age: 29
    //     },
    //     {
    //         name: 'Dave',
    //         age: 31
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         description: 'Apply to 3 jobs by Wednesday.', 
    //         completed: false
    //     },
    //     {
    //         description: 'Wake up at 4am every day this week.', 
    //         completed: false
    //     },
    //     {
    //         description: 'Go to the gym 5 out of 7 days this week.', 
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('cannot get docs!')
    //     }

    //     console.log(result.ops)

    // })




})