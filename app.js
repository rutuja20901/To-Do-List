const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//Add task in taskbox
function addTask(){
    if(inputBox.vallue === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";  //clear 
    saveData();
}


//checked and unchecked the task and also delete the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//store in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display data whenever open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();