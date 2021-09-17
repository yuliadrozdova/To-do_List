const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
    Task.find().then(result => {
        res.send({data: result});
    });
}

module.exports.createNewTask = (req, res, next) => {
    const task = new Task(req.body);
    task.save().then(result => {
        res.send('Task created');
    }).catch(err => console.log(err));
}

module.exports.changeTaskInfo = (req, res, next) => {
    Task.updateOne({text: 'First task'}, {text: 'First task-2'}).then(result => {
        res.send('Task updating');
    })
}

module.exports.deleteTask = (req, res, next) => {
    Task.deleteOne({text: "First task"}).then(result => {
        res.send('Task deleted');
    })
}