const MyTools = require('./MyTools');
const myTools = new MyTools();
const ARGS_ARRAY = process.argv;
const STRING_SEPARATOR = ARGS_ARRAY[3];
let showErrorMessage = true;

const splitStringWithStringSeparator = (stringBeforeCut, separator) => {
    const FINAL_ARRAY = [];
    let matchCount = 0;
    let string = "";
   
    for(let i = 0; i < stringBeforeCut.length; i++){   
        string += stringBeforeCut[i];

        if(stringBeforeCut[i] === separator[matchCount] ){    
            matchCount += 1;
        }else{
            matchCount = 0;
        }        

        if(matchCount === separator.length){
            string = string.slice(0, string.length - separator.length);
            FINAL_ARRAY.push(string);
            string = "";
            matchCount = 0;
        }    

        if(i === stringBeforeCut.length -1){
            FINAL_ARRAY.push(string);
        }
    }
    return FINAL_ARRAY.join("\n");
}

// Error Handling
const ARGS_OK = myTools.checkArgumentCount(2, ARGS_ARRAY);
if(!ARGS_OK && showErrorMessage)  console.log("Veuillez entrer une chaîne de caractères ainsi que le sépérateur souhaité.");
// Display
if(ARGS_OK){
    console.log(splitStringWithStringSeparator(ARGS_ARRAY[2], STRING_SEPARATOR));
}

module.exports = {
    splitStringWithStringSeparator,
    setShowErrorMessage: value => {
        showErrorMessage = value;
    }
};