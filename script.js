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
}

var saveListButton = document.getElementById("save-button");
saveListButton.addEventListener("click", saveList);

function saveList(){
    alert("Se ha guardado la lista!")
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