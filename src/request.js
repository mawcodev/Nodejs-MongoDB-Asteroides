import Asteroid from './models/asteroids';

let asteroidRequest = {
    saveDataAsteroid: async (req, res) => {
        const data = req.body;
        try{
            const saveAsteroid = await Asteroid.create(data);
            res
                .status(201)
                .json(saveAsteroid);
        }catch(error){
            res
                .status(500)
                .json({
                    message: error
                });
        }
    }
};

export default asteroidRequest;