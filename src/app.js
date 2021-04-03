/*
* Fichero: 
* Autor:
* Fecha: 
*/
import express from "express";
import config from "./config";
const app = express();

// Config
config(app);

app.listen(5000, () =>
  console.log("El servidor ha sido inicializado: http://localhost:5000 😎")
);