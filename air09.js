const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const fileName = process.argv[2];

const readFileEx = fileName => {
    return new Promise((resolve, reject) => {
        if(!fileName){
            reject(new Error("Veuillez fournir le nom du fichier en tant qu'argument."));
            return;
        }
        
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err){
                reject(new Error(`Une erreur s'est produite lors de la lecture du fichier : ${err}`));
                return
            }
            resolve(data);
        });
    });
};

if (require.main === module) {
    readFileEx(fileName)
    .then((data)=> {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
    
}

module.exports = {
    readFileEx
}