const InputBox= document.getElementById("input-box")
const ListContainer= document.getElementById("list-container")
function addTask(){
    if(InputBox.value ===''){
        alert("You must write something!")
    }
    else{
        let task = document.createElement("li")
        task.innerHTML = InputBox.value
        ListContainer.appendChild(task)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        task.appendChild(span)
    }
    InputBox.value=''
    saveData()
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML)
}
function showData(){
    ListContainer.innerHTML = localStorage.getItem("data")
}
showData()