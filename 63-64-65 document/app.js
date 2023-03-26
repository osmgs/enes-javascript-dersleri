
//?----------DOCUMENT OBJESİ-------------
/*
console.log(window); // document window objesi içerisindedir

let value ;

//location objeleri: href, hostname, port, pathname

console.log(document.location);

value = document.location.href; // o an kullandığımız internet 
//sayfasının linkini yazdırır

value = document.location.hostname; // host adresini yazdırılır.

value = document.location.port; 
// hangi portta çalıştığını bize gösterir.

value = document.location. pathname; 
// hangi klosörde hangi dosya üzerinde çalıştığını gösterir.

value = document.characterSet; 
// UTF-8 -türkçe karakterli desteklemesine yardımcı olur.

value = document.title; //Sİtenin başlığını gösterir.

value = document.links.item; // sayfadaki linkleri getirir bize

value = document.links.item(4);
// linklerden 4. indexin html deki kodunu getirir.

value = document.links.item(4).id; 
//linklerden 4. indexin html deki id sini getirir.

value = document.links.item(4).getAttribute("id");
// html sayfasında a etiketi içeriisinde Attiribut (herf,class id) 
//lerden id yi gösterir.

value = document.links.item(4).getAttribute("class"); 
//html sayfasında a etiketi içeriisinde Attiribut (herf,class id)
// lerden classı gösterir.

value = document.links.item(4).classList[3]; 
// linklerde bulunan claslardan 3. indexte olanı göster demek oluyor.

value = document.forms; // documentte bulunan formları getirir bize.

value = document.forms.item(1).children; 
// formda bulunan özellikleri çağırmaya yardımcı olur. 
//form içindeki çocukları getirmeye yardımcı olur.

value = document.domain; 
// çalıştırdığımız sayfanın domainini -host adresini getirir.

value = document.contentType; 
// çalıştırdığımız sayfanın tipini bulur. text/html

console.log(value);
*/


// DOM bir web sayfasındaki tüm elementlerin tamamına denir. 
//html sayfası üzerinde gezinip dinamik değişiklikler yapmak demek oluyor.

//?----------Selectors (seçiciler) - Style özellikleri

//biz html dosyasında etiketleri classname , id ,tag name göre çağırabiliriz
//! id yalnızca bir etikete bağlı olmalıdır.

//?getElementById : id ye göre elementi yakalar.
//?getElementByClass : class  a göre elementi yakalar.
//?getElementBytagName : etiket ismine göre yakalar.

let value;
/*
value =  document.getElementById("todoAddButton");
 // ıd si todoAddButton olan elementi getir demek oluyor
console.log(value);
 // consolda <button id="todoAddButton" type="submit"  
 //class="btn btn-primary mt-4 btn-sm">Todo Ekleyin</button> 
 //şeklinde çıktı alınır.

const button =  document.getElementById("todoAddButton"); 
// ıd si todoAddButton olan elementi getir demek oluyor
console.log(button); // consolda <button id="todoAddButton" 
//type="submit"  class="btn btn-primary mt-4 btn-sm">Todo 
//Ekleyin</button> şeklinde çıktı alınır.
console.log(button.id); //consolda todoAddButton şeklinde çıkar.


console.log(button);
 // consolda <button id="todoAddButton" type="submit"  class="btn btn-primary mt-4 btn-sm">Todo Ekleyin</button> şeklinde çıktı alınır.
console.log(button.getAttribute("id")); 
//consolda todoAddButton şeklinde çıkar.

console.log(button.className); 
//btn btn-primary mt-4 btn-sm şeklinde çıktı alınır.
//! btn/btn-primary /mt-4 /btn-sm olmak üzere 4 tane class içerir.
console.log(button.getAttribute("class")); 
//btn btn-primary mt-4 btn-sm şeklinde çıktı alınır.

//const classListesi = button.classList;
console.log(classListesi); 
// consolda sırasıyla btn, btn-primary, mt-4, btn-sm şeklinde çıktı alınır.

//const classListesi = button.classList[3];
console.log(classListesi); 
// consolda  3. index olan btn-sm şeklinde çıktı alınır.


const classListesi = button.classList;
classListesi.forEach(function(className){
    console.log(className);
}) // consolda sırasıyla bütün classları çağırır.


let buttonText = button.textContent; 
// textContent ile buttondaki yazıyı kconsola yazdırırız.
let buttonText2 = button.innerHTML; 
// innerHTML ile buttondaki yazıyı kconsola yazdırırız.

//textContentte yanındaki HTML etiketlerini string olarak algılar 
//innerHTML de html etiketi olarak yazdırır.

button.textContent = "<b> Todo Ekleyin </b>"; // consolda <button id="todoAddButton" type="submit"  class="btn btn-primary mt-4 btn-sm"><b>Todo Ekleyin</b>(b etiketlerini mesaj olarak algılar)</button> şeklinde çıktı alınır.
button.innerHTML = "<b> Todo Ekleyin </b>"; // consolda <button id="todoAddButton" type="submit"  class="btn btn-primary mt-4 btn-sm"><b>Todo Ekleyin</b>(b etiketini html etiketi olarak algılar)</button> şeklinde çıktı alınır.

//!class ismi list-group-item olan elementleri çağırma

//const todoList = document.getElementsByClassName("list-group-item ");
console.log(todoList); 
// consolda class ismi "list-group-item" olan html etiketlerini yazdırdı 
 4 tane

//const todoList = Array.from(document.getElementsByClassName
("list-group-item ")); 
// diziye çevirerek forEach döngüsünde dönderiyoruz.
todoList.forEach(function(todo){
    console.log(todo); 
// consolda class ismi "list-group-item" olan html etiketlerini yazdırdı 
4 tane alt alta
    console.log(todo.textContent); 
//text isimlerini todo 1,todo 2, todo 3,todo 4 şeklinde alt alta yazdırdı.
})


//const forms = document.getElementsByTagName("form");
console.log(forms); 
// consola form etiketlerini getirir.
console.log(forms[1]); 
//1. indexte olan form elementini getirir.
console.log(forms[1].id); 
//1. indexte olan form elementinin idsini (todoListFore) getirir.
console.log(forms[1].name); 
//1. indexte olan form elementinin ismin (form2) getirir.

const forms = Array.from(document.getElementsByTagName("form"));
forms.forEach(function(form){
    console.log(form); // consola alt alta yazdırır.
})


// const todoList = document.getElementsByTagName("li");
console.log(todoList);


 //! getElementById - getElementByClassName - getElementsByTagName 
 //! : hepsini tek tek çağırmak yerine querySelector-querySelectorAll 
 //!etiketleriyle çağrılır.

 //TODO querySelector- querySelectorAll

 const clearButton = document.querySelector("#todoClearButton"); 
 // # işareti ile id çağırırız bir tane gelir
 console.log(clearButton);
 console.log(document.getElementById("todoClearButton")); 
 // yukarıdaki kodla aynı çıktı alınır.


//const todoList = document.querySelector(".list-group"); 
// . işareti ile class çağrılır. bir tane gelir
console.log(todoList);
console.log(document.getElementsByClassName("list-group")); 


// aynı class isminden birden fazla olunca yapılacak

//const todoList = document.querySelectorAll(".list-group"); 
// . işareti ile class çağrılır. bütün hepsi gelir.
console.log(todoList);
console.log(document.getElementsByClassName("list-group"));

const todoList = document.querySelectorAll(".item-group-item");[3]
console.log(todoList); // 3. index çağrılır

//odd ve even
const todolist = Array.from(document.querySelectorAll("li:nth-child(even)"));
*/
/*
todolist.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})
console.log(todolist);

*/








console.log(value); 