/*
* Fichero: router.js
* Autor: Matthew Conde Oltra
* Fecha: 03/04/2021
*/
import asteriodRoutes from './asteroid.routes';
export default(app) => {

    /*app.get('/', async (req, res) => {

        res.send('Primera ruta 💻');
    });*/

    app.use('/', asteriodRoutes); 
}