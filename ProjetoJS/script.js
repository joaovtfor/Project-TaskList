
function addTask() {
    const taskTitle = document.querySelector('#task-title').value;
    if(taskTitle) {
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
        console.log(newTask);

        newTask.querySelector('.task-title').textContent = taskTitle;
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);
        });
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this);
        })
    }

}

function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done');
}

function removeTask (task) {
    task.parentNode.remove(true);
}



const addbtn = document.querySelector('#add-btn');

addbtn.addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
    document.querySelector('#task-title').value = '';
})