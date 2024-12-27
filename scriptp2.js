const Inputbox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(Inputbox.value === ''){
       alert("You must write something!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = Inputbox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Inputbox.value = "";
    saveData();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();

