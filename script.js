var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
    alert("Se ha añadido un elemento!")
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

var clearCompletedButton = document.getElementById("clear-completed-button");
clearCompletedButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    alert("Se han limpiado los elementos completados!")
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length> 0) {
        completedItems.item(0).remove();  
    }
}

var emptyListButton = document.getElementById("empty-button");
emptyListButton.addEventListener("click", emptyList);

function emptyList() {
    alert("Se ha vaciado la lista!")
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

var saveListButton = document.getElementById("save-button");
saveListButton.addEventListener("click", saveList);

function saveList(){
    alert("Se ha guardado la lista!")
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}