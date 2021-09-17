const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema; //схема

const taskScheme = new Schema({
    text: String,
    isCheck: Boolean
});

const Task = mongoose.model("tasks", taskScheme);

//app.use(cors());

const uri = "mongodb+srv://user_01:CK9qTqZ5@cluster0.ijpew.mongodb.net/TestAppDB?retryWrites=true&w=majority"
mongoose.connect(uri);

//app.use(bodyParser.json());

app.get('/allTasks', (req,res) => {
    Task.find().then(result => {
        res.send({data: result});
    });
});

app.post('/createTask', (req,res) => {
    const task = new Task(req.body);
    task.save().then(result => {
        res.send('Task created');
    })
});

app.delete('/deleteTask', (req,res) => {
    Task.deleteOne({text: "First task"}).then(result => {
        res.send('Task deleted');
    })
});

app.put('/updateTask', (req,res) => {
    Task.updateOne({text: 'First task'}, {text: 'First task-2'}).then(result => {
        res.send('Task updating');
    })
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});

//*************************************************************
// app.get("/", (req, res) => {
//    const task = new Task({
//        text: 'Second task',
//        isCheck: false
//    });
//    task.save().then(result => {
//        res.send(result);
//    }).catch(err => console.log(err))
//
// });
//
// app.get("/paramRequest", (req, res) => {
//     Task.find().then(result => {
//         res.send({data: result});
//     })
// });
//
// app.post("/", (req, res) => {
//     res.send('post /')
// });
//
// app.put("/", (req, res) => {
//     res.send('put /')
// });
//
// app.delete("/", (req, res) => {
//     res.send('delete /')
// });