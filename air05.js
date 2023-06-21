const MyTools = require('./MyTools');
const myTools = new MyTools();
const COMMAND_LINE_ARGS = process.argv;

/**
 * Searches the presence of a substring in a given string.
 * @param {string} string1 - The string in which to perform the search.
 * @param {string} string2 - The substring to search for.
 * @returns {boolean} - True if the substring is found, otherwise False.
 */
const findStringInString = (string1, string2) =>{
    const lenghtOfFirstString = string1.length;
    const lenghtOfSecondString = string2.length;
    let found = true;

    for (let i=0; i <= lenghtOfFirstString - lenghtOfSecondString; i++) { 
        found = true;

        for(let y=0; y < lenghtOfSecondString; y++){
            if (string1[i + y].toLowerCase() !== string2[y].toLowerCase() || string1[i + y].toUpperCase() !== string2[y].toUpperCase()) {
                found = false;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    return found;
}

/**
 * Get the arguments array from Command lines without undesirable informations.
 * @param {any[]} args - Arguments array to check.
 * @returns {{ inputArray: any[], comparator: string }} inputArray  - Returns an object containing the final array (inputArray) and comparator.
 */
const getArgsAndComparator = args => {
    let inputArray = [];
    let comparator;

    for( let i = 2; i < args.length ; i++){

            if(i === args.length-1){
                comparator = args[i];
            }else{
                inputArray.push(args[i]);
            }
    }
    return {inputArray, comparator};
}

const sanitaryPass = (inputArray, comparator) => {

    for(let i=0; i < inputArray.length; i++){

        if(findStringInString(inputArray[i], comparator)){
            inputArray.splice(i, 1);
            i--;
        }
    }
    return inputArray
}

if (require.main === module) {
    const MIN_ARGS_COUNT_CHECK = myTools.checkMinArgumentCount(2, COMMAND_LINE_ARGS);
    if (myTools.checkMinArgumentCount(2, COMMAND_LINE_ARGS)) {
        const { inputArray, comparator } = getArgsAndComparator(COMMAND_LINE_ARGS);
        console.log(sanitaryPass(inputArray, comparator));
    } else {
        console.log("Veuillez entrer au moins une chaîne et un comparateur");
    }
}
module.exports = { 
    findStringInString, 
    getArgsAndComparator, 
    sanitaryPass
};
