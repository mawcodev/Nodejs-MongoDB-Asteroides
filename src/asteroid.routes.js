/*
* Fichero: asteroid.router.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
*/

import express from 'express';
import Request from './request';

const router = express.Router();

router.get('/get-all-asteroid', Request.getAllAsteroid);
router.post('/save-asteroid', Request.saveAsteroid);
router.get('/get-asteroid/:id', Request.getAsteroid);
router.delete('/delete-asteroid/:id', Request.deleteAsteroid);
router.put('/update-asteroid/:id', Request.updateAsteroid);



export default router;
