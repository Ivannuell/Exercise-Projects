export default function App() {
    const app = document.createElement('div')
    app.setAttribute('id', 'app');
    const input = addTaskInput();
    const output = taskListElement();

    const addTaskContainer = document.createElement('div');
    addTaskContainer.setAttribute('id', 'addTaskContainer');

    addTaskContainer.appendChild(input);
    addTaskContainer.appendChild(addTaskButton(input, output));

    app.appendChild(titleElement());
    app.appendChild(addTaskContainer);
    app.appendChild(output);
    
    return app;
}

function titleElement() {
    const titleElement = document.createElement('h1');
    titleElement.innerHTML = 'TODO APP';

    return titleElement;
}

function addTaskInput() {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('id', 'taskInput');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Enter a task');

    return inputElement;
}

function addTaskButton(input, output) {
    const sendButton = document.createElement('button');
    sendButton.innerHTML = 'Add Task';

    sendButton.addEventListener('click', () => {
        if(input.value === '') return alert('Please enter a task');
        output.appendChild(taskElement(input.value));
        document.getElementById(input.getAttribute('id')).value = '';
    });

    console.log(`#${input.getAttribute('id')}`);
    
    return sendButton;
}

function taskElement(task) {
    const taskElement = document.createElement('div');
    const deleteButton = document.createElement('button');
    const finishButton = document.createElement('button');
    const taskText = document.createElement('p');

    deleteButton.innerHTML = 'Delete';
    finishButton.innerHTML = 'Finish';

    taskText.innerHTML = task;
    taskElement.setAttribute('class', 'task');

    deleteButton.addEventListener('click', () => {
        taskElement.remove();
    });

    finishButton.addEventListener('click', () => {
        taskElement.style.backgroundColor = '#65F860';
        finishButton.style.backgroundColor = '#65F860';
        finishButton.style.borderColor = 'black';
    });

    taskElement.appendChild(taskText);
    taskElement.appendChild(finishButton);
    taskElement.appendChild(deleteButton);
    
    return taskElement;
}

function taskListElement() {
    const taskListElement = document.createElement('div');
    taskListElement.setAttribute('id', 'taskList');

    return taskListElement;
}