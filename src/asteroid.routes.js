/*
* Fichero: asteroid.router.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
*/



import express from 'express';
import AsteroidRequest from './request';

const router = express.Router();

router.post('/save-asteroid', AsteroidRequest.saveDataAsteroid(data));


export default router;