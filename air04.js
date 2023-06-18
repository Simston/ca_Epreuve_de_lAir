const MyTools = require('./MyTools');
const myTools = new MyTools();
const COMMAND_LINE_ARGS = process.argv;
let showErrorMessage = true;

const addOrSous = (argsArray) =>{
    let resultArray = [];
    const { inputArray, separator } = getArgumentsIntoIntegerArray(argsArray);
    let sign = separator.charAt(0);
    let number = parseInt(separator.slice(1));

    for(let i=0; i < inputArray.length; i++){

        if (sign === "+"){
            resultArray.push(inputArray[i] + number); 
        } else if (sign === "-"){
            resultArray.push(inputArray[i] - number); 
        }else{
            console.log("Le signe n'est ni '+' ni '-'");
            break;
        }
    }
    return resultArray;
}

/**
 * Get the arguments array without undesirable information
 * @param {any[]} args - Arguments array to check.
 * @returns {{ inputArray: any[], separator: any }} - Returns an object containing the final array (inputArray) and separator.
 */
const getArgumentsIntoIntegerArray = args => {
    let inputArray = [];
    let separator;

    for( let i = 2; i < args.length ; i++){

            if(i === args.length-1){
                separator = args[i];
            }else{
                inputArray.push(parseInt(args[i]));
            }
    }
    return {inputArray, separator};
}

// Error Handling
// Check if the file is executed directly
if (require.main === module) {
    // Error Handling
    const MIN_ARGS_COUNT_CHECK = myTools.checkMinArgumentCount(2, COMMAND_LINE_ARGS);

    if (MIN_ARGS_COUNT_CHECK) {
        console.log(addOrSous(COMMAND_LINE_ARGS));
    } else {
        if (showErrorMessage) {
        console.log("Veuillez entrer au moins un nombre ainsi qu'un opérateur d'addition ou soustraction suivi d'un chiffre.");
        }
    }
}


module.exports = {
    getArgumentsIntoIntegerArray,
    addOrSous,
    setShowErrorMessage: value => {
        showErrorMessage = value;
    }
};