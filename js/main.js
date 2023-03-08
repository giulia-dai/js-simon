//random array
function generateRandomArray(maxNumber, arrayLength) {
    let array = [];
    while (array.length < arrayLength) {
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
    return array;
}


//create an erray from user prompts
function getUserArray(arrayLength) {
    let userArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let userInput = parseInt(prompt(`Inserisci un numero:`));
        userArray.push(userInput);
    }

    return userArray;
}

//function for comparing values and removing the different one from  2 differente  arrays
function compareArray(array, comparingArray) {

    for (let i = 0; i < array.length; i++) {
        if (!comparingArray.includes(array[i])) {
            delete array[i];
        }
    }

    return array;
}
// elements on screen
function printArrayToScreen(array, parentElement) {

    array.forEach(element => {
        let elementPara = document.createElement("span");
        let elementText = document.createTextNode(element);
        elementPara.appendChild(elementText);
        parentElement.appendChild(elementPara);
    });

    document.body.appendChild(parentElement);
}
const simonSaid = generateRandomArray(100, 5);
const showResult = document.getElementById('show-results');
const h1 = document.querySelector('h1');
printArrayToScreen(simonSaid, showResult);


//erase at screen showed numbers and show right numbers
setTimeout(function () {
    showResult.innerHTML = '';
}, 30000)

setTimeout(function () {
    let userResponse = getUserArray(5);
    let remainingArray = compareArray(userResponse, simonSaid);
    printArrayToScreen(remainingArray, showResult);
    h1.innerHTML = 'I numeri correttamente inseriti sono:';
}, 30500)