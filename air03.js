const MyTools = require('./MyTools');
const myTools = new MyTools();
const COMMAND_LINE_ARGS = process.argv;

const cutSameCharInString = string => {
    let resultString = "";

    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[i+1]){
            resultString += string[i];
        }
    }
    return resultString;
}

if (require.main === module) { 
    // Error Handling
    const ARG_COUNT_CHECK = myTools.checkArgumentCount(1, COMMAND_LINE_ARGS);
    if(!ARG_COUNT_CHECK)  console.log("Veuillez entrer 1 chaîne de caractères.");

    if(ARG_COUNT_CHECK){
        // Display
        console.log(cutSameCharInString(COMMAND_LINE_ARGS[2]));
    }
}

module.exports = {
    cutSameCharInString,
    setShowErrorMessage: value => {
        showErrorMessage = value;
    }
};