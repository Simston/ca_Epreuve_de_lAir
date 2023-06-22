const MyTools = require('./MyTools');
const myTools = new MyTools();
const commandLineArgs = process.argv;

const recoverArgsTwoArray = (commandLineArgs) =>{
    const array1 = [];
    const array2 = [];
    
    for(let i=2; i < commandLineArgs.length; i++){
        if(commandLineArgs[i] !== "fusion"){
        array1.push(commandLineArgs[i])

        }else if(commandLineArgs[i] === "fusion"){
            for(let j=i; j < commandLineArgs.length -1; j++){
                i++;
                array2.push(commandLineArgs[i]);
            }
        }
        
    }
    return {array1, array2};
}

const sortedInsert = (array, element) => {
    
    if (array.length === 0 || element > array[array.length - 1]) {
        array.push(element);
        return array;
    }
    if (element < array[0]) {
        array.unshift(element);
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        if (element > array[i] && element < array[i + 1]) {
            array.splice(i + 1, 0, element);
            return array;
        }
    }
}

const sorted_fusion = (array1, array2) => {

    for(let i=0; i < array2.length; i++){
        sortedInsert(array1, array2[i]);
    }
    return array1;
}

// Error Handling
const hasMinArgsCount = myTools.checkMinArgumentCount(3, commandLineArgs);
if (!hasMinArgsCount) {
    console.log("Veuillez entrer au moins 3 élément dont l'élément fusion pour la séparation des tableaux.");
} else {
    // parsing
    const { array1, array2 } = recoverArgsTwoArray(commandLineArgs);
    // display
    console.log(sorted_fusion(array1, array2).join(' '));
}

module.exports = {
    recoverArgsTwoArray,
    sortedInsert,
    sorted_fusion
}