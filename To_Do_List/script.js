const inputtask =document.getElementById("INPUT")
const tasklist =document.getElementById("task_list")
const btn =document.querySelector("button")

function addtask()
{
  
    let taskvalue=inputtask.value;
    if(!taskvalue)
    {
        alert("you must add a value")
    }
    else
    {
        let li=document.createElement("li");
        let span=document.createElement("span");

        li.innerHTML= taskvalue;
        tasklist.appendChild(li);
        span.innerHTML="&times;";
        li.append(span)
    }
    inputtask.value="";
    settask()
}
btn.addEventListener("click",addtask)

tasklist.addEventListener("click",function(e)
{

    if (e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked")
        settask()
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        settask()
    }
})

inputtask.addEventListener("keydown",function(e)
{
    if (e.key==="Enter")
    {
        addtask()
    }
})
function settask()
{
    localStorage.setItem("lists",tasklist.innerHTML)
}
function loadtasks()
{
    tasklist.innerHTML=localStorage.getItem("lists")
}
loadtasks()