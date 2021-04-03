/*
* Fichero: app.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
*/
import express from "express";
import config from "./config";
import router from "./router";

const app = express();

// Config
config(app);

//Router
router(app);

app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT} 😎`)
);