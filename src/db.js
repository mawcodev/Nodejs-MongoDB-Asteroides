/*
* Fichero: db.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
*/
import mongoose from "mongoose";

let uri = process.env.MONGO_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

mongoose.Promise = global.Promise;

mongoose.connect(uri, options)
    .then(() => {
        console.log("Conexión satisfactoria 💾");
    })
    .catch(err => {
        console.error(err);
    });