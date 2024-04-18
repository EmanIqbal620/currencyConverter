import inquirer from "inquirer";
let user_answer = await inquirer.prompt([
    {
        name: "from ",
        message: "Enter prompt currency",
    }
]);
console.log(user_answer);
