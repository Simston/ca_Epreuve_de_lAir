const MyTools = require('./MyTools');
const myTools = new MyTools();
const COMMAND_LINE_ARGS = process.argv;

const sortedInsert = (argsArray) => {
    const result = getArgumentsIntoIntegerArray(argsArray);
    if (result === null) {
        console.log("Error");
        return;
    }

    const { inputArray, newElement } = result;

    if (inputArray.length === 0 || newElement > inputArray[inputArray.length - 1]) { // If newELement is > to last element in inputArray
        inputArray.push(newElement);
        return inputArray;
    }
    if(newElement < inputArray[0]){ // If newELement is < to first Element in inputArray
        inputArray.unshift(newElement);
        return inputArray;
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (newElement > inputArray[i] && newElement < inputArray[i + 1]) {
            inputArray.splice(i + 1, 0, newElement);
            return inputArray;
        }
    }
}

/**
 * Get the arguments array without undesirable information
 * @param {any[]} args - Arguments array to check.
 * @returns {{ inputArray: any[], newElement: any }} - Returns an object containing the final array (inputArray) and newElement.
 */
const getArgumentsIntoIntegerArray = args => {
    let inputArray = [];
    let newElement;
    let arg = 0;

    for( let i = 2; i < args.length ; i++){
        arg = parseInt(args[i])

        if(!isNaN(arg)){
            if(i === args.length-1){
                newElement = arg;
            }else{
                inputArray.push(arg);
            }
        }else{
            return null;
        }
            
    }
    return {inputArray, newElement};
}

// Error Handling
const MIN_ARGS_COUNT_CHECK = myTools.checkMinArgumentCount(2, COMMAND_LINE_ARGS);
if(!MIN_ARGS_COUNT_CHECK) {
    console.log("Veuillez entrer au moins un nombre ainsi q'un nouvel élément de type nombre.");
}else{
    console.log(sortedInsert(COMMAND_LINE_ARGS));
}