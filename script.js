let taskInput=document.getElementById("taskInput")

let addBtn=document.getElementById("addBtn")

let taskList=document.getElementById("taskList")


addBtn.addEventListener("click",(e)=>{
    let task = taskInput.value;
        if(task.trim()===""){
            return;
    }
    console.log(task);
    let taskItem = document.createElement("div");

    let newTask=document.createElement("p");
    newTask.innerText=task;

    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";

    taskItem.append(newTask);
    taskItem.append(deleteBtn);

    taskList.append(taskItem);

    taskInput.value='';

    deleteBtn.addEventListener("click",()=>{
        taskItem.remove();
    });

    

});