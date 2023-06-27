const { test } = require("node:test");

const commandLineArgs = process.argv;

const quickSort = inputArray => {
    let smaller = [];
    let greater = [];
    let pivot = inputArray[inputArray.length - 1];

    if(inputArray.length <= 1){
        return inputArray;
    }

    for(let i = 0; i < inputArray.length-1; i++){
        if(inputArray[i] < pivot){
            smaller.push(inputArray[i])
        }else{
            greater.push(inputArray[i]);
        }
    }

    const sortedSmaller = quickSort(smaller);
    const sortedGreater = quickSort(greater);


    return [...sortedSmaller, pivot, ...sortedGreater]
}

console.log(quickSort([7,2,1,6,8,5,3,4]));