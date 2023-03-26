//?--------MOUSE EVENTLARI---------

//DOMContentLoaded  Sayfa yüklendiğinde çalışır
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave

/*
 window.addEventListener("load",run);

function run(){
    console.log("Sayfa Yüklendi");
 }
*/
/*
const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];
*/
//cardTitle.addEventListener("click",run);

//cardTitle.addEventListener("dblclick",run);

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);card bady ve diger elementlere
//girdigini ve ciktigini console yazar
/*
cardBody.addEventListener("mouseenter",run);
// sadece card body e girdiginde calisir
cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}
*/

//?--------KLAVYE EVENTLERI---------

//keypres : harf ve sayilarda tetikleme eventtir.

//keydown :tum klavye tuslarinda basinca calisir

//keyup : tustan elini kaldirdiginda calisir
/*
document.addEventListener("keypress",run);

function run(e){
    //console.log(e.type); //klavyeye her bastigimizda tetigi gosterir
    //console.log(e.key); // bastigimiz her tusu gosterir.
    console.log(e.keyCode);// ascii tablosundaki karsiliklari rakam halinde
    console.log(e.which);// hangi ustteki gibi ayni
}
*/
/*
document.addEventListener("keydown",run);
function run(e){
    console.log(e.key);
}
*/
/*
document.addEventListener("keydown",run); // F5 tusunun calismamasi icin
function run(e){
    console.log(e.keyCode);
    if(e.keyCode ==116){ // 116 F5 tususnun consolde karsiligi
        alert("sayfa yenileme engellendi!");
    }
e.preventDefault();
}
*/
/*
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keypres",run);// inputa yazi yazilirsa

function run(e){
    console.log(e.target.value);
}
// klavyeye ne yazilirsa consolda cikti verir.
*/
/*
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);// klavyede tustan elini cekerse
                // yazdigini console yazdir

function run(e){
    cardTitle.textContent = e.target.value; // html etiketi yazilir.
}
*/


//?---------INPUT EVENTLERI------------
// focus :odaklanma
// blur : inputtan ciktimizda console yazilir.
// copy : kopyalama
// paste : yapistir
// cut : kesme
// select : secmek  
/*
const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run);
todo.addEventListener("copy",run);
todo.addEventListener("paste",run);
todo.addEventListener("cut",run);
todo.addEventListener("select",run);


function run(e) {
    console.log(e.type);
}
*/
// focus odaklanma demektir. inputun icine imleci biraktimizda fokus calisir. 
// inputun icine imleci cikardimizda blur calisir.
// inputun icindeki texti kopyaladigimizda console yazdirir.
// baska bir yerden kopyaladigimiz texti inputun icine yapistirdigimizda
    // console yazdirir.
//inputun icindeki texti kestigimizde console yazdirir.
// inputun icindeki textten secerken elimizi cektigimiz anda sectigimiz yer
        // console yazdirilir.

















...