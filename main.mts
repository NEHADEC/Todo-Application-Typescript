#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk  from "chalk";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.blueBright("\n \t Welcome To Neha Bilal - TodoList Application\n"));

// while (conditions) {
//     let addTask = await inquirer.prompt([
//         {
//             name : "task",
//             type : "input",
//             message : chalk.greenBright("Enter Your New Task :")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task Added In todo-list successfully`);

//     let addMoreTask = await inquirer.prompt([
//         {
//             name : "addmore",
//             type : "confirm",
//             message: "Do you want to add more list ?",
//             default: "false"
//         }
//     ]);
//     conditions = addMoreTask.addmore 
// }
// console.log("your updated todo-list:" , todoList);

let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name : "choice",
                type: "list",
                message: "select an option want to do:",
                choices:[ "Add Task", "Delete Task" , "Update Task", "View Todo-List", "Exit"],
             }
        ]);
        if (option.choice === "Add Task") {
            await addTask()
            
        }
        else if (option.choice === "Delete Task") {
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if (option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
        
    }
}
let addTask = async() => {
let newTask = await inquirer.prompt([
    {
        name: "task",
        type: "input",
        message : "Enter Your new task :"
    }
]);

todoList.push(newTask.task);
console.log(`\n ${newTask.task} task added successfully in Todo-list`);

}

//Function to view all Todo-list tasks
let viewTask = () => {
    console.log("\n your Todo-List:\n");
    todoList.forEach((task, index) =>{
        console.log(`${index + 1}:${task}`)
        
    })
    
}
//function to delete a task from the list
let deleteTask = async () => {
    
    await viewTask()

    let taskIndex = await inquirer.prompt([
        {
            name : "index",
            type : "number",
            messsage : "Enter the 'index no.'of the task you want to delete  ",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been successfuly from your Todo-List\n`);
}
// function to update task
let updateTask = async() => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name : "index",
            type : "number",
            message : "Enter the 'index no  of the task you want to update :"
        },

        {
            name : "new_task",
            type : "input",
            message : "Now Enter New Task Name :",
        }
    ]);
            
            
            
            todoList[update_task_index.index - 1] = update_task_index.new_task
    
            console.log(`\n Task at index no. ${update_task_index.index - 1}updated successfuly [for update list check option:]"view Todo-List:"`);
    
}
 main();