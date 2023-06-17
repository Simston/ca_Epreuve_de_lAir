const fs = require('fs');

const fileName = process.argv[2];

if(!fileName){
    console.log("Veuillez fournir le nom du fichier en tant qu'argument.");
    process.exit(1)
}

fs.readFile(fileName, 'utf8', (err, data) => {
    if(err){
        console.error("Une erreur s'est produite lors de la lecture du fichier : ${err}");
        process.exit(1);
    }
    console.log(data);
});