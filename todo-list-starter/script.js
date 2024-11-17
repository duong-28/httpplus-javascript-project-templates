let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];

const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index); 
        todoList.appendChild(newTodoTaskElement);
    }
};

const createNewTodoItemElement = (task, index) => {
    // create a <p> element to store the task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    // apply a css class to the completed items
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    // create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // adding a button to mark each item as complete 
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);
    return newTodoTaskElement;
};

const toggleComplete = (index) => {
    // if it is complete, set it to incomplete
    // if it is incomplete, set it to complete
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    // console.log(todoTasksStatus);
    updateTodoList();
};

// updateTodoList();
const todoList = document.getElementById("todo-list");