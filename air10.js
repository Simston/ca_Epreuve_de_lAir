

const toPyramide = (element, nbStage) =>{
    let resultArray = [];
    let addSpace = 2;

    for(i=0; i < nbStage; i++){
        let tempString = "";
        for(j=0; j < nbStage*2-1-i*2; j++){
            tempString += element;       
        }
        resultArray.push(tempString)
        resultArray[i] = resultArray[i].padStart(resultArray[i].length + addSpace/2, " ").padEnd(resultArray[i].length + 2 * addSpace/2, " ");
        addSpace += 2;
    }
    return resultArray.reverse().join('\n');
}

console.log(toPyramide(0, 6));