const textInput = document.querySelector("input") 
const addButton = document.getElementById("addButton")
const todoList = document.querySelector("ul")
const filter = document.getElementById("filter")

const tasks = new Map()

function render() {
    if (tasks.size == 0) return
    todoList.innerHTML = ""
    switch (filter.value) {
        case "all":
            tasks.forEach((value, key) => {
                addTask(key)
            })
            break;
        case "activated":
            tasks.forEach((value, key) => {
                if (value == "activated")
                    addTask(key)
            })
            break;
        case "deleted":
            tasks.forEach((value, key) => {
                if (value == "deleted")
                    addTask(key)
            })
            break;
    }
}

filter.addEventListener("change", () => {
    render()
})

addButton.addEventListener("click", () => {
    if (textInput.value != "") {
        addTask(textInput.value)
        textInput.value = ""
        render()
    }
})

function addTask(text) {
    let task = document.createElement("LI")
    task.appendChild
    task.textContent = text
    todoList.appendChild(task)

    if (tasks.has(text) && tasks.get(text) == "deleted") {
        task.classList.add("done")
    } else {
        tasks.set(text, "activated")
    }

    let deleteButton = document.createElement("BUTTON")
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", () => {
        if (task.classList.contains("done")) {
            tasks.set(text, "activated")
            task.classList.remove("done")
        } else {
            tasks.set(text, "deleted")
            task.classList.add("done")
        }
        render()
    })
    task.appendChild(deleteButton)
}