class Task {

    constructor(taskName, taskDescription) {
        this.taskName = taskName
        this.taskDescription = taskDescription
    }
}

/* ==== FUNCIONES ==== */

createNewTask = function() {

    let taskName = document.querySelector(".new-task-name").value /* HAY QUE REFORZAR PARA QUE NO SE PUEDAN PASAR ESPACIOS EN BLANCOS */
    let taskDescription = document.querySelector(".new-task-description").value

    taskList.innerHTML = `
            <ul class="tasks">
                <li class="tick-button">
                    <i class="bi bi-circle tick-button"></i>
                </li>
                <li class="task">
                    <div>
                        <input type="text" class="task-name" value="${taskName}">
                        <input type="text" class="task-description" value="${taskDescription}">
                    </div>
                </li>
            </ul>
        `

}

changeVisibility = function(parameters) {

    if (parameters.style.visibility == "hidden") {
        parameters.style.visibility = "visible"
    } else {
        parameters.style.visibility = "hidden"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    const mainMenu = document.querySelector(".todo-list")
    const taskList = document.querySelector(".complete-task")
    const containerMyForm = document.querySelector(".new-task")
    const myForm = document.querySelector("#new-task-form")
    
    mainMenu.style.visibility = "visible"
    taskList.style.visibility = "hidden"
    containerMyForm.style.visibility = "hidden"
    
    mainMenu.querySelector(".new-task-button").addEventListener("click", function(event) {
        event.preventDefault()
        changeVisibility(containerMyForm)
    })
    
    myForm.querySelector(".new-task-add-button").addEventListener("click", function(event) {
        
        event.preventDefault()
        let taskName = document.querySelector(".new-task-name").value /* HAY QUE REFORZAR PARA QUE NO SE PUEDAN PASAR ESPACIOS EN BLANCOS */
        let taskDescription = document.querySelector(".new-task-description").value
    
        taskList.innerHTML = `
            <ul class="tasks">
                <li class="tick-button">
                    <i class="bi bi-circle tick-button"></i>
                </li>
                <li class="task">
                    <div>
                        <input type="text" class="task-name" value="${taskName}">
                        <input type="text" class="task-description" value="${taskDescription}">
                    </div>
                </li>
            </ul>
        `

        changeVisibility(containerMyForm)
        changeVisibility(taskList)
    })
})