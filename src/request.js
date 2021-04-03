const Neas = require('./models/neas.model');
const User = require('./models/user.model');

let Request = {

    /*
    *   ---------------- NEAS ----------------
    *   Peticiones para el modelo de Neas
    */
    addListAsteroid: async (req, res) => {
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
    /*
    *   ---------------- USER ----------------
    *   Peticiones para el modelo de User
    */
    addListUser: async (req, res) => {
        const data = req.body;
        console.log(data);
        try{
            const saveUser = await User.create(data);
            console.log(saveUser);
            res
                .status(201)
                .json(saveUser);
        }catch(error){
            console.error(error);
            res
                .status(500)
                .json({
                    message: error
                });
        }
    },

    getAllUser: async (req, res) => {
        try{
            const users = await User.find();
            res
                .status(201)
                .json(users);
        }catch(error){
            console.error(error);
            res
                .status(500)
                .json({
                    message: error
                });
        }
    },

    getUser: async (req, res) => {
        const _id = req.params.id;
        
        try{
            const user = await User.findOne({_id});
            res
                .status(201)
                .json(user);
        }catch(error){
            console.error(error);
            res
                .status(500)
                .json({
                    message: error
                });
        }
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;
        try{
            const deletedUser = await User.findByIdAndDelete(id);

            if(!deletedUser){
                return res
                    .status(404)
                    .json({
                        message: error
                    });
            }
            
            res.json(deletedUser);

        }catch(error){
            console.error(error);
            res
                .status(400)
                .json({
                    message: error
                });
        }
    },
    
    updateUser: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        console.log(id);
        console.log(data);
        try{
            const UpdatedUser = await User.findByIdAndUpdate(id, data);
            
            if(!UpdatedUser){
                return res
                    .status(404)
                    .json({
                        message: 'Error'
                    });
            }
            
            res.json(UpdatedUser);

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