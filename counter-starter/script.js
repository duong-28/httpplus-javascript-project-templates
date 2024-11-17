const add = () => {
    // console.log("add function");
    // We gave the number element an id of 'number' so we can use that to get to the element
    let numberElement = document.getElementById("number");
    // We can use the innertext property to get the text inside the element
    let number = numberElement.innerText;
    // console.log(number)
    // Now that we have the number, we can increment it by 1 and update the text displayed in on the page
    number = parseInt(number) + 1;
    numberElement.innerText = number;
}

const addNum = (num) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + num;
    numberElement.innerText = number
}

const subtractNum = (num) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - num;
    numberElement.innerText = number;
}

const reset = () => {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
}

const userInput = () => {
    let userInput = document.getElementById("user-input").value;
    let numberElement = document.getElementById("number");
    numberElement.innerText = parseInt(userInput);
}