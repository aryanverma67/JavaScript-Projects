const input = document.getElementById("input");
const listContainer = document.querySelector(".list-container");
const btn = document.querySelector(".btn");

function addText(){
    if(input.value === ""){
        alert("yu must write anything");
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `&times;`
        li.appendChild(span);
        input.value ="";
        saveData();

    }

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
     if(e.target.tagName ==="span"){
        const li = e.target.parentElement;
        li.remove();
        saveData();
        

    }
});
const saveData = ()=>{
    localStorage.setItem("li",listContainer.innerHTML);
}

const showData = ()=>{
    listContainer.innerHTML = localStorage.getItem("li");
}
showData();