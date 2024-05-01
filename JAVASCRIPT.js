let checkbox1 = document.getElementById("checkbox1");
let task1=document.getElementById("TASK1");
let checkbox2 = document.getElementById("checkbox2");
let task2=document.getElementById("TASK2");
let checkbox3 = document.getElementById("checkbox3");
let task3=document.getElementById("TASK3");
let complete= document.getElementById("completebar")

let contentComplete=complete.innerHTML;
complete.classList.remove("complete2");
complete.classList.add("complete1");
complete.innerHTML="";

checkbox1.addEventListener('change', function() {
  if(checkbox1.checked)
  {
    task1.classList.remove("task");
    task1.classList.add("complete1");
    task1.innerHTML="";
    task1.parentNode.replaceChild(complete, task1);
    complete.innerHTML=contentComplete;
    complete.classList.remove("complete2");
    complete.classList.add("complete3");
    complete.classList.add("animation1");
    setTimeout(function(){
    complete.classList.remove("complete3");
    complete.classList.add("complete1");
    complete.innerHTML="";
    },1000)
}});

checkbox2.addEventListener('change', function() {
  if(checkbox2.checked)
  {
    task2.classList.remove("task");
    task2.classList.add("complete1");
    task2.innerHTML="";
    task2.parentNode.replaceChild(complete, task2);
    complete.innerHTML=contentComplete;
    complete.classList.remove("complete2");
    complete.classList.add("complete3");
    complete.classList.add("animation1");
    setTimeout(function(){
    complete.classList.remove("complete3");
    complete.classList.add("complete1");
    complete.innerHTML="";
    },1000)
}});
checkbox3.addEventListener('change', function() {
  if(checkbox3.checked)
  {
    task3.classList.remove("task");
    task3.classList.add("complete1");
    task3.innerHTML="";
    task3.parentNode.replaceChild(complete, task3);
    complete.innerHTML=contentComplete;
    complete.classList.remove("complete2");
    complete.classList.add("complete3");
    complete.classList.add("animation1");
    setTimeout(function(){
    complete.classList.remove("complete3");
    complete.classList.add("complete1");
    complete.innerHTML="";
    },1000)
}});