// document write ile cikti alma

/*document.write("Hello World <br>");
document.writeln("Osman GISI");
document.write(55);
document.write(null);*/ //  yada

/*console.log(3.55);
console.log("Hello World"); // konsolda yazdiriyor
console.log({true:"Osman",falsh:"osm"});

//console.clear(); tum konsollari siler

let a=5;
let b=10;

console.log("iki sayinin toplami :",a+b);
console.clear();*/

// Alert (uyari) popup ile cikti verme islemleri 

// alert("Merhaba");
/*let a=10;
let b=12;

alert("iki sayinin toplami : " + (a+b));*/
// alert("F5 tusuna basmayiniz");
                /*WINDOW:en buyuk cerceve
                //DOCUMENT: WINDOWUN ICINDEKI BIR OBJE
console.log(window);

console.log(location.port);

//document.location.port();//window>document>

console.error("Hata olustu");// kirmizi yazar
console.log("Hata olustu");// beyaz olur
console.warn("Hata olustu");// sari yazar*/

/* GELISTIRME ARACLARI*/
//Element, CONSOLE, SOURCES, debugger
/*console.log(location.port);
debugger;
console.log(location.port);
console.log(location.port);*/
                /* YORUM SATIRI*/
// ali bak buraya dikkat et. ciktisi yok.
/* genis yorumlar*/
/*
BETTER COMMENTS
? bu bir yorum
! onemli
todo : soyle yap
*test mesaj 
*/
        //VAR-LET-CONST

/*
--------SCOPE (kapsama)--------
-> Global Scope > Function Scope > Black Scope
*/


//var degiskenIsmi = 10; // ram e kaydeder
//console.log(degiskenIsmi);// bu cagirir

/*var a = 5; // global scope parantez icinde olmayacak
var b = 6; // her yerden erisebilirsin

if(true){
    var a = 57; // varla yaptigimiz icin eristi
    // kivircik parentez icinde yer almazsa her 
    // yerden ulkasilabilir
}
function method1(){
    var sayi= 10;
    console.log(a);// kivircik parentezlerin 
    //icinde tanimlarsak erisebiliyoz disinda olursa erisemez
}*/

/*function method1(){
    var a=5; // function scope sarili kivircik parentez 
    // icinde her yerden erisilir 
    if(true){
        var a=5;// block scope
    }
    while(true){

    }
    for(let i =0 ; i<=10; i++){

    }
}*/
/* DEGISKEN TANIMLAMA*///var-let-const degisken isimleri

/*
function selamVer(){
    var selam ="Herkese Selam"; //function scope
    if(true){
        var b = 10;
        let b = 12;
     yazsaydim erisemezdik cunku pembelerin
    icinen cagirmamiz lazim
        const b = 15; 
    yazsaydim erisemezdik cunku pembelerin
    icinen cagirmamiz lazim var la en buyuk fark
        }
        console.log(b);
        console.log(selam);
}

selamVer();*//*
                // var ile cagirirsak sonda yazilani cagirir
if(true){
let a = 5;
let a = 10;// let ve const ta bir degiskene tek ozellik atayabiliyoz
}
console log(a);

// let ve const(sabit degismez) farki
/* const a =10;
a =15;
console.log(a); yazmaz cunku sabit*/

/*let b=5;
b=7
console.log(b); yazar

const user = {
    username : "osman",
    password: "123"
}
user.username="osmanbey"; bunu atadiktan 
                sonra degistirebiliyoz
console.log(user);
*/

/* ? Veri Tipleri
1-String harf icerenlerde
2-number
3-Boolean
4-Null
5-Underfined
6-object
7-Function
*//*------------STRING------
let isim ="Osman bey 30 yasinda.";
console.log(isim);
console.log(typeof isim);// string mi yoksa ne
                        // oldugunu ogrenebiliriz*/
//let sayi1= 10; // number tipi

/*let sayi1="10"; // string
console.log(sayi1);
console.log(typeof sayi1);*/
/*
let sayi1 =10.3;
let sayi2 =4.7;
console.log(sayi1+sayi2);
*/
/* NUMBER
let a = "5";
let b = "2";
console.log(a+b);// string oldugu icin
*/
/*
let stringDegisken ="Yasiniz : ";
let yas = 30;
console.log(stringDegisken + yas);// yasiniz: 30 seklinde cikti olur.
*//*-------------BOOLEAN----------
//boolean : true ve false den olusur.evet hayirli gibi
//console.log(5>2); // true cikti verir
/*
let a = 3;
let b = 12;

let sonuc = a+b;
console.log(sonuc==15);//esit esittir:true
console.log(sonuc!=15);//esit degil:false
*/
                /* NULL
let a = null; // bos
a=24
console.log(a);//simdilik bos dursun sonra atamak icin
//--------UNDEFINED----(TANIMLANMAMIS)*/
/*
let a; bisey atanmamis
console.log(typeof a);
*/
/*--------OBJECT //(referans tiplerdir)
let insan ={ // object demek parantez var
    isim:"osman",
    soyisim : "bey",
    yas : 30
}
console.log(insan);// hepsini siraliyor
console.log(typeof insan); // object cikar

let rakamlar =[1,2,3,4,5,]; dizi oluyor
console.log(typeof rakamlar);
*/
/*---FUNCTION---
let func = function(){   //bunu func un icine koy demek
    console.log("Merhaba");
}
func();
console.log(typeof func);
*/
/* -------ARITMETIK OPERATORLER */

/*-----= atama operatoru onemli  !
    +
    -
    *
    /
    %
    ++
    --
    **
*//*
let a = 5;// atama demektir. esit demek degil

let isim = "osm";
*//*
let a = 5;
// let a = "5"; bunu toplamaz birlestirir.string oldugu icin

let b = 2;
console.log(a+b);// topla demek

console.log("Notlarin toplami : " + (a+b));
*//*
let a = 5;
let b = 2;
console.log(a-b);// cikar demek
*//*
let a = 5;//rem bellekte daha az yer kapliyor
let b = 2;  // ve yeni nesil
console.log(a*b);carpma yap demek
*/
//degiskenler turkce karakter kullanma ve birlesik olarak tanimlanmali
//rakamlada baslayamaz
/* 
let a = 5;
let b = 7;
let sonuc = (a+b)/2;
console.log(sonuc);
*/
// MOD ALAMA %
/* 10 / 3 =1 kalani verir
12 / 5 =2*//*
console.log(10%3); 1 //sonucunu verir

// ++ bir arttirmak
// -- bir azaltmak
let a = 10;
a++;
a++;
console.log(a); // 12 sonucunu verir

let b = 5;
b--;
console.log(b); // 4 sonucunu verir
 // ** ussunu almak icin
 console.log(2**3); // 8 sonucunu verir
*/

//------ATAMA OPERATORLERI------
/*
    =
    ==
    ===
    +=
    *=
    /=
    %=
    **=
*//*
let a = 5; // a, 5 demek
console.log(5==5); //esittir demek
*/
/*
let a = 5;
let b = 6;
let sonuc = a+b;
console.log(sonuc ==11);// true sonuc verir esit esit demektir
console.log(6=="5");// icerigine baktigi icin true 
                //sonucunu veriyor. normalde rakam ve string
*/
// === : hem tipler hemde degerlerinin esit olup olmadigina 
        // bakiyor
//    console.log(5==="5");// false cikar.tipleri farkli 
/*
let sayi = 4;
// sayi = sayi+2;
sayi+=2; // sayiya iki ekle ve esitle demek
console.log(sayi);// iki ekle ve sayi ibaresine tanimla demektir.
*/
/*
let sayi = 4;
/*
//sayi = sayi-2; // 2 sayisini verir
sayi-=2; // sayiya iki eksilt ve esitle demek
console.log(sayi);
*/

//todo soru bundan sonraki tanimlamalarda (let sayi = 4) 
//todo olarakmi devam eder. yoksa yeni atamasiylami 
/*
//sayi = sayi*3;
sayi*=3
console.log(sayi);// 12 sonucunu verir
*/
/*
//sayi = sayi/2;
sayi/=2
console.log(sayi);// 2 sonucunu verir
*//*
let sayi= 12;
//sayi = sayi%5;
sayi%=5
console.log(sayi);// 2 kalanini verdi*/
/*
let sayi= 3;
//sayi = sayi**2;
sayi**=2
console.log(sayi);//  ussunu al demek .9 sayisini verdi
*/
            // MANTIKSAL OPERATORLER
/*
    && : VE
    || :VEYA
    ! : DEGIL
*/
        /* &&
yasiniz 18 den buyuk VE 3000 tl olacak (sartlar olmasi lazim) 
iki sartta tamamsa true
biri false ise false cikar
*//*
let yas = 20;
let para = 3500;
let sagliklimi = false;
let hakSayisi = 3;
//console.log(yas>20 && para>3000 && sagliklimi==true);
// cunku true + true + false = false cikar hepsi true olacak

//console.log(5>3 || 2<1); // bir tane dogru olmasi true yazdirir.

//console.log(! (5>3));// ! olursa icindeki dogru da olsa tersi yazar.

console.log((para>3000 && hakSayisi>1) || (yas>18 && sagliklimi));
//(t +t =t) || (t+f= f) = T
// true sonucu cikar
*/
/*---------KARSILASTIRMA OPERATORLERI----*/
/*
    == : esitmi
    != : esit degilmi
    > : buyukmu
    < : kucukmu
    >= buyuk esit mi
    <= kucuk esit mi
*/
//console.log(5==3); false cikar
//console.log(5!=3); true cikar
/*
let yas = 23;
console.log(yas!=23); // esit degildir demektir. false cikar
*//*
//console.log(5>3); // true
//console.log(2<3); // true
console.log(5<=5); // true cikar ( 5<5 || 5=5 demek)
console.log(5>=5); // true cikar ( 5>5 || 5=5 demek)
*/

/*-------DIYALOG KUTULARI-----
-Alert : uyari
-prompt
-confirm
*/
/*console.log(window);
window.confirm(alert); // window un icinde bulunan elemanlar 
                        // window yazmadan cagrilabilir
    prompt(); // gibi
*/
/* function*/
//alert("islemden once yukari butonuna bas");
/*let isim =prompt("ismini gir:");//kullanicidan deger almak icin

let yas = prompt("yas gir:");
console.log("isminiz : " + isim);
console.log("yasiniz : " + yas); 
console.log(typeof isim); //string cikar
//alinan degerler her zaman ekrana string cikar
*/
//confirm("silmek istediginizden eminmisiniz ?");
//ekrana uyari cikar true yada false yazar
//true ise sunu yap seklinde
//console.log(sonuc); yazdirilir.
/*      KOSUL YAPILARI    */ 

/*if(kosul){
    //kodlar
}
else{
    //kodlar
}
*/
// soyle olursa boyle yap seklinde
// if false ise eger isleme girer
/*let not = 35;
if(not>50){
    console.log("gectiniz , notunuz :" + not);// dogru ise yazar
}else{
    console.log("kaldiniz , notunuz :" + not);
}
// if olmak zorunda else olmak zorunda degil

let yas = prompt("yas gir:");
let yas = prompt("butce gir:");

if(){

}
*/
/*
let yas = Number(prompt("yasiniz :"));
console.log(typeof yas);
let para = Number(prompt("butce : ")); // ekrana number cikar

if(yas>=18 && para>=3000){
    alert("sinava girer");// yas ve para okeyse girer
  // biri false ise giremez
}else{
    alert("sinava giremez...");
}
*/  /* DERS ORTALAMASI BULMA     
vize1 %30, vize2 %30 final %40
sayisal islem olacagi icin string yazma

let vize1 = Number(prompt("vize1 notu :"));
let vize2 = Number(prompt("vize2 notu :"));

let final = Number(prompt("final notu :"));

let ortalama = (vize1*0,3) + (vize2*0,3) + (final*0,4);

if(ortalama>=60){ // bunu tutmazsa kalir
    alert("gectiniz tebrikler :");
    console.log("gectiniz tebrikler");
}else{
    alert("kaldiniz kotu :");
    console.log("kaldiniz kotu");
}
*/
/* ikiden fazla seceneklerde
if(kosul){
    kodlar
}
else if(kosul){
    kodlar
}
else if(kosul){
bunlar uymazsa else calisir
}
else{
    kodlar
}
*/
/*YOL AYRIMI UYGULAMASI

// Else if yapisi // 4 ihtimal varsa bu kullanilir
let secilenYol = prompt("lutfen yolu seciniz :");

if(secilenYol ==1){
    alert("Secilen yol "+ secilenYol +". yoldur.");
}
else if(secilenYol==2){
    alert("Secilen yol "+ secilenYol +". yoldur.");
}
else if(secilenYol==3){
    alert("Secilen yol "+ secilenYol +". yoldur.");
}
else{
    alert("Lutfen gecerli bir yol seciniz !!");
}
*/
                        /*COKLU IF YAPISI
if(kosul){

}
if(kosul){

}
if(kosul){

}
//bunlarin hepsi calisir. yani true olanlari calistirir.
*/
/*
adini ve TrackEvent
Ad : bos gecilemez
TCKN : 11 karakterden olussun
*/
/*
let isim = prompt("Isim giriniz : ");
console.log(isim);// isim girmez isek ekrana bos alttaki
// gibi algilar ve cikti verir
//let isim2="";
//console.log(isim2);
*/
/*
let ad = prompt("Isim giriniz : ");
let tckn = prompt("TCKN giriniz : ");

kontrolEt(ad,tckn);

function kontrolEt(ad, tckn);{

    if(ad!=""){
        if(tckn.length ==11){
            console.log("isim ve tckn problemsiz girildi");
        }else{
            console.log("lutfen tc nizi 11 karakter olarak giriniz");
        }
    }else{
        console.log("lutfen isim alanini bos birakmayiniz..");
    }
}
*/ // yukarinin yerine alttakini yapariz
// if else : iki secenek olursa
// if else if else : 2 den fazla secenek olursa
// if if if : hepsini degerlediriyor
/*
let ad = prompt("Isim giriniz : ");
let tckn = prompt("TCKN giriniz : ");

kontrolEt2(ad,tckn);

function kontrolEt2(ad, tckn){

    if(ad==""){
        console.log("lutfen isim alanini bos birakmayiniz..");
        return; // bundan sonrasini calistirma    
    }if(tckn.length!=11){
            console.log("lutfen tc nizi 11 karakter olarak giriniz");
        return;
        }
    
        console.log("isim ve tckn problemsiz girildi");
    }
    */
   //          
               ------------- /*BEDEN KITLE ENDEKSI HESAPLAMA

let kilo = Number(prompt("kilo giriniz"));
let boy = Number(prompt("boyu metre olarak giriniz"));
let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("ideal kilonun altinda" + sonuc);
}else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("ideal kilonun altinda" + sonuc);
}
else if(sonuc>=25 && sonuc<=29.9){
    console.log("ideal kiloda" + sonuc);
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log("ideal kilonun cok ustunde obez" + sonuc);
}
else if(sonuc>=40){
    console.log("ideal kilonun cok ustunde morbid obez" + sonuc);
}
//mutlaka metre istiyorsa noktali gir yoksa yanlis.
*/
  -------------------              /*BENZIN ISTASYONU
musteriden alinacak bilgiler
1- yakit tipi
2- yakit litresi
*//*
let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" +yeniSatir
+"2-Benzin" +yeniSatir
+"3-lpg" +yeniSatir
+"Yakit turunu seciniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi==3){// veya oldugu icin if
                                //e gitmesi gerekiyor
    let yakitLitresi = Number(prompt("Yakit litresini giriniz"));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));
    
    if(yakitTipi=="1"){
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
        bakiye = bakiye-odenecekTutar;
        alert("Yakit alma islemi basarili" +yeniSatir
        +"Kalan bakiye : " + bakiye);
        }else{
            //bakiye yeterli degil
            alert("Bakiyeniz yeterli degildir" +yeniSatir
            +"Odenecek tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="2"){
        //Benzin
        let odenecekTutar = benzin*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakit alma islemi basarili" +yeniSatir
            +"Kalan bakiye : " + bakiye);
        }else{
            //bakiye yeterli degil
            alert("Bakiyeniz yeterli degildir" +yeniSatir
            +"Odenecek tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (odenecekTutar-bakiye));
        }
    }else if(yakitTipi=="3"){
        //Lpg
        let odenecekTutar = lpg*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakit alma islemi basarili" +yeniSatir
            +"Kalan bakiye : " + bakiye);
        }else{
            //bakiye yeterli degil
            alert("Bakiyeniz yeterli degildir" +yeniSatir
            +"Odenecek tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : " + (odenecekTutar-bakiye));
        }
    }

}
else{
    alert("lutfen gecerli bir yakit turu seciniz!");
} 
*/
/*     ------------------             SWITCH - KASE
switch(deger){ // bu deger case1 esitse onun kodu degilse
            digerlerine bakiyor.
            hicbiri degilse default calisiyor.
    case1:
    //kodlar
    break;
}
case2:
    //kodlar
    break;
case3:
    //kodlar
    break;
defaul:
//kodlar
break;
}
// if else alternatiftir.*/
/* Haftanin Gunleri uyg switch-case*/
/*let sayi = prompt("lutfen 1 ile 5 arasinda bir sayi giriniz");

switch(sayi) // "1" "2" "3" "4" "5" 
{   // switch ve case string ise ikiside olmali
    case "1" :
        console.log("Girilen sayi 1` dir.");
    break; // birakmak yada kirmak demek
    case "2" :
        console.log("Girilen sayi 2` dir.");
    break;
    case "3" :
        console.log("Girilen sayi 3` tur.");
    break;
    case "4" :
        console.log("Girilen sayi 4` tur.");
    break;
    case "5" :
        console.log("Girilen sayi 5` dir.");
    break;
    default:
        console.log("Girilen sayi 1 ile 5 arasinda olmalidir.!");
    break;
} 
// break olmassa olan yere kadar kismini konsola yazdirir.
*/
/*
let yeniSatir = "\r\n";
let metin = "1-Pazartesi"+yeniSatir
+"2-Sali"+yeniSatir
+"3-Carsamba"+yeniSatir
+"4-Persembe"+yeniSatir
+"5-Cuma"+yeniSatir
+"6-C.tesi"+yeniSatir
+"7-Pazar"+yeniSatir
+"Lutfen bir secim yapiniz";

alert(metin);// ekrana tum metni yazdiriyor

let deger = prompt("metin");
switch(deger){
    case "1":
        console.log("Pazartesi gunu");
        break;
    case "2":
        console.log("sali gunu");
        break;
    case "3":
        console.log("carsamba gunu");
        break;
    case "4":
        console.log("Persembe gunu");
        break;
    case "5":
        console.log("Cuma gunu");
        break;
    case "6":
        console.log("Cumartesi gunu");
        break;
    case "7":
        console.log("Pazar gunu");
        break;
    default:
        console.log("lutfen gecerli bir deger girin");
}
*/
                    /* ATM UYGULAMASI*/
/*
let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye goruntuleme"+yeniSatir
+"2-Para cekme"+yeniSatir
+"3-Para Yatirma"+yeniSatir
+"4-Cikis"+yeniSatir
+"Lutfen bir deger seciniz.";

alert(metin);

let secim = prompt("metin");
switch(secim){
    case "1":
        console.log("Bakiye goruntuleme");
        // alert("Bakiyeniz : " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("cekmek istediginiz tutari giriniz"));
        if(cekilecekTutar<bakiye){
            // basarilidir
            bakiye = bakiye-cekilecekTutar;
            alert("Kalan bakiye : " + bakiye);
        }else{
            alert("bakiyenizden fazla para cekemezsiniz!" +yeniSatir
            +"Bakiyeniz : " +bakiye + " " + "Cekilecek Tutar : " + cekilecekTutar);
            
        }
        break;
    
    case "3":
        let yatirilacakTutar = Number(prompt("Yatirilacak tutari giriniz :"));
        bakiye = bakiye+yatirilacakTutar;
        alert("Guncel bakiyeniz : " + bakiye);
        break;
    case "4":
        alert("Sistemden cikis yapilmistir...");
        break;
    default:
        alert("lutfen 1 - 4 arasinda deger giriniz!");
        break;
}
*/
---------------------------/* 
---------------------TYT PUAN HESAPLAMA

let turkceDogru , turkceYanlis = 0;
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuani = 0,

let yenisatir = "\r\n";
let mesaj = "TYT Puan Hesaplama uyg hosgeldiniz" +yeniSatir
+" 1-Puan hesapla" +yeniSatir
+" 2-Cikis yap";

//alert(mesaj);

let secim = prompt("mesaj");
switch(secim){
    case "1":
        okulPuani = Number(prompt("Okul Puanini Giriniz"));
        turkceDogru = Number(prompt("Turkce Dogru Sayisi"));
        turkceYanlis = Number(prompt("Turkce Yanlis Sayisi"));

        matematikDogru = Number(prompt("Matematik Dogru Sayisi"));
        matematikYanlis = Number(prompt("Matematik Yanlis Sayisi"));

        sosyalDogru = Number(prompt("Sosyal Dogru Sayisi"));
        sosyalYanlis = Number(prompt("Sosyal Yanlis Sayisi"));
        
        fenDogru = Number(prompt("Fen Dogru Sayisi"));
        fenYanlis = Number(prompt("Fen Yanlis Sayisi"));

        //30 8/4 =2 yanlis
        let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
        puan = (kalanDogruSayisi*4) + 100;
        alert("TYT Puaniniz : " + puan);
        
        break;
        
    case "2":
        alert("Uygulamadan cikis yapildi..");

        break;
    default :
    alert("Lutfen gecerli aralikta deger giriniz");
    break;
}
    */ //       TUR DONUSUMLERI  
    /*
    -------------------------TÜR DÖNÜŞÜMLERİ (DATA TYPES)---------------------
    strings, numbers , boolean , undefined and null //! primitive(ilkel) Veri Tipi
    object , function  //! Referans (Gelişmiş) Veri Tipi
*/
/*
//? veri tabanından aldığımız değerin stringden>numbera veya numberdan>stringe ihtiyaç doğrultusunda döüştürülmesine denir.

let a = 5;
 let b = Number ("10");
 console.log(a+b); //consolda çıktı 15 olur.
//number olmasa 510 yazar

 String veri tipinden number veri tipine dönüştürmek
let a = 5;
let b = "10"; 
let c = Number(b);
 console.log(typeof c) // consolda veri tipi number çıkar
 console.log(a+c); // consolda 15 ifadesi çıkar


//! parsInt() ve parsFloat fonksiyonlarr string ifadeyi 
//!numbera değiştitir.parsInt sayının noktadan önceki 
//! kısmını yazdırır. parsFloat sayının tamamını yazdırır.

console.log(window): // windowun alt objelerindedir.

 let a = 8;
 let b =parseInt("12.5") // consolda 12 çıktısı alınır
 let c =parseFloat("12.5") // consolda 12.5 çıktısı alınır

//!.toString numberdan string ifadeye değiştirilmesine yardımcı olur.

 let x = String(55);
 let y = (55).toString;
 console.log(typeof x) // consolda string

 console.log(x) // 55
 console.log(typeof y) // consolda string
 console.log(y) // 55

 let sonuc = String (true);
 console.log(typeof sonuc) // consolda string
 console.log(sonuc) // True


 let a = Number("B");
 console.log(a) // Consolda NaN (Not a Number) ifadesi çıkar yani 1 sayı değildir.

 let rakamlar = String([1,2,3,4]); //! object ten stringe çevrilir
 console.log(typeof rakamlar); // consolda string
 console.log(rakamlar); // 1,2,3,4

*/
/*
let rakamlar = Number([1,2,3,4]); //! object (dizi(array)) ten numbera çevrilemez 
console.log(typeof rakamlar); // Consolda NaN (Not a Number) ifadesi çıkar yani 1 sayı değildir.
console.log(rakamlar); // NaN çıktısı alınır.
*/    


                /* DEBUGGER VE TOOLTIP
/*
Breakpoint ve Tooltip Nedir?

Tooltipler yan tarafta açılan açıklama kutularıdır.

Float veri tip ondalıklı sayıları temsil eder.

Breakpoint  (debugger)sayesinde  kodların teker teker 
çalışmasını sağlayarah yapılan bir hatanın bulunmasına yardımcı olur.

*/
/*
debugger; //! bu kodu yazdığımız koyduğumuz yerden 
//!itibaren kodu çalıştırıyoruz 
//!consoldan "Sources" bölümünde tek tek kontrol 
//!edebiliriz ve kodaları inceleyebilirz
let a = 10;
let b = 15;
let c = a + b;
let d = a + b + c;
let e = a + c + b;
let sonuc = a + b + c + d + e;
console.log("Sonuç", sonuc);

console.log(window)
*/
       /*DONGULERE GIRIS FOR-WHILE-DO WHILE */
            //FOR
/*
for(degisken;kosul;artirma-azaltma){
    //Kodlar
}
//temiz kod icin tekrar olanlari tek satirda koda yazmak
// 1 den 10 kadar yazdiralim mesala
*/
/*
for(let i=1; i<=10; i++){
    console.log(i);
}
// 1 den 10 kadar ciftleri yazdiralim
*/
/*
for(let i=0; i<=10; i=i+2){
    console.log(i);
}
*/
// 1 den 10 kadar tekleri yazdiralim
/*
for(let i=1; i<=10; i=i+2){
    console.log(i);
}
*/
// 1 den 10 kadar tekleri yazdiralim
/*
    *osman
    *Naber
    *osman
    *Naber  -1,3,5 te osman 2,4,6 da Naber çıktısın alınsın istiyoruz.
for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log("osman")
    }else{
        console.log("naber");
    }
    
}
*/
// 50 den 1 kadar yazdiralim
/*
let toplam = 0;
for(let i=50; i>=1; i--){
    toplam=toplam+i
    console.log(i);
    }
    console.log("Toplam : " , toplam);
*/
/*Döngüler Birşeylerin sürekli tekrarlanmasını istediğimiz 
yerde kullanılır.Tek satırda yazdığımız kodu bizim izin verdiğimiz çercevede tekrarlanmasına yardımcı olur.

1-For : for(degisken ; koşul ; arttırma-azaltma){ //kodlar }

    for(let = 1 ; i<= 10 ; i++){
        console.log(i);  // Bu for döngüsü i 10 gelene kadar 
        çalışır koşul 10 eşit veya küçük olduğu için
    }
*/        
 /*     WHILE DONGUSU

/*
    While(koşul){
        /kodlar
        /sayacın değerini atarız
    }
    eger not 75 kosulumuzda not>50 sonsuz donguye girer
    onun icin kosul atamasi yapiyoruz
*/

//? 1'den 10'a kadar yazdıralım


/*
let sayac = 1; // atama islemi
while (sayac <= 10) {
    
    console.log(sayac);
    
    sayac++;
}
*/


//? 1' den 10 ' a kadar tekleri çifttleri yazdırma

/* ÇİFTLER İÇİN
/*
let sayac = 0;

while ( sayac<=10 ) {
    console.log(sayac) ;
    sayac += 2 ;
}  
Veya 

while (sayac<=10){
    if(sayac%2==0){
        console.log(sayac)
    }
    sayac++;
}
*/

/* TEKLERİ YAZDIRMA
let sayac = 1;
while ( sayac<=10 ) {
    console.log(sayac) ;
    sayac += 2 ;
} 
*/
// Veya
/*
let sayac = 0;
while (sayac<=10){
    if(sayac%2==1){
        console.log(sayac)
    }
    sayac++;
}
*/
/*
// consolda 7 ' ye kadar yazmasına yardımcı olur.
let sayac = 1
while(true){
    console.log(sayac);
    if(sayac==7){
        break; //while dongusunu kirip cikiyor
    }

    sayac++
}
*/
/*          DO-WHILE DONGUSU
/*
    do{
        //kodlar
    }while(koşul);// kosulu tutarsa yani true olursa calisir
                ama false olursa bir kere kodu yazar ve sonra while gecer
                false oldugu icin alttan devam eder 


*/
//! Koşul false olduğunda  do - while döngüsünde koşul sonda
//! olduğu için ilk seferde kod çalışır 2.3. kez çalışmaz,
//!while döngüsünde koşul başta olduğu için hiç çalışmaz

// 1'den 10'a kadar yazdıralım

/*
let sayac = 1;
do{
    console.log(sayac);
    sayac++;
}while(sayac<=10);



/*
let yas =23;
do{
    console.log("Ehliyeti alabilirsiniz")
}while(yas>=25) // koşul sağlanmasa dahi biz consolda 1 
            kere de olsa ehliyeti alabilirsiniz çıktısını görürüz.
*/


/* Tek sayıları yazdırma
let sayı =1;
do{
    if(sayı%2==1){
    console.log(sayı);
    }
    sayı++;
}while(sayı<=10);
*/

//! 1-20 arasındaki tek sayıları toplama
/*
let sayac =1 ;
let toplam = 0;

do{
    if(sayac%2==1){ //tek veya cift oldugunu anlamak icin mod aliyoz
    toplam+=sayac;
    }
    sayac++;
}while(sayac<=20);
// donguden cikinca toplami yaziyor
console.log("Toplam: ", toplam)
*/
/*          BREAK (kirmak)-CONTINUE(bir kere kir)

break - continue
*/
/*
1-den 10' a kadar  sayıları yazdıralım 8'e geldiğimizde 
döngüden çıkalım
 while ve do dongulere ozel

let sayac =  1 ;

while(sayac<=10){
    console.log(sayac);
    if(sayac==8){
        break; //kodun 8 e gelince durmasına yardımcı olur.
    }
    sayac++;
}
*/

// ? Continue 

// 1 2 3 4 5 6 7  9 10 -8 yazdırmadan devam et
/*
let sayac =0;

while(sayac<=10){
    sayac++;
    if (sayac>10){ // 11 in olmasini istemiyorsak yazar
        break;
    }
    if(sayac==8){
        continue; // continue döngüyü sadece bir kez kırmaya 
        yardımcı olur. contunia den sonraki consolu yazdirma
    }
    console.log(sayac);
}
*/
//! break kodu yazıldığında kendinden sonraki döngülerin 
//!calışmasını engeller. continue de ise sadece o kodun çalışmasını engeller.
        

            /*CARPIM TABLOSU*/
/*

1*1
1*2
1*3
.
.
*//*
for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        console.log(i+"x"+j+"="+(i*j));
    }
    console.log("--------satir----------");
}
*/
// yukaridan asagi yazdirdigi icin icteki 
//dongu 11 olunca dongu sonlaniyor

/*      ASAL SAYI BULMA*/

/*
1 VE KENDISINDEN BASKA BOLENI OLMAYAN
14    =2, 3, 4, 5, 6, 7, (8 ve sonrasina gerek yok)
cunku yarisindan sonrasi kusuratli cikiyor

let a = Math.floor(7.9); // floor assagiya diziyor
console.log(a);
*/
//15 olsa
/*
let sayi= Number(prompt("sayi gir"));
let sonuc =true;
for(let i=2 ; i<= Math.floor(sayi/2) ; i++){
    if(sayi%i==0){
        // asal degil
        sonuc=false;
        break; // false ise kirip cikiyor
    }
}
if(sonuc){
    alert(sayi +" asaldir.");
}else{
    alert(sayi +" asal degildir!");
}
*/
            /*FAKTORIYEL HESAPLAMA
// 5= 5,4,3,2,1=120 CARPIMI DEMEK

// 6 sayisi icin
/*
let sayi= Number(prompt("sayi gir"));
let carpim=1;

for(let i =1 ; i<=sayi ; i++){
    carpim =carpim*i;
}
aler("Sonuc :" + carpim);
*/
        /* ARMSTRONG SAYISI UYGULAMASI

/*        153 - 370 - 407 sayisi armstrong
153= 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 =153
bir sayinin rakamlarinin kupunun toplami kendisini veriyorsa
armstog sayisi denir
*/
/*
let sayi= prompt("sayi giriniz"); // numbere cevirirsek sayinin farkli metotlari calismiyor
let toplam =0;
for(let i=0 ; i<sayi.length; i++){ // girilen sayinin basamak degeri kadar carp
    let rakam = sayi.charAt(i);
    toplam+= rakam*rakam*rakam; // kupunu aldik
}  
if(Number(sayi)==toplam){
    alert("Armstrong sayisidir :");
}else{
    alert("Armstrong sayisi degildir");
}
//sayinin index 0 dan baslar.153 sayisi 0,1,2 seklinde dizilir  
*/
/*              METODLAR
 puzzle parcalarina metod deniyor sonradan birlesiyor

 ---------Parametresiz ve geriye deger dondurmeyen metod tanimlamak---

function yazdir(){
    kodlar yazilacak
}
*/
/*
function yazdir(){
    debugger;
    console.log("osm");
 // bu paketi altta yazdir komutu ile yazdiriyoruz
}
yazdir();
debugger;
yazdir();
yazdir();
// metodu bir kere yaz sonra cagir
*/
/*
function topla(){
    console.log(5+7);
}
topla();
// functionu nerede olursa olsun tanimlayabiliyoruz
*/
// PARAMETRELI METOD TANIMLAMAK (geriye deger dondermeyen)

/*
function yazdir(isim, soyisim){ //parantez ici parametre demek
    //debugger;
    console.log(isim + " " + soyisim);
    
}
//debugger; // detay girmek icin kullanilir
yazdir("osm","gls");
yazdir("rec","ivd"); // console direk yazar
*/
/*
cube(5);
cube(3); // bu metodu istediniz kadar cagirabilirsiniz

function cube(sayi){
    console.log(sayi*sayi*sayi);
}
    */
/*
let yas = Number(prompt("yasi giriniz"));
kontrolEt(yas);

function kontrolEt(yas){
    if(yas>18){
        console.log("ehliyeti alabilirsiniz");
    }else{
        console.log("ehliyeti alamazsiniz");
    }
}
*/
//parseInt()--->parentez metod demek

            /* GERIYE DEGER DONDUREN METOD (RETURN)*/
/*
let donenDeger = cube(3);
console.log(donenDeger);

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc; // return yazmaz isek suslu parantez
                //disina ulasip yeni degeri yazdiramayiz
// metodun dondurdugu yer ilk once cagrildigi yerdir
// amac suslu parantez disina cikarip metodlar arasinda
 //kullanmak yazdirmak 
}
*/
/*
let donenDeger = cube(2);
kareAl(donenDeger);

function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}
function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc; 
    // console.log("osm); return dan sonraki hicbir kod calismaz
}
*/
/*
yazdir1();

function yazdir1(){
    console.log("osm");
    // void : geriye deger dondurmeyen demektir.
}
*/
/*
let donenDeger = cube(2);

function kareAl(sayi){
    let sonuc = sayi*sayi;
    return sonuc; // ilk cagrildigi yer olan assagiya gider.
}
function cube(sayi){
  
    let sonuc = sayi*sayi*sayi;
    let kareSonuc = kareAl(sonuc);
    console.log(kareSonuc);
    
}
*/
/* KELIME SAYISI BULMA UYGULAMASI

let metin ="suanda yalovada egitimdeyim." ;

let harf = prompt("harfi giriniz");

let sonuc = bul(harf);

alert("harf sayisi : " + sonuc);

function bul(harf){
    let toplam =0;
    for(let i =0; i<metin.length ; i++){
        if(metin.charAt(i)===harf){
        //if(metin.charAt(i)tolowerCase()===harf.tolowerCase()){ 
            // tolowerCase buyuk kucuk farkkettirmiyor
            toplam+=1;
        }
    }
    return toplam;
}

/* baska bir ornek
bul("a");
bul("s");
bul("b");

function bul(harf){
    let toplam =0;
    for(let i =0; i<metin.length ; i++){
        if(metin.charAt(i)===harf){
        //if(metin.charAt(i)tolowerCase()===harf.tolowerCase()){ 
            // tolowerCase buyuk kucuk farkkettirmiyor
            toplam+=1;
        }
    }
    console.log("harf sayisi : " + toplam);
}
// metodu bir kere yazip istedigimiz kadar cagiriyoz
            /*MUKEMMEL SAYI UYGULAMASI
// 6 - 28 - 496 bolen sayilarin toplami sayinin 
// iki katina esitse mukemmel sayidir
//bir sayinin tam bolunmesi icin maksimum yarisina
// kadar yolumuz var
*/
/*
isPerfectNumber(5);

function isPerfectNumber(number){
    let toplam = 0;
    for(let i =2 ; i<=number/2 ; i++){
        if(number%i==0){
            toplam+=;
        }
    }
    toplam += 1 + number;

    if(toplam == number*2){
        console.log("mukemmel sayidir...");
    }else{
        console.log("mukemmel sayi degil..");
    }
}
*/
                    /* 10 LUK SAYIYI IKI LIGE CEVIRME
//Decimal To Binary Conversion
/*
10/2,5/2,2/2 seklinde sondan basa dogru yaziyoruz 10=1010
// burada bir sayıyı sürekli ikiye bölüyoruz ve 
//kalan sayıları sağdan sola doğru yazıyoruz.


function convertDecinalToBinary(number){
    let binary=" ";
    while(true){
        binary+=(number%2).toString(); // stringe cevirir
        // binary+=number%2 +"" koyarakta sayıyı stringe 
        //çevirebiliriz.
        number=Math.floor(number/2); // kusurat atiyor
        if(number==1){
            //Artık bölmek yok döngüden çıkılacak
            binary+=1
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç :" + result);
}


function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1 ; i>=0 ; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}

*/
                /* IKILIK SAYIDAN 10 LUGA CEVIRME
*/
// Binary To Decinal Conversion (2 lik sayıdan 10 luk 
//sayıya çevirme)

// 1011 sayıyı 10 luk sayıya çevirmek için
// 1*2^0 + 1 *2^1 + 0*2^3 + 1*2^4=  sayımız

//! Math.pow(2,3) yazdığımızda konsolda 8 çıktısı alınır. 
/*
let binary = "1011"; //consolda 11 çıkar

function converBinaryToDecinal(binary){
    let toplam =0;
    let ust =0;
    for(let i =binary.length-1; i>=0 ; i--){
        toplam +=Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }
    // math.pow : ussu carpmak demek

    console.log("Sonuç : " + toplam);
}

converBinaryToDecinal(binary);
*/
// 0 yutan eleman oldugu icin 0 lari calistirmak istemez isek;

/*
let binary = "1011"; //consolda 11 çıkar

function converBinaryToDecinal(binary){
    let toplam =0;
    let ust =0;
    for(let i =binary.length-1; i>=0 ; i--){
        if(Number(binary.charAt(i))!=0){
        toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
        }
        ust++;
    }
    console.log("Sonuç : " + toplam);
}

converBinaryToDecinal(binary);
*/
//?-------------------SADIK TURAN FUNCTION--------
/*
function yasHesapla(dogumYili){
    return 2018 - dogumYili;
}

let egeAda = yasHesapla(2012);
let egeYigit = yasHesapla(2010);
let egeCinar = yasHesapla(2017);

function EmekliligeKacYilKaldi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} Emekli olmaniza ${emeklilik} yil
        kaldi`);
    }else{
        console.log(`Zaten emekli oldunuz`);
    }
}
EmekliligeKacYilKaldi(2012, `Ada`);
EmekliligeKacYilKaldi(2010, `Yigit`);
EmekliligeKacYilKaldi(2012, `Ada`);

*/
/*
function sum(a,b){
    var c = a+b;
    return c;
}
console.log(sum(10,20));

//Function Expressions
*/
/*
const sum = function(a,b){ // degisken olarak ayarlarsakta
                        // ayni sonucu veriyor
    var c = a+b;
    return c;
}
console.log(sum(10,30));
console.log(sum(10,)); // NaN uyarisi verir cunku karsiligi yok
console.log(sum(10,30,40,50)); // fazla yazar isek tanimlamaz
*/
/*
const sum = function(a,b){ 
    if(typof a === `undefined`){ a=0;}
    if(typeof b === `undefined`){ b=0;}
         // varsayilan parametre atamasi
        // 2. konsolda 0 ile toplar ve 10 ciktisi alir 
    
var c = a+b;
return c;
}
console.log(sum(10,30));
console.log(sum(10,)); // 
console.log(sum(10,30,40,50));
*/
/*
const sum = function(a=0,b=0){ // Es6 Default Parametresi
    //yeni ozellik bu sekilde yazabiliriz.
    var c = a+b;
    return c;
}
console.log(sum(10,30));
console.log(sum(10,)); 
console.log(sum(10,30,40,50));
*/
/*
const sum = function(a=0,b=0){ 
    var c = a+b;
    return c;
}

function args(){
    console.log(arguments);
}
// 3. konsoldaki fazla yazilan sayilarin erismek icin
// args parametresini kullaniyoruz
args(10,20,30);

console.log(sum(10,30));
console.log(sum(10,)); 
console.log(sum(10,30,40,50));
*/
/*
const sum = function(a=0,b=0){ 
    var c = a+b;
    return c;
}

function sumAll(){
    var total = 0;

    for(let i =0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum(10,30));
console.log(sum(10,)); 
console.log(sum(10,30,40,50));
console.log(sumAll(10,30,40,50,40,60,20));
// farkli parametrelerin totaline ulasabiliyoruz
*/
/*
var hesapA = {
    ad : `Sena Turan`,
    hesapNo : `123456789`,
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : `Emel Turan`,
    hesapNo : `123456789`,
    bakiye : 3000,
    ekHesap : 2000
}
function paraCek(hesap,miktar){
    console.log(`mrhaba ${hesap.ad}`);
    
    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log(`paranizi alabilirsiniz`);
    }else {
        var toplam = hesap.bakiye + hesap.ekhesap;
        if(toplam>=miktar){
            if(confirm(`ek hesabinizi kullanmak istermisiniz`)){
                console.log(`paranizi alabilirsiniz`);
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu
                hesabinizda ${miktar}
                bulunmamaktadir.`);
            }
        }else{
            console.log(`uzgunuz bakiye yetersiz`);
        }
    }
}
paraCek(hesapA,2000);
paraCek(hesapA,3000);
//paraCek(hesapB,2000);
*/


                /*DIZILERE ARRAY GIRIS
birden fazla degeri birarada tutan yapilar:
altgr + 8 ve 9 tuslari alt parantez
let sayilar = [0,1,2,"enes"3,4,5,6];
// soldan saga 3. deger dersek enes degerini verir 
// saymaya 0 dan basladigi icin. 
console.log(sayilar[3]); 

console.log(sayilar[2]); // 2 degerini verir.
// dizi icindeki degeri degistirmek istersek;
sayilar[3]="osm"; // enes stringini osm ile degistirdik atadik
console.log(sayilar[3]); // osm ciktisi verir

sayilar[sayilar.length-5]="osm";
console.log(sayilar[3]); // osm ciktisini verir

/*let isimler = ["enes", "kubra","ali","ahmet"];
isimler[2] ="osm"
console.log(isimler[2]); // osm olarak cikti verir
*/
/*
let isimler = ["enes", "kubra","ali","ahmet"];
console.log(isimler); // 0:enes, 1:kubra, 2:ali, 3:ahmet ciktisi verir
*/
/*
let karisikDizi = [1,"enes", 5, 6, "kubra", true, null,undefined];
console.log(karisikDizi[5]); // true ciktisi verir
*/
/*
let isimler = new Array("enes","Ahmet");
console.log(isimler);
*/
// let isimler = [];

function topla(){
    console.log(15);
}

let personel2 = {
    isim:"enes",
    soyisim : "bayram",
    yas:23,
}
let rakamlar = [1,2,3,4,5,6,7,8,9];

let personelArray =[personel1,personel2, true, rakamlar];
console.log(personelArray[3][2]); // rakamlar ve true 
                    //ciktisi verir 
/*
let dizi1 = ["enes","ali"];
let dizi2 = new Array("enes","ali");//bunlarin ikisi de ayni
//number, string, boolean, underfined null, object(array)

console.log(typeof dizi2); // object oldugunu goruruz

................/* FOREACH DONGUSU*/
/*
let isimler = ["enes", "kubra","ali","ahmet"];
isimler.forEach(function(isim){
    console.log(isim); // dongu donerek yazdiriyor
}); // tum isimleri alt alta yazar
bunu foreach ile boyle yazdiriyoruz ama for ilede yazdirirsak:
*/
/*
let isimler = ["enes", "kubra","ali","ahmet"];
for(let i=0 ; i<isimler.length ; i++){
    console.log(isimler[i]);// uzunlugu kadar don ve her seferinde
    // bir arttir demektir.  
}
*/
/*
//birde while  gosterelim.
let isimler = ["enes", "kubra","ali","ahmet"];

let sayac = 0;
while (sayac<isimler.length){
    console.log(isimler[sayac]);
    sayac++;
} // ayni sonucu verir dizinin length uzunlugu kadar.
*/

//?.........DIZININ METODLARI...
/*
push : dizinin sonuna eleman ekklerayrica dizinin 
uzunlugunu doner
unshift : dizinin basina eleman ekler, eleman sayisini
 geriye doner

pop : dizinin sonundan eleman siler, eleman sayisini doner
shift : dizinin basindan eleman siler, eleman sayisini doner

splice(index,incdex) : eleman eklemek ve silmek icin kullanilir

toString : diziyi stringe cevirebiliriz.
join : diziyi stringe cevirir. farki ise araya eleman 
ekleyebiliriz.

concat : dizileri birlestirmek icin kullanilir.
slice(dilimlemek): diziyi istenilen yerden bolup yeni
 bir dizi olusturmak
length: dizinin uzunlugunu verir.
reverse : dizinin elemanlarini ters cevirmek.
split(bolmek): belirli bir ifadeye gore bolup diziye cevirmek
indexOf : elemanin index numarasini verir.
includes : verilen elemani iceriyormu ona bakar
*/
/*


/*function push(let value){
    //! elindeki diziyle value ekliyor.
    return length;
}
*/

//? PUSH METOT-Dizinin sonuna eleman ekleme
/*
let arabalar =["bmw","toyota","renault","mercedes","porsche"];
console.log(arabalar.length); //5 ciktisi olur
let diziUzunluk = arabalar.push("opel");

console.log(diziUzunluk); // yeni uzunluguna opelide ekleyip yazar.
6 ciktisi v erir.

*/
//? UNSHİFT METOT -Dizinin başına eleman ekleme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.unshift("hundai");
console.log(arabalar); //consolda hundai, bmw,toyota,renault, mercedes, porsche çıktısı alınır.
*/

//? POP METOT - Dizinin sonunda eleman silme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.pop();
console.log(arabalar);//consolda bmw, toyota, renault, mercedes çıktısıs alınır.
let uzunluk = arabalar.pop();
console.log(uzunluk); //consolda 4 çıktısı alınır.
let silinenEleman = arabalar.pop();
console.log(silinenEleman); //consolda porshe çıktısı alınır.
*/

//? SHİFT METOT - Dizinin başından eleman silme
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.shift();
console.log(arabalar); // condolda toyota, renault, mercedes,porsche çıktısı alınır.
let silinenEleman = arabalar.shift();
console.log(silinenEleman);// consolda bmw çıktısı alınır.
*/

//? SPLİCE METOT - Diziye istediğimiz yere ekleme çıkarma yapılabilir.

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalar);  //consolda bmw,toyota, renault, mercedes,
porsche çıktısı alınır.
arabalar.splice(0,0,"hundai");
console.log(arabalar); //consolda hundai, bmw,toyota, renault, 
mercedes,porsche çıktısı alınır.
arabalar.splice(2,0,"hundai");
console.log(arabalar);//consolda bmw,toyota, hundai, renault,
mercedes,porsche çıktısı alınır.
arabalar.splice(1,2); // 1. indeksten başla 2 eleman sil demek oluyor.
console.log(arabalar); //consolda bmw,mercedes, porsche çıktısı alınır.
arabalar.splice(2,2,"hundai"); // 2. indexten itibaren 2 eleman 
sil hundai ekle demek oluyor.
console.log(arabalar); //consolda bmw, toyota, hundai,porsche 
çıktısı alınır.
*/

//? TOSTRİNG METOT  diziyi stringe cevirebiliriz.
/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(typeof arabalar); //consolda object çıktısı alınır
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar); // consolda string çıktısı alınır
console.log(stringArabalar);
*/

//? JOİN METOT diziyi stringe cevirir. farki ise araya eleman 
//?ekleyebiliriz.

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let stringArabalar = arabalar.join("-");
console.log(stringArabalar); //consolda ifadeleri string alıp 
aralarında - işareti olur.
*/

//? CONCACT METOT - iki diziyi birleştirmeye yardımcı olur.

/*
let arabalar1 = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let arabalar2 = ["hundai", "tofaş"];
let birleşmişDizi = arabalar1.concat(arabalar2);
console.log(birleşmişDizi); // consolda "bmw" , "toyota", "renault",
 "mercedes", "porsche", "hundai", "tofaş" çıktısı alınır.
*/

//? SLİCE METOT - Diziyi bölmeye yardımcı olur.

/**
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let ayrıDizi = arabalar.slice(2);  //2.indexten itibaren parçala demek
console.log(ayrıDizi); //consolda renault,mercedes, porsche çıktısı alınır.
*/

//? LENGTH ÖZELLİK dizinin uzunlugunu verir.

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalar.length); //consolda dizinin uzunluğunu yazar.
*/

//? REVERSE METOT -Diziyi ters çevirme

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
arabalar.reverse();
 console.log(arabalar); //consolda porsche, mercedes, renault, toyota,
  bmw şeklinde çıktı alınır.
 */

 //? SPLİT METOT -belirli bir ifadeye gore bolup diziye cevirmek

 /*
 let isimler = "Enes , Ali, Veli";
 let  isimlerDizi = isimler.split(","); // virgüle göle isimleri 
 böl ve diziye çevir.
console.log(isimlerDizi); // consolda diæi olarak "Enes", "Ali" ,
 "Veli" çıktısı alınır.
*/

//? INDEXOF METOT elemanin index numarasini verir.

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let index = arabalar.indexof("bmw");//consolda bmw olduğu için 0 
çıktısı alınır.
/! arabalar.indexof("hundai"); //consolda -1 çıktısı alınır.
if(index==0){
    console.log("Belirtilen eleman vardır.");
}else{
    console.log("Eleman yoktur.");
}
*/

//? INCLUDES METOT verilen elemani iceriyormu ona bakar

/*
let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let sonuc = arabalar.includes("porsche");
console.log(sonuc); //consolda true çıkar
let sonuc2 =arabalar.includes("opel");
console.log(sonuc2); //consolda false çıkar.
if(sonuc){
    console.log("Eleman vardır.");
}else{
    console.log("Elemen yoktur.");
}
*/
//? URUN ARAMA UYGULAMASI
//! objeler kıvırcık parantezle tanımlanır ve farklı 
//değerleri tutabiliyor
/*
let urun1 = {
    isim : "ACER Swift",
    kategori :  "Teknoloji",
    fiyat : 6.219
}
let urun2 = {
    isim : "ACER Nitro 5",
    kategori :  "Teknoloji",
    fiyat : 15.475
}
let urun3 = {
    isim : "ACER Gaming",
    kategori :  "Teknoloji",
    fiyat : 13.999
}
let urun4 = {
    isim : "LENOVO V15",
    kategori :  "Teknoloji",
    fiyat : 10.999
}
let urun5 = {
    isim : "LENOVO V14",
    kategori :  "Teknoloji",
    fiyat : 4.399
}
let urun6 = {
    isim : "LENOVO Ideapad",
    kategori :  "Teknoloji",
    fiyat : 4.510
}
//toUpperCase diyerek yazıları büyük harfe çeviriyoruz-
//includesda parantez içerisinde sona sıfır eklememizin
// sebebide 0. indexten itibaren kontrol et demek oluyor.

let urunler = [urun1,urun2,urun3,urun4, urun5,urun6];
let filtreliUrunler = []; //boş bir dizi tanımlıyoruz 
//eğer kullanıcı yukarıdaki ürünlerden birini yazarsa
// filtreli ürünler içerisine dizi olarak ekliyor.

let kullaniciUrunIsmi  = prompt("Bir ürün ismi giriniz");

fitreliUrunlerDoldur(urunler);
filtreliUrunlerYazdir(filtreliUrunler);

function fitreliUrunlerDoldur(urunler){
    urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
        filtreliUrunler.push(urun);
        }
    });
}

function filtreliUrunlerYazdir(urunler){
    urunler.forEach(function(urun){
    console.log("-------------------------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori)
    console.log("-------------------------------------------");
});
}
*/
//?                 KITAP BULMA UYGULAMASI
/*
let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25 ,raf:"1.5.RAF"}
let kitap2 = { isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 56,raf:"2.3.RAF" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34 ,raf:"3.4.RAF"}
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 45,raf:"4.1.RAF" }
let kitap5 = { isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 22,raf:"5.3.RAF"}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

// Rafları obje olarak tanımlıyoruz ki sonrasında kodları istediğimiz gibi konsolda tanımlayalım.
//kod false olursa consolda gösterilmeyecek. cr4
let raf11 = { kod: "1.1.RAF", goster: false }
let raf12 = { kod: "1.2.RAF", goster: false }
let raf13 = { kod: "1.3.RAF", goster: false }
let raf14 = { kod: "1.4.RAF", goster: false }
let raf15 = { kod: "1.5.RAF", goster: false }


let raf21 = { kod: "2.1.RAF", goster: false }
let raf22 = { kod: "2.2.RAF", goster: false }
let raf23 = { kod: "2.3.RAF", goster: false }
let raf24 = { kod: "2.4.RAF", goster: false }
let raf25 = { kod: "2.5.RAF", goster: false }

let raf31 = { kod: "3.1.RAF", goster: false }
let raf32 = { kod: "3.2.RAF", goster: false }
let raf33 = { kod: "3.3.RAF", goster: false }
let raf34 = { kod: "3.4.RAF", goster: false }
let raf35 = { kod: "3.5.RAF", goster: false }

let raf41 = { kod: "4.1.RAF", goster: false }
let raf42 = { kod: "4.2.RAF", goster: false }
let raf43 = { kod: "4.3.RAF", goster: false }
let raf44 = { kod: "4.4.RAF", goster: false }
let raf45 = { kod: "4.5.RAF", goster: false }                                                           

let raf51 = { kod: "5.1.RAF", goster: false }
let raf52 = { kod: "5.2.RAF", goster: false }
let raf53 = { kod: "5.3.RAF", goster: false }
let raf54 = { kod: "5.4.RAF", goster: false }
let raf55 = { kod: "5.5.RAF", goster: false }

// alttan üste doğru raf sayısı arttığı için 5 ile başlıyoruz.
let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15],
];

//diziler iç içe olduğu için 2 for döngüsü oluşturuyoruz
//! metot oluşturuyoruz sonra consol temizlenir. sonrasında for döngüsüyle döngü 
//salğlanıyor.
    function rafOlustur(){
        console.clear();
        let satir="";
        for(let i =0  ; i<raflar.length ; i++){

ilk içteki döngü dönüyor bittikten sonra dıştaki döngü çalıştırılıyor, 
iç döngüye tekrar giriyor.

for(let j=0 ; j<5 ; j++){
                satir+="|"+ (raflar[i][j].goster ? raflar[i][j].kod : "---")+"";
TODO -ternary oparatörüyle sağlanır. Satır yazdırılırken raflarda true mu 
diye soru işaretiyle sorulur. kod true ise kodu yazdır. false ise --- 
şeklinde çıktı alınır                                  
            }
            console.log(satir);
            console.log("--------------------");
            satir="";
        }
        
    }
*/
//! JS de ternary oparatör (3lü operatör) bulunuyor.
/*
    function kodBul(kitapIsmi){
        let rafKod=null;
        kitaplar.forEach(function(kitap){
            if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
                rafKod=kitap.raf;
            }
        });
        return rafKod;
    }
    */
    //toUpperCase diyerek yazıları büyük harfe çeviriyoruz-includesda parantez içerisinde sona sıfır eklememizin sebebide 0. indexten itibaren kontrol et demek oluyor.

    /* Bir metodun nerede yazıldığının önemi yok nereden çağrıldığının önemi
     var.For döngüsü içerisinde tanımlanmış değişkenler sadece kıvırcıklar 
    içeriisnde sonuç alınır.
    */
   /*
    function raftaGoster(rafKodu){
        for(let i =0 ; i<raflar.length; i++){
            for(let j=0 ; j<5 ; j++){
                if(raflar[i][j].kod==rafKodu){
                    raflar[i][j].goster=true;
                    break;
                }
            }
        }
    }

    rafOlustur();

    let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
    let rafKod = kodBul(kitapIsmi);
   
    if(rafKod!=null){
        raftaGoster(rafKod);
        rafOlustur(); //consolu temizlemek için kullanılır. Kullandığımız rafı
        // temizleyip true değerini yazdırır.
    }else{
        alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.");
    }

*/

//?--------//String Sınıfının Metodları


//! charAt() -bizim indexte verdiğimiz karakteri consola yazdırmaya 
//!yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu" ;
let index = kurs.charAt(5);
console.log(karakter); // consolda "n" çıktısı alınır
*/

//! concat() - İki farklı sitring ifadeyi birleştirmeye yardımcı olur.
// Orjinalleri bozmuyor kopyasını veriyor.

/*
let kurs = "Modern Web Geliştirme Kursu" ;
let tarih = "2022" ;
let sonuc = kurs.concat(" ",tarih , "Enes"); 
//tarih gibi birden fazla ifade içerisine yazabiliriz.
console.log(sonuc); 
//  consolda Modern Web Geliştirme Kursu 2022 Enes çıktısı alınır.
*/

//! indexOf() - İndexine ulaşmak istediğimiz karakteri yazarak sonuca
//ulaşılır.

/*
let kurs = "Modern Web Geliştirme Kursu"
let index = kurs.indexOf("i");
console.log(index); // consolda 13 çıktısı alınır
*/

//! lastIndexOf() - vermiş olduğumuz kelimenin indexini bize döner

/*
let kurs = "Modern Web Geliştirme Kursu"
let index = kurs.lastIndexOf("Kursu");
console.log(index); // consolda 22 çıktısı alınır.
*/

//! toUpperCase() - yazıların tamamını büyük harfe çevirir.-orjinalini
 //bozmuyor.

/*
let kurs = "Modern Web Geliştirme Kursu"
let sonuc = kurs.toUpperCase();
console.log(kurs); // consolda Modern Web Geliştirme Kursu şeklinde 
çıktı alınır.
.//todo orjinalini bozmadığı için console.log(kurs);  dediğimizde 
konsolda Modern Web Geliştirme Kursu çıktısı yani orjinal halinin 
çıktısı alınır.
console.log(sonuc); 
// consolda MODERN WEB GELİŞTİRME KURSU şeklinde çıktı alınır.
*/

//! toLowerCase() - yazıların tamamının küçük yazılmasına yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu"
let sonuc = kurs.toLowerCase();
console.log(kurs); // consolda Modern Web Geliştirme Kursu şeklinde 
çıktı alınır.
.//todo orjinalini bozmadığı için console.log(kurs);  dediğimizde 
konsolda Modern Web Geliştirme Kursu çıktısı yani orjinal halinin 
çıktısı alınır.
console.log(sonuc); // consolda modern web geliştirme kursu şeklinde
 çıktı alınır.
*/

//! trim() - kullanıcı space (boşluk) bıraksa dahi bütün boşlukları kaldırır.

/*
let kurs = "     Modern Web Geliştirme Kursu      "
console.log(kurs); 
// consolda      Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.trim()); 
// consolda Modern Web Geliştirme Kursu şeklinde çıktı alınır.
*/

//! slice() -bölmek/dilimlemek anlamına geliyor.
/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); 
// consolda Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.slice(7,10)); 
//? 7. indexten 10. indexe kadar (10 dahil değil) böl demek oıluyor 
// consolda Web çıktısı alınır.
*/

//! substring() - belirli indexleri almamıza yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); 
// consolda Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.substring(0,6));
//? 0. indexten 6. indexe kadar (6 dahil değil) böl demek oluyor 
// consolda Modern çıktısı alınır.
*/

//! replace() - bir şeyi başka bir şeyle değiştirmeye yardımcı olur.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); 
// consolda Modern Web Geliştirme Kursu  çıktısı alınır
console.log(kurs.replace("Modern" , "Güncel")); 
// consolda Güncel Web Geliştirme Kursu şeklinde çıktı alınır.
*/

//! split() - belirmiş olduğumuz bir ayırıcıya göre ayırıp dizi 
//haline getiriyor.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); 
// consolda Modern Web Geliştirme Kursu  çıktısı alınır
let dizi = kurs.split(" "); 
//? burada boşluğa göre parçalara ayırıp dizi oluştur.
console.log(dizi); 
// consolda  "Modern" , Web" , "Geliştirme" , "Kursu" şeklinde 4 elemanlı dizi oluşmuş oluyor.
let kurs1 = "Modern,Web,Geliştirme,Kursu"
console.log(kurs1); 
// consolda Modern,Web,Geliştirme,Kursu  çıktısı alınır
let dizi1 = kurs1.split(","); 
//? burada virgüle göre parçalara ayırıp dizi oluştur.
console.log(dizi1); 
// consolda  "Modern" , Web" , "Geliştirme" , "Kursu" şeklinde 4 
//elemanlı dizi oluşmuş oluyor.
*/

//! valueOf() - primitive-(ilkel veri tipi demek ) tipe çeviriyor - 
//! bir dahaki ders anlatacak

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs.valueOf()); 
// consolda Modern Web Geliştirme Kursu  çıktısı alınır
*/

//! startSwith() - Yazılan ifadenin hangi karakterle başladığını 
//!sorduğumuzda true-false olarak sonuç döner.

/*
let kurs = "Modern Web Geliştirme Kursu"
console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır.
console.log(kurs.startsWith("M")); // consolda  true çıktısı alınır.
console.log(kurs.startsWith("m")); // consolda false çıktısı alınır.

if(kurs.startsWith("M")){
    console.log("M harfi le başlamatadır.") ; 
    // consolda true olması durumunda bu şekilde çıktı alınır.
}
*/

/*
//! endsWith() -Yazılan ifadenin hangi karakterle bittiğini 
//!sorduğumuzda true-false olarak sonuç döner.

// let kurs = "Modern Web Geliştirme Kursu"
// console.log(kurs); // consolda Modern Web Geliştirme Kursu  çıktısı alınır.
// console.log(kurs.endsWith("u")); // consolda  true çıktısı alınır.
// console.log(kurs.endsWith("U")); // consolda false çıktısı alınır.

// if(kurs.endsWith("u")){
//     console.log("u harfi ile bitmektedir.") ; // consolda true olması 
//durumunda bu şekilde çıktı alınır.
// }

*/
//? -------MATH OBJESI METODLARI

/*
// console.log(window); 
//? consolda Math window objesi içindedir.

let a = 3.50;
let b = -12;

console.log(Math.floor(a)); 
 // consolda 3  çıktısı alınır. floor virgülden sonrasını siler
console.log(Math.ceil(a));   
// consolda 4 çıktısı alınır. ceil bir üst sayıya yuvarlar.
console.log(Math.round(a)); 
// consolda 4 çıktısı alınır. round en yakın değere yuvarlar
(3.50 ve ustu 4 e yuvarlar)

console.log(Math.max(1,2,3,4,50)); 
// consolda 50 çıktısı alınır. max number tipinde dizideki en 
//büyük değeri döner.
console.log(Math.min(10,0,5)); // consolda 0 çıktısı alınır. 
min number tipinde dizideki en küçük değeri döner.

abs mutlak deger demek.-12 sayisi
console.log(Math.abs(b)); // consolda 12 çıktısı alınır.
abs bir sayının mutlak değerini almaya yardımcı olur.

console.log(Math.sqrt(169)); //consolda 13 çıktısı alınır. 
sqrt bir sayının karekökünü almaya yardımcı olur.

console.log(Math.pow(5,4)); // consolda 5 üzeri 4 şeklinde hesaplar
 ve 625 çıktısı alınır. pow bir sayının üssünü almaya yardımcı olur

console.log(Math.PI); // 3,14 şeklinde çıktı alınır. PI obje değildir 
property(özellik)dir

 let randomDeger = Math.random(); // random 0-1 arasında rastgele sayı üretir.
let sonuc = randomDeger*100000; // doğrulama kodu üretilebilir bu şekilde
let sonucYuvarla = Math.floor(sonuc);

console.log(randomDeger);
console.log(sonuc);
console.log(sonucYuvarla);

console.log(Math.floor(Math.random()*100)); // kodun okunması şu şekildedir.
 sondan başa doğru okunur.
//! random ile 0-1 arası bir değer oluştur 100 ile çarp sonra floor
//! ile virgülden sorasını at ve çonsolda başını yaz.

*/

//?----------//? DATE TARIH KULLANIMI-----------


//! Biz get elementini kullanarak istediğimiz gün ay zaman dakikaya ulaşabiliriz
//! biz set elementini kullanarak yeni değerler atayabiliriz.
/*

let tarih = new Date(); 
// newle yeni bir date objesi oluşturur.
console.log(tarih); 
//o anki tarihi bize çıktı olarak verir.
console.log(typeof Date); 
//consolda object çıktısını alırız

tarih.toString(); // tarihi string ifadeye çevirir
console.log(tarih.toString()); 
// yeni bir değişken tanımlamadan log içierisine direk yazarak string 
//şekilde çıktı alabiliriz. 




//?TODO aylar 0-11 arasında ifade edilir.

console.log(tarih.getTime()); // get metodu almak demek burada zamanı al.
console.log(tarih.getFullYear()); //yılı al demek metotlardan sonra parantez
// açılıp kapanması gerekli
console.log(tarih.getDate()); // consola ayın hangi gününde olduğumuz 
//yazdırılır
console.log(tarih.getDay()); // consolda haftanın gününü gösteriyor(5. GIBI)
console.log(tarih.getHours()); // saati bulmaya yardımcı olur
console.log(tarih.getMilliseconds()); 
console.log(tarih.getMinutes()); //dakikayı veriyor
console.log(tarih.getMonth()); //Ayı numara cinsinden verir ocak ayı-0 
//olarak başlar
console.log(tarih.getMonth() +1); // ocay ayını 1 den başlatabiliriz.
console.loog(tarih.getSeconds()); // saniyeyi verir
console.log(tarih.toLocaleDateString()); // gün ay yıl şeklinde çıktı 
//almamıza yardım eder.
console.log(tarih.toLocaleTimeString()); // saat dakika saniye şeklinde verir.
console.log(tarih.toLocaleString()); // consolda gün ay yıl saat dakika 
//saniye olarak çıktı verir.
*/
/*
//! SET METOTLARI
console.log(tarih); 
 // consolda 16.02.2023 şubat çıktısı alınır
tarih.setDate(18);
console.log(tarih);
 // consolda 18.02.2023 çıktııs alınır
tarih.setHours(); // parantez arasına istediğimiz saati yazarak saati
// ileri zamanlı gösterebiliriz
tarih.setMonth();// hangi ayda olmak isteğimizi yine yazarak ayı ileri
// alabiliriz.
tarih.setMinutes(); // dakikayı ileri alma


tarih.setHours(tarih.getHours() + 2); // dinamik zaman oluşturur 
//hangi saatte olursak olalım o saat üzerine 2 saat ekler.
console.log(tarih); // consolda o anki tarihten 2 saat sonraki 
//tarih gösterilir.



let tarihÖzel = new Date(1996,01,24,04,30,40) // spesifik tarih 
//oluşturabiliriz.
console.log(tarihÖzel); // consolda Feb 24 1996 04:30:40 GT+03:00
// çıktısı alınır.

*/
//?---------DEGERE VE REFERANS TIPLERI------------


//! Değer Tipler (primitive(ilkel)veri tipleri : 
//!string-number-boolean-undifined-null-symbol

//? referans tipler (Referece(ilkel olmayan) veri tipleri :
// object-array-Function)

//referans veri tipleri örnekler
/*
let dizi = [1,2,3,4];

let obje ={
    name:"Ayşe",
    password: "fhjskjfkds",
}
*/

//todo Referans ve değer tipleri arasındaki fark ram bellekte 
//değer tipler stack bölümünde depolanır,  referans heap bölümünde depolanır. 
//todo Değer tiplerde değişkenler birbirini etkilemez bağımsız olarak çalışır


/*
let a = 5;
let b = a; 

console.log("a :" + a); // consolda a:5 
console.log("b :" + b); // consolda b:5

console.log("-----------------------");

b = 10;

console.log("a :" + a); // consolda a:5 
console.log("b :" + b); // consolda b:10
*/


/*
let dizi1 = [1,2,3];
let dizi2 = dizi1; // bu şekilde tyazarak aynı referansa ulaşılır.
let dizi3 = [1,2,3];
console.log(dizi1); // 1, 2, 3
console.log(dizi2); //1, 2, 3
console.log(dizi3); // 1, 2, 3
if(dizi1==dizi2){
    console.log("Eşittir");
}else{
    console.log("Eşit değildir.") ;
} // consolda eşittir çıktıısı alınır.
if(dizi1==dizi3){
    console.log("Eşittir");
}else{
    console.log("Eşit değildir.") ;
} // consolda eşit değildir çıktıısı alınır.
.//?? referans veri tiplerinde değerlerin eşit olup olmadığına 
//bakmaz o yüzden değerin bir önemi yoktur.
*/

/*
let dizi1 = [1,2,3];
let dizi2 = dizi1;
dizi2.push(12);
console.log(dizi1); // consolda 1, 2, 3, 12 çıktısı alınır
console.log(dizi2); // consolda 1, 2, 3, 12 çıktısı alınır
.//! referans veri tiplerindebirbirlerini etkilerler.
// biz değişliği dizi2 üzerinden yapsakta dizi1 de etkileniyorlar
*/
/*
let dizi1 = [1,2,3];
let dizi2 = dizi1;
let dizi3 = dizi2;

dizi3.push(7);
dizi2.push(8);

console.log(dizi1); // consolda 1, 2, 3, 7 ,8 çıktısı alınır
console.log(dizi2); // consolda 1, 2, 3, 7 ,8 çıktısı alınır
console.log(dizi3); // consolda 1, 2, 3, 7 ,8 çıktısı alınır


*/

