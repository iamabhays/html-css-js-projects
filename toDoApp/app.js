const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");


function addTask()
{
    if(inputBox.value === "")
    {
        alert("Oops! Write Something..")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        // for creating the span tag

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }

    inputBox.value = ""
    saveData()
}


// checking the task and removing the task function event listener

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);


// saving the data in localstorage

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

