//!---------- HTML Elementleri Üzerinde Gezinmek.
/*
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
//const card = document.getElementsByClassName("card")[0]; son cocuk
const card = document.querySelector(".card");

const row = document.querySelector(".row");

let value;
/*
//Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1]; 
//Ensondaki cocuga ulasmak ıcın.(Indeks Sayısını bılmedıgımız durumlarda)
value = todoList.children[3].textContent = "Değişti";
 // Cocukların adlarını degıstırebılırız.

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })


*/
/*
//Çocuktan Anneye Erişmek

value = todo;
let ul  = todo.parentElement;  
// Todo ya anne elementını getır cagrısı verır. ve ikinci parrentElement 
// yazılınca Anneanne cagrılır.
let cardBody = ul.parentElement; 
 // İstediginiz anne elementınden baslamak ıcın annenın 
 //adı ile ve parrentElement ıle de cagrılabılır.
let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
let container = row.parentElement;
*/
/*
// Kardeşler arasında gezinmek
value = todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;  
// eger cocuk sayısından fazla .nextElementSibling yazarsak null verir.


value = todoLastChild;
value = todoLastChild.previousElementSibling.previousElementSibling;  
// previous bir onceki  demektir.
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;  
// eger cocuk sayısından fazla .previousElementSibling yazarsak null verir.


value = row.children[0].children[3].children[0].textContent=
"Todo Listesi Başlığı Değişti";

let todo3 = row.children[0].children[3].children[2].children[2];
todo3.textContent="Todo3 Değişti";
todo3.style.backgroundColor="lightgrey";
todo3.style.color="red";

console.log(value);

*/
//! -----------Dinamik Olarak Element Oluşturmak
/*
const cardBody = document.querySelectorAll(".card-body")[1];  
//  aynı class isimdeki claslardan 2. sını secmek ıcın.
const todoList = document.querySelector(".list-group");

console.log(cardBody);

const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";  
//  siyah - kücük - ustten bosluk
link.href="http://enesbayram.net";  //  linke hedef verme
link.target="_blank";  // linkin ayrı sekmede acılması icin
link.innerHTML = "Kişisel Websiteme Git";  //adres belirtme

*/

/*
<li class="list-group-item d-flex justify-content-between">Todo 3
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
*/
/*
cardBody.appendChild(link);  //  "append" ilave etmek (cocugu ilave et)


const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i  = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href="#";
todoLink.className="delete-item";


i.className="fa fa-remove";


todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo);

console.log(link);

*/
//!----------------Element Silmek
/*
const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item"); 
// tüm todo ları getir
// const todo1 = document.querySelector(".list-group-item");  
// ilk cocugu yakalama

console.log(todos);
 todos.remove();  // silme işlemini yapar.
// todos[1].remove();
// console.log(todos);

// todos[todos.length-1].remove();  // Todo nun sonundan sil.

// todo1.remove();  // secilen Todo 1 i silmek icn.

//----------------------------------------------
// todoList.removeChild(todos[todos.length-1]); 
//  İndex numarası yerine cocuk (Node) ismi ile cagırıp silinebilir.
// todoList.removeChild(todos[0]);  // silme işleminde yolu uzatmaktadır.
*/

//!------------------ Elementleri Değiştirmek
/*
const cardBody = document.querySelectorAll(".card-body")[1];

//<h5 class="card-title">Todo Listesi</h5>

const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent = "Todo Listesi - Yeni"; 



cardBody.replaceChild(newTitle,cardBody.childNodes[1]);
                               
// H5 teki Nodu Temsil ediyor ve bu nodu degistiriyor.
