import inquirer from "inquirer";
console.log("\n\tWellcome to the GAME - Cli number Guessing Game\n ");
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 10):",
    }
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("Congratulation ! you guess a correct number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
