require('./config/config');

const express = require('express');

// Using Node.js `require()`
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//importa el userController para poder hacer el enlace 
app.use(require('./routesController/usuarioContoller'));






// Connect to mongoDB
mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then((result) => console.log("Base de datos ONLINE"))
    .catch((err) => { console.log('Error connecting to Mongo', err); });



app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);
});