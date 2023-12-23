const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something...!");
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = inputBox.value;
        
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "\u00d7";
        deleteButton.classList.add("delete-btn");
        
        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();