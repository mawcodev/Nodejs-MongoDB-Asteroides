/*
* Fichero: asteroid.router.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
*/

import express from 'express';
import Request from './request';

const router = express.Router();

/*
*   ---------------- NEAS ----------------
*   Peticiones para el modelo de Neas
*/

router.get('/get-all-asteroid', Request.getAllAsteroid);
router.post('/save-asteroid', Request.addListAsteroid);
router.get('/get-asteroid/:id', Request.getAsteroid);
router.delete('/delete-asteroid/:id', Request.deleteAsteroid);
router.put('/update-asteroid/:id', Request.updateAsteroid);

/*
*   ---------------- User ----------------
*   Peticiones para el modelo de Neas
*/

router.get('/get-all-user', Request.getAllUser);
router.post('/save-user', Request.addListUser);
router.get('/get-user/:id', Request.getUser);
router.delete('/delete-user/:id', Request.deleteUser);
router.put('/update-user/:id', Request.updateUser);

export default router;
