const MyTools = require('./MyTools');
const myTools = new MyTools();
const COMMAND_LINE_ARGS = process.argv;
let showErrorMessage = true;

const findIntruders = arr => {
    const intrudersArray = [];
    let isUnique = true;

    for (let i=0; i < arr.length; i++){
        isUnique = true;

        for(let j=0; j < arr.length; j++){

            if(i === j){
                j++;
            } else if(arr[i] === arr[j]){
                    isUnique = false;
            }
        }

        if(isUnique === true){
            intrudersArray.push(arr[i])
        }
    }
    return intrudersArray.join(' ');
}

const getArgumentsIntoArray = args => {
    let inputArray = [];

    for( let i = 2; i < args.length ; i++){
        inputArray.push(args[i]);
    }
    return inputArray;
}

// Error Handling
if (require.main === module) { 
    const MIN_ARG_COUNT_CHECK = myTools.checkMinArgumentCount(2, COMMAND_LINE_ARGS);
    if(MIN_ARG_COUNT_CHECK){
        const inputArray = getArgumentsIntoArray(COMMAND_LINE_ARGS);
        // Display
        console.log(findIntruders(inputArray));
    }
    else if(!MIN_ARG_COUNT_CHECK) {
        if (showErrorMessage) {
            console.log("Veuillez entrer au moins 2 éléments.");
        }
    } 
}

module.exports = {
    findIntruders,
    setShowErrorMessage: value => {
        showErrorMessage = value;
    }
};