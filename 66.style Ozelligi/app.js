//Style Özelliğini Anlamak.

//  w3schools.com/

const todo = document.querySelectorAll(".list-group-item")[0];

// console.log(todo);


const todoList = document.querySelector(".list-group");

const clearButton = document.querySelector("#todoClearButton");

console.log(clearButton);

todo.style.color= "#fff"; //beyaz kisa yolu
todo.style.backgroundColor = "purple";
todo.style.fontWeight="bold";// kalin
todo.style.paddingTop = "20px"; // ustten
todo.style.paddingLeft = "70px";// soldan

// Todo List i Aşagı saga sola kaydırabılırız.

todoList.style.marginTop="60px"; //ustten
// todoList.style.marginLeft = "100px"; //soldan

clearButton.style.backgroundColor="red";// arka plan
clearButton.style.fontWeight = "bold";
clearButton.style.padding="10px";
// clearButton.style.marginTop="100px";
clearButton.style.borderRadius ="50px";
