let todoItem = document.getElementById("todo-item");
let list = document.getElementById("List");

function addTodo() {
    let li = document.createElement("li");
    let liText = document.createTextNode(todoItem.value)
    li.appendChild(liText);
    list.appendChild(li);
    todoItem.value = "";

    // Create Delete btn
    let delBtn = document.createElement("button");
    let delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    li.appendChild(delBtn);
    delBtn.setAttribute("onClick", "deleteItem(this)")

    //Create Edit btn
    let editBtn = document.createElement("button")
    let editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onClick", "editItem(this)")
}

// Function to delete all todo items
function deleteAll(e) {
    list.innerHTML = "";
}

// Function to delete a specific todo item
function deleteItem(e) {
    e.parentNode.remove()
}


// Function to edit a todo item multiple times
function editItem(editBtn) {
    let listItem = editBtn.parentNode;
    let todoItemText = listItem.firstChild;

    let editInput = document.createElement("input");
    editInput.setAttribute("placeholder","Edit and tab")
    editInput.value = todoItemText.nodeValue;
    listItem.replaceChild(editInput, todoItemText);
    editInput.focus();

    editInput.addEventListener("blur", function () {
        todoItemText.nodeValue = editInput.value.trim();
        listItem.replaceChild(todoItemText, editInput);
    });
}
