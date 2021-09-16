// const express = require('express');
// const app = express();
//
// app.get("/", (req, res) => {
//     res.send('Helloooo!');
// });
//
// app.get("/paramRequest", (req, res) => {
//       res.send(req.query);
// });
//
// app.listen(8080, () => {
//     console.log('Example.......')
// })

//****************************

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema; //схема

const taskScheme = new Schema({
    text: String,
    isCheck: Boolean
});

const uri = "mongodb+srv://user_01:CK9qTqZ@cluster0.ijpew.mongodb.net/TestAppDB?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUriParser: true, useUnitedTopology: true});

const Task = mongoose.model("tasks", taskScheme);
app.get("/", (req, res) => {
   const task = new Task({
       text: 'First task',
       isCheck: false
   });
   task.save().then(result => {
       res.send(result);
   });

   // res.send('Helloooo!');
});

app.get("/paramRequest", (req, res) => {
      res.send(req.body);
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});






















//mongodb+srv://user_01:<password>@cluster0.ijpew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//or

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://user_01:<password>@cluster0.ijpew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });



//
// Результаты перевода
// Выберите ваш драйвер и версию
//
// ВЕРСИЯ ВОДИТЕЛЯ
// Node.js
// 4.0 или новее
// Добавьте строку подключения в код приложения
// Включить полный пример кода драйвера
// mongodb + srv: // user_01: <password> @ cluster0.ijpew.mongodb.net / myFirstDatabase? retryWrites = true & w = большинство
//
// Замените <password> паролем пользователя user_01. Замените myFirstDatabase именем базы данных, которую соединения будут использовать по умолчанию. Убедитесь, что все параметры параметров закодированы в URL-адресе.