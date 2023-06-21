const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

const sortedInsert = (argsArray) => {
    const result = extractArguments(argsArray);
    //if arguments is NaN("=null")
    if (result === null) {
        console.log("Error");
        return;
    }

    const { inputArray, newElement } = result;

    if (inputArray.length === 0 || newElement > inputArray[inputArray.length - 1]) {
        inputArray.push(newElement);
        return inputArray;
    }
    if (newElement < inputArray[0]) {
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
 * Extract the valid arguments array.
 * @param {any[]} args - The arguments array to check.
 * @returns {?{ inputArray: any[], newElement: any }} - An object containing the final array (inputArray) and newElement, or null if the arguments are invalid.
 */
const extractArguments = args => {
    let inputArray = [];
    let newElement;
    let arg = 0;

    for (let i = 2; i < args.length; i++) {
        arg = parseInt(args[i]);

        if (!isNaN(arg)) {
            if (i === args.length - 1) {
                newElement = arg;
            } else {
                inputArray.push(arg);
            }
        } else {
            return null;
        }
    }

    return { inputArray, newElement };
}

if (require.main === module) {
    // Error Handling
    const hasMinArgsCount = myTools.checkMinArgumentCount(2, commandLineArgs);
    if (!hasMinArgsCount) {
        console.log("Veuillez entrer au moins un nombre ainsi qu'un nouvel élément de type nombre.");
    } else {
        console.log(sortedInsert(commandLineArgs));
    }
}

module.exports = {
    sortedInsert,
    extractArguments
}