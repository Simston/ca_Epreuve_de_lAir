const MyTools = require('./MyTools');
const myTools = new MyTools();
const ARGS_ARRAY = process.argv;
const STRING_SEPARATOR = " ";
let showErrorMessage = true;

const splitString = (stringBeforeCut, separator) => {
    const FINAL_ARRAY = [];
    let startIndex = 0;
    
    for(let i = 0; i < stringBeforeCut.length; i++){    
        if(stringBeforeCut[i].includes(separator) && stringBeforeCut[i+1] !== STRING_SEPARATOR){ // Cut with separator save the string in array
            let endIndex = i;
            cutStringAndSaveInArray(FINAL_ARRAY, stringBeforeCut, startIndex, endIndex);
            startIndex = i + 1;

        } else if(i + 1 === stringBeforeCut.length){  // Treatment of a last Word in the String
            let endIndex = i + 1;
            cutStringAndSaveInArray(FINAL_ARRAY, stringBeforeCut, startIndex, endIndex);
        }
    }
    return FINAL_ARRAY.join("\n");
}

const cutStringAndSaveInArray = (arr, string, start, end) => {
    let tempString = "";
    
    for(let j = start; j < end; j++){
        tempString += string[j];
    }
    arr.push(tempString);
}

// Error Handling
if (require.main === module) {
    const ARGS_OK = myTools.checkArgumentCount(1, ARGS_ARRAY);
    if(!ARGS_OK) {
        if (showErrorMessage) {
            console.log("Veuillez entrer une chaîne de caractères.");
        }
    } 
    // Display
    if(ARGS_OK){
        console.log(splitString(ARGS_ARRAY[2], STRING_SEPARATOR));
    }
}

module.exports = {
    splitString,
    setShowErrorMessage: value => {
        showErrorMessage = value;
    }
};