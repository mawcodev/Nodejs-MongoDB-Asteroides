/*
* Fichero: config.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
* Descripción: Contiene la configuración del proyecto de nodejs
*/
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export default (app) => {
  
  app.disable('x-powered-by'); // Esta línea de código sirve para esconder que se está utilizando Nodejs

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(morgan("dev"));

}