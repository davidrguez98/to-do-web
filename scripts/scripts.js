/* ==== OBJETO PRINCIPAL ==== */

class Task {

    constructor(taskName, taskDescription) {
        this.taskName = taskName
        this.taskDescription = taskDescription
    }
}

/* ==== LÓGICA ==== */

document.addEventListener("DOMContentLoaded", function() {
    
    const mainMenu = document.querySelector(".todo-list")
    const taskList = document.querySelector(".complete-task")
    const containerMyForm = document.querySelector(".new-task")
    const myForm = document.querySelector("#new-task-form")
    
    mainMenu.style.visibility = "visible"
    taskList.style.visibility = "visible"
    containerMyForm.style.visibility = "hidden"
    
    const TASKS = []

    displayTASKS = function() {

        taskList.innerHTML = ""
        for (let i of TASKS) {
            if (i.taskDescription.trim() === "") {
                    taskList.innerHTML += `
                    <ul class="tasks">
                        <li class="tick-button">
                            <i class="bi bi bi-circle-fill tick-button-2"></i>
                        </li>
                        <li class="task">
                            <div>
                                <input type="text" class="task-name" value="${i.taskName}">
                                <input type="text" class="task-description" value="${i.taskDescription}" style=display:none>
                            </div>
                        </li>
                    </ul>
                    ` 
                } else {
                    taskList.innerHTML += `
                    <ul class="tasks">
                        <li class="tick-button">
                            <i class="bi bi bi-circle-fill tick-button-2"></i>
                        </li>
                        <li class="task">
                            <div>
                                <input type="text" class="task-name" value="${i.taskName}">
                                <input type="text" class="task-description" value="${i.taskDescription}">
                            </div>
                        </li>
                    </ul>
                    ` 
                }
        }
    }
    
    createNewTask = function() {
        
        let taskName = document.querySelector(".new-task-name").value 
        let taskDescription = document.querySelector(".new-task-description").value

        if (document.querySelector(".new-task-name").value.trim() ===""){
            alert("Errr")
        } else {
            let newTask = new Task(taskName, taskDescription)
            TASKS.push(newTask)
            document.querySelector(".new-task-name").value = ""
            document.querySelector(".new-task-description").value = ""
            changeVisibility(containerMyForm)
        }
    }
    
    changeVisibility = function(parameters) {
    
        if (parameters.style.visibility == "hidden") {
            parameters.style.visibility = "visible"
        } else {
            parameters.style.visibility = "hidden"
        }
    }
    mainMenu.querySelector(".new-task-button").addEventListener("click", function(event) {
        event.preventDefault()
        changeVisibility(containerMyForm)
    })
    
    myForm.querySelector(".new-task-add-button").addEventListener("click", function(event) {
        event.preventDefault()
        createNewTask()
        displayTASKS()
    })

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("tick-button-2")) {
            const icon = event.target
            const taskElement = icon.closest(".tasks")

            icon.classList.add("completed")
    
            setTimeout(() => {
                const index = Array.from(document.querySelectorAll(".tasks")).indexOf(taskElement);
                if (index !== -1) {
                    TASKS.splice(index, 1)
                    displayTASKS()
                }
            }, 500)
        }
    })
})