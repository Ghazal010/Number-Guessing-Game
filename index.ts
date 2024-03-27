#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([{
message: "Enter first number",
type: "number",
name: "firstNumber",
},
{
message: "Enter second number",
type: "number",
name: "secondNumber",
},
{
    message: "Enter third number",
    type: "number",
    name: "thirdNumber",
    },
{
message: "Choose opertation",
type:"list",
name: "operator",
choices: ["Addition","Substraction","Division","Multiplication"],
}
]);

if(answer.operator === "Addition")
{console.log(chalk.blue(answer.firstNumber + answer.secondNumber + answer.thirdNumber))}

else if(answer.operator === "Substraction")
{console.log(chalk.green(answer.firstNumber - answer.secondNumber - answer.thirdNumber))}

else if(answer.operator === "Division")
{console.log(chalk.blue(answer.firstNumber / answer.secondNumber / answer.thirdNumber))}

else if(answer.operator === "Multiplication")
{console.log(chalk.bgMagenta(answer.firstNumber * answer.secondNumber * answer.thirdNumber))}

else {
    console.log("Please select a valid operator")
}