const MyTools = require('./MyTools');
const myTools = new MyTools();
const ARGS_ARRAY = process.argv;
const STRING_SEPARATOR = " ";

const splitString = (stringBeforeCut, separator) => {
    let startIndex = 0;
    let arrayOfStrings = [];
    
    for(let i = 0; i < stringBeforeCut.length; i++){    
        if(stringBeforeCut[i].includes(separator) && stringBeforeCut[i+1] !== STRING_SEPARATOR){
            let endIndex = i;
            insertStringInArray(arrayOfStrings, stringBeforeCut, startIndex, endIndex);
            startIndex = i + 1;

        } else if(i + 1 === stringBeforeCut.length){
            // For last Word in String
            let endIndex = i + 1;
            insertStringInArray(arrayOfStrings, stringBeforeCut, startIndex, endIndex);
        }
    }
    return arrayOfStrings.join("\n");
}

const insertStringInArray = (arr, string, start, end) => {
    let tempString = "";
    
    for(let j = start; j < end; j++){
        tempString += string[j];
    }
    arr.push(tempString);
}

console.log(splitString(ARGS_ARRAY[2], STRING_SEPARATOR));