var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
    alert ("Boton de anadir clickeado!")
}

var clearCompletedButton = document.getElementById("clear-completed-button");
clearCompletedButton.addEventListener("click", clearCompeltedToDoItems);

function clearCompeltedToDoItems(){
    alert ("Se han limpiado los elementos completados")
}