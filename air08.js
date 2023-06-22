const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

const myRotation = inputArray => {
    let tmp = "";
    tmp = inputArray.shift(); // Remove and stock first element
    inputArray.push(tmp); // Push the first element at the end of array
    return inputArray;
}

const getArgumentsIntoArray = args => {
    let inputArray = [];

    for( let i = 2; i < args.length ; i++){
        inputArray.push(args[i]);
    }
    return inputArray;
}

// Error Handling
const hasMinArgsCount = myTools.checkMinArgumentCount(3, commandLineArgs);
if (!hasMinArgsCount) {
    console.log("Veuillez entrer au moins 3 éléments.");
} else {
    // parsing
    const inputArray = getArgumentsIntoArray(commandLineArgs)
    // display
    console.log(myRotation(inputArray));
}

module.exports = {
    myRotation
}