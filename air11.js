const { exit } = require('process');
const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

const quickSort = inputArray => {
    let smaller = [];
    let greater = [];
    let pivot = inputArray[Math.floor(Math.random() * inputArray.length)];

    if(inputArray.length <= 1){
        return inputArray;
    }

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] < pivot){
            smaller.push(inputArray[i])
        }else if (inputArray[i] > pivot){
            greater.push(inputArray[i]);
        }
    }

    const sortedSmaller = quickSort(smaller);
    const sortedGreater = quickSort(greater);

    return [...sortedSmaller, pivot, ...sortedGreater]
}

if (require.main === module){
    // Error Handling
    const hasMinArgsCount = myTools.checkMinArgumentCount(1, commandLineArgs);
    const inputIntArray = myTools.getArgumentsIntoIntegerArray(commandLineArgs)

    if (!hasMinArgsCount) {
        console.log("Veuiller saisir au moins 1 éléments.");
        process.exit;
    } else if (inputIntArray === null){
        console.log("Veuillez saisir uniquement des nombres.");
        process.exit;
    } else {
        console.log(quickSort(inputIntArray));
    }
}

module.exports = {
    quickSort
}