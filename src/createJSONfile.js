

const CSVtoJSON = require('csvtojson');
const writeFile = require('fs').writeFile;
const exists = require('fs').exists;
const fileInput = 'U:\\Professional\\GitHub\\reto-individual\\Nodejs-MongoDB-Asteroides\\src\\asteroids.csv';
const fileOutput = 'U:\\Professional\\GitHub\\reto-individual\\Nodejs-MongoDB-Asteroides\\src\\asteroids.json';

exists(fileOutput, (error) =>{
    //Si da error el fichero existe
    if(error){
        console.error('JSON file already exist');
    }else{
        CSVtoJSON().fromFile(fileInput)
        .then(asteroids => {
            
            writeFile(fileOutput, JSON.stringify(asteroids), (error) => {
                if(error){
                    throw error;
                }

                console.log('JSON File is saved');
            });
        })
        .catch(error => {
            console.error(error);
        }

        );

    }
});