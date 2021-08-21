var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
    alert("Elemento anadido!")
}

var clearCompletedButton = document.getElementById("clear-completed-button");
clearCompletedButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    alert("Se han limpiado los elementos completados!")
}

var emptyListButton = document.getElementById("empty-button");
emptyListButton.addEventListener("click", emptyList);

function emptyList() {
    alert("Se ha vaciado la lista!")
}