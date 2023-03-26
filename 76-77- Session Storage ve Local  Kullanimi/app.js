//? -----SESSION STORAGE KULLANIMI------
/*
en buyuk fark: verileri depolamak icin kayit olan yer.
tarayiciya eklenen degerler session storagede silinir
Local Storagede ise silinmez
ikiside window objesi icindedir.

key ve Value
falshe ve true

console.log(window)
*/
//! Deger ekleme
/*
sessionStorage.setItem("350","enes");
sessionStorage.setItem("15","yasin");
sessionStorage.setItem("100","bil");
sessionStorage.setItem(552,37); //hepsi konsolda string olarak yazar.
// 1. si key 2. si ise value olarak Application da yazdirilir.
*/
//! Deger Silme
/*
sessionStorage.removeItem("100");

let value = sessionStorage.getItem("350");
// session storoge den getItem ile deger almak. karsiligi yoksa null verir.
console.log(value);
*/
/*
sessionStorage.removeItem("100");

let value = sessionStorage.getItem("700");
// session storoge de karsiligi yoksa null verir.
if(value ===null){
    console.log("deger bulunamadi");
}else{
    console.log("deger bulundu :",value);
}
// consolede hangisi olursa onu yazar.
*/
//! Hepsini silme
//sessionStorage.clear(); // hepsini siler falat live serverin yazdigi haric

/*
let value = sessionStorage.getItem(552);
console.log(typeof value); // string olarak cikar.numerik olmaz
*/
//! Session Storage - Array yazdirma
/*
let names = ["ali","enes","kubra","adem","aysenur"];

sessionStorage.setItem("names",names);

let value = sessionStorage.getItem("names");
//console.log(typeof value);
console.log(value);
// konsolda tum isimler yazar
//application da ise key ve value seklinde yazar.
//Array olmasina ragmen string verir.
*/
/*
let names = ["ali","enes","kubra","adem","aysenur"];
// eger array olarak yazip array olarak almak istiyorsak:
sessionStorage.setItem("names",JSON.stringify(names));
//Application da ["ali","enes","kubra","adem","aysenur"] olarak yazdirir.
// console da da Array istiyorsak:
let value = JSON.parse(sessionStorage.getItem("names"));
// bu sekilde console de yazar.
0:ali
1:enes
2:kubra
3:adem
4:aysenur
length:5 
olarak yazar
*/
/*
let names = ["ali","enes","kubra","adem","aysenur"];
sessionStorage.setItem("names",JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));
value.forEach(function(name){
    console.log(name);
})
*/
/*
ali
enes
kubra
adem
aysenur

olarak yazar
*/


//?------Local Stroge Kullanimi-----------

// ! Deger ekleme
/*
localStorage.setItem("motion1","Push up");
localStorage.setItem("motion2","Barfix");
localStorage.setItem("motion3","Burpee");
localStorage.setItem("motion4","Squat");
*/

//! Degeri almak
/*
let value = localStorage.getItem("motion1");
//getitem ile bir key istiyor. ben sana value sini vereyim diyor
//sonra bu keyi value ye atadigi icin console da yazdiriyor.
console.log(value);
*/
//! Deger Silme
/*
localStorage.removeItem("motion4"); // sadece bunu siler
*/
//! Hepsini Temizle
/*
localStorage.clear(); // hepsini siler

let motions = ["Push up","Barfix","Burpee","Squat","Chin Up"];

localStorage.setItem("motions",JSON.stringify(motions)); // atarsak stringfy
// Array olarak Application da cikti aliriz
//["Push up","Barfix","Burpee","Squat","Chin Up"]

let value = JSON.parse(LocalStorage.getItem("motions"));
// getitem ve parse ikiside metodtur.
// oncelik en icerde olan metoddadir.icten disa gider.

console.log(value);
*/
/*
0:Push up
1:Barfix
2:Burpee
3:Squat
4:Chin Up
length:5 
olarak yazar
*/
/*
let value = JSON.parse(LocalStorage.getItem("motions"));

value.forEach(function(motion){
    console.log(motion);
    
});
// array i foreach ile yakaliyor.
*/
/*
Push up
Barfix
Burpee
Squat
Chin Up
 
olarak yazar
*/


