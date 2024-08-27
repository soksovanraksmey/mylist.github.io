const inputForm = document.getElementById("inputForm")
const addButton = document.getElementById("addButton")
const list = document.getElementById("listItems")


addButton.addEventListener("click", function() {
    const input = inputForm.value
    const newTodo = document.createElement("li")
    newTodo.textContent = input

    if (input === "") {
        alert("Please enter a task")
    } else {
        list.appendChild(newTodo)
    }

    inputForm.value = ""    

    newTodo.addEventListener("click", function() {
        newTodo.style.textDecoration = "line-through"
    })
})


