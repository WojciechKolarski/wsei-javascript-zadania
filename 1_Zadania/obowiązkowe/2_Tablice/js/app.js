// zadanie 0
function distFromAvarage(inputArray){
    const averge = inputArray.reduce(function(a,b){
        return a+b;
    });

    inputArray.map((x)=> x - averge);
}

// zadanie 1
function fruits(){
    const arrayOfFruits = [
        'jabłko',
        'pomarńcza',
        'truskawka'
    ]

    for(let i = 0; i<arrayOfFruits.length;i++){
        console.log(arrayOfFruits[i]);
    }
}

// zadanie 3
function printTable(inputArray){
    for(let i=0;i<inputArray.length-1;i++){
        console.log(inputArray[i]);
    }
}

// zadanie 4
function multiply(inputArray){
    let result = 0;
    for(let i=0;i<inputArray.length;i++){
        if(i == 0){
            result = inputArray[0];
        }
        else{
            result = result * inputArray[i];
        }
    }
    return result;
}

// zadanie 5
function getEvenAvarage(inputArray){
    const filteredArray = inputArray
    .filter((num)=>num % 2 === 0);

    if(filteredArray.length === 0){
        return null;
    }
    else{
        return filteredArray.reduce((curr,sum)=> sum+curr)/filteredArray.length;
    }
}

// zadanie 6
function sortArray(inputArray){
    return inputArray.sort((a,b) => a-b);
}

// zadanie 7
function addArrays(firstArray,secondArray){

    var longerArray = (firstArray.length > secondArray.length)? firstArray : secondArray;
    var shorterArray = !(firstArray.length > secondArray.length)? firstArray : secondArray;
    for(var i=0; i < shorterArray.length; i++){
        longerArray[i] += shorterArray[i];
    }
    return longerArray;
}