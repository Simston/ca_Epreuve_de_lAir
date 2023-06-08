const MyTools = require('./MyTools');
const myTools = new MyTools();
const COMMAND_LINE_ARGS = process.argv;

const getArgumentsIntoArray = args => {
    let inputArray = [];
    let resultStringSeparator = "";

   for( let i = 2; i <= args.length ; i++){
    if(i === args.length){
        resultStringSeparator = args[i-1];
    }else if(i < args.length-1){
        inputArray.push(args[i]);
    }
   }
   return { inputArray, resultStringSeparator };
}

const displayResult = ( inputArray, separator ) => {
    let resultString ="";
   
    for( let i = 0; i < inputArray.length; i++ ){
        resultString += inputArray[i] + separator;
    }
    return resultString;
}

// Error Handling
const MIN_ARG_COUNT_CHECK = myTools.checkMinArgumentCount(3, COMMAND_LINE_ARGS);
if(!MIN_ARG_COUNT_CHECK)  console.log("Veuillez entrer au moins 2 chaînes de caractères ainsi que le sépérateur souhaité.");

if(MIN_ARG_COUNT_CHECK){
    const {inputArray, resultStringSeparator} = getArgumentsIntoArray(COMMAND_LINE_ARGS);
    // Display
    console.log(displayResult(inputArray, resultStringSeparator));
}