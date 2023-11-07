const inputbox =document.getElementById("input-box");
const listcontainer = document.getElementById("list");

function addTask(){
    if(inputbox.value === ''){
        alert("Enter a Task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let edit = document.createElement("button");
        edit.innerHTML = "Edit";
        li.appendChild(edit);
    }
    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.focus();
        inputbox.value = "";
        e.target.parentElement.remove();
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();