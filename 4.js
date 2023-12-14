let numbers = [];

let userInput;
do {
    userInput = prompt("Enter a number (enter 0 to stop):");

    const number = Number(userInput);
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
} while (userInput !== "0");

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Numbers in descending order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
