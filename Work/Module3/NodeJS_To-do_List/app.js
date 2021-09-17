const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require("./src/modules/routes/routes");

//////////app.use(cors());

const uri = "mongodb+srv://user_01:CK9qTqZ5@cluster0.ijpew.mongodb.net/TestAppDB?retryWrites=true&w=majority"
mongoose.connect(uri);

//////////app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
})