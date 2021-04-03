const Neas = require('./models/neas.model');


let Request = {

    /*
    *   ---------------- NEAS ----------------
    *   Peticiones para el modelo de Neas
    */
    saveAsteroid: async (req, res) => {
        const data = req.body;
        console.log(data);
        try{
            const saveAsteroid = await Neas.create(data);
            console.log(saveAsteroid);
            res
                .status(201)
                .json(saveAsteroid);
        }catch(error){
            console.error(error);
            res
                .status(500)
                .json({
                    message: error
                });
        }
    },

    getAllAsteroid: async (req, res) => {
        try{
            const asteroids = await Neas.find();
            res
                .status(201)
                .json(asteroids);
        }catch(error){
            console.error(error);
            res
                .status(500)
                .json({
                    message: error
                });
        }
    },

    getAsteroid: async (req, res) => {
        const _id = req.params.id;
        
        try{
            const asteroid = await Neas.findOne({_id});
            res
                .status(201)
                .json(asteroid);
        }catch(error){
            console.error(error);
            res
                .status(500)
                .json({
                    message: error
                });
        }
    },

    deleteAsteroid: async (req, res) => {
        const id = req.params.id;
        try{
            const deletedAsteroid = await Neas.findByIdAndDelete(id);

            if(!deletedAsteroid){
                return res
                    .status(404)
                    .json({
                        message: error
                    });
            }
            
            res.json(deletedAsteroid);

        }catch(error){
            console.error(error);
            res
                .status(400)
                .json({
                    message: error
                });
        }
    },
    
    updateAsteroid: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        console.log(id);
        console.log(data);
        try{
            const UpdatedAsteroid = await Neas.findByIdAndUpdate(id, data);
            
            if(!UpdatedAsteroid){
                return res
                    .status(404)
                    .json({
                        message: 'Error'
                    });
            }
            
            res.json(UpdatedAsteroid);

        }catch(error){
            console.error(error);
            res
                .status(400)
                .json({
                    message: error
                });
        }
    },

    
};

export default Request;