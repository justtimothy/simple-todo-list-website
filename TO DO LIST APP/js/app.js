const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() { 
    if (inputBox.value === '') {
        alert("YOU MUST WRITE SOMETHING!")        
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveToBrowser();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveToBrowser()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveToBrowser()
    }
}, false);

function saveToBrowser() {
    localStorage.setItem("data", listContainer.innerHTML);
}

showSavedData();

function showSavedData() {
    listContainer.innerHTML = localStorage.getItem("data");
}