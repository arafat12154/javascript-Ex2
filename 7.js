function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

function mainProgram() {
    const numSides = parseInt(prompt("Enter the number of sides on the dice:"));

    if (isNaN(numSides) || numSides <= 0) {
        console.log("Invalid input. Please enter a valid positive number of sides.");
        return;
    }

    let results = [];

    let rollResult;
    do {
        rollResult = rollDice(numSides);
        results.push(rollResult);
    } while (rollResult !== numSides);

    console.log(`Results of each roll (1-${numSides}):`);
    console.log("<ul>");

    for (let i = 0; i < results.length; i++) {
        console.log(`<li>${results[i]}</li>`);
    }

    console.log("</ul>");
}

mainProgram();
