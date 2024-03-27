#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber = Math.floor(Math.random() * 10 + 1)
const answer = await inquirer.prompt([
    {name : "userGuessedNumber",
    type : "number",
    message : "Please Guess a Number between 1 - 10: ",

}])

if(answer.userGuessedNumber === randomNumber){console.log(chalk.bold.magentaBright("Congratulations! You've successfully guessed the right number. Well done!"))}
else {
    console.log(chalk.bold.italic.redBright("Oops! Wrong number guess. Please try again.."))
}