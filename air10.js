const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

const toPyramide = (element, nbStage) =>{
    let resultArray = [];
    let addSpace = 2;

    for(i=0; i < nbStage; i++){
        let tempString = "";
        for(j=0; j < nbStage*2-1-i*2; j++){
            tempString += element;       
        }
        resultArray.push(tempString)
        resultArray[i] = resultArray[i].padStart(resultArray[i].length + addSpace/2, " ").padEnd(resultArray[i].length + 2 * addSpace/2, " ");
        addSpace += 2;
    }
    return resultArray.reverse().join('\n');
}

if (require.main === module){
    // Error Handling
    const hasMinArgsCount = myTools.checkArgumentCount(2, commandLineArgs);
    if (!hasMinArgsCount) {
        console.log("Veuillez entrer le caractère qui servira à afficher votre pyramide, ainsi que le nombre d'étages souhaité.");
    } else {
        // parsing
        const element = commandLineArgs[2];
        const nbStage = commandLineArgs[3];
        // display
        console.log(toPyramide(element,nbStage));
    }
}

module.exports = {
    toPyramide
}