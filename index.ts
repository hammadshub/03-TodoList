import inquirer from "inquirer";

let todoList : string[]=[];

async function RepeatFlow(){
    const answer = await inquirer.prompt([{
        name:"repeat",
        type:"list",
        choice:["Yes","No"],
        message:"Do you want another operatio?"
    }])

    return(answer.repeat==="yes")? true:false
}

async function TodoList(){

let startAgain = true;

do{

const answer:{option:string} = await inquirer.prompt([{
    name:"option",
    type:"list",
    choices:["Add Items", "Display","Remove Items"],
    message:"What you want to do?"
}]);

if(answer.option === "Add Item"){
    const item = await inquirer.prompt([{

        name:"newItem",
        type:"input",
        message:"Enter new Item"

    }])

    todoList.push(item);
    startAgain = await RepeatFlow();

}
else if(answer.option ==="Display"){
    todoList.forEach(element => console.log(element));

}
else if(answer.option ==="Remove Items"){
     const removeItem :{remove:string}= await inquirer.prompt([{
        name:"remove",
        type:"input",
        message:"Which item you want to remove?"

     }]);

let index = todoList.indexOf(removeItem.remove);
console.log(index);

startAgain = await RepeatFlow();

}
}
while(startAgain!== false)

}

TodoList();