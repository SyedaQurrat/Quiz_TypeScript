import inquirer from "inquirer";
import chalk from "chalk";
async function quizApp() {
    console.log(chalk.bold.bgGreen("WELCOME TO ERUM WARIS'S QUIZ APP"));
    let userName = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter your name: ",
        }
    ]);
    let marks = 0;
    let continueQuiz = true;
    while (continueQuiz) {
        const quizzez = await inquirer.prompt([
            {
                name: "Quiz_1",
                type: "list",
                choices: [
                    "1.let age = 30",
                    "2.const age: number = 30",
                    "3.var age: number = 30",
                    "4.let age: number; age = 30"
                ],
                message: chalk.green("Q1:Which of the following statements correctly declares a variable age and initializes it with the value 30 in TypeScript?"),
            },
            {
                name: "Quiz_2",
                type: "list",
                choices: [
                    "1.number",
                    "2.string",
                    "3.undefined",
                    "4.error"
                ],
                message: chalk.blue("Q2:What will be the data type of the variable result after the following code execution in TypeScript?  let result = 10 + '20' "),
            },
            {
                name: "Quiz_3",
                type: "list",
                choices: [
                    "1.const PI: number = 3.14",
                    "2.let PI = 3.14",
                    "3.const PI = 3.14",
                    "4. PI = 3.14"
                ],
                message: chalk.red("Q3:Which TypeScript syntax correctly declares a constant variable PI and initializes it with the value 3.14?")
            },
            {
                name: "Quiz_4",
                type: "list",
                choices: [
                    "1.15",
                    "2.510",
                    "3.'15' ",
                    "4.error"
                ],
                message: chalk.yellow("Q4:What will be the value of total after executing the following TypeScript code?   let total = 5 + '10' ")
            },
            {
                name: "Quiz_5",
                type: "list",
                choices: [
                    "1.Installing TypeScript globally using npm",
                    "2.Creating a new tsconfig.json file",
                    "3.Writing the first .ts file",
                    "4.Installing Node.js"
                ],
                message: chalk.cyan("Q5:What is the first step in setting up a TypeScript environment in a new project?")
            },
            {
                name: "Question",
                type: "list",
                choices: [
                    "yes",
                    "no"
                ],
                message: "Do you want to attempt more quizzes?"
            },
        ]);
        if (quizzez.Quiz_1 === "1.let age = 30") {
            console.log(chalk.yellow("A1:Correct Answer, because we can reassign age to let if we select const option it can't be reassigned"));
            marks += 10;
        }
        else {
            console.log("Best of luck for next time");
        }
        if (quizzez.Quiz_2 === "2.string") {
            console.log(chalk.green("A2:Correct Answer, because when a string is concatenated with a number the type will be string"));
            marks += 10;
        }
        else {
            console.log("Best of luck for next time");
        }
        if (quizzez.Quiz_3 === "1.const PI: number = 3.14") {
            console.log(chalk.gray("A3:Correct Answer, because this option shows strong typing syntax which is part of TypeScript"));
            marks += 10;
        }
        else {
            console.log("Best of luck for next time");
        }
        if (quizzez.Quiz_4 === "2.510") {
            console.log(chalk.gray("A4:Correct Answer, because string concatenation occurred"));
            marks += 10;
        }
        else {
            console.log("Best of luck for next time");
        }
        if (quizzez.Quiz_5 === "1.Installing TypeScript globally using npm") {
            console.log(chalk.gray("A5:Correct Answer, no need to explain"));
            marks += 10;
        }
        else {
            console.log("Best of luck for next time");
        }
        console.log(chalk.bgRed.black(`Congratulations ${userName.name}, your total marks are: ${marks}`));
        if (quizzez.Question === "no") {
            continueQuiz = false;
            console.log(chalk.bgBlue("Exited! Thanks for using the quiz app."));
        }
        else {
            marks = 0; // Reset marks for the new quiz attempt
        }
    }
}
quizApp();
