// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Add button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // Task list container

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove leading/trailing spaces

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove task on click
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button and list item
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
