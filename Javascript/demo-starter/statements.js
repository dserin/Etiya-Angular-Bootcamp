console.log("Statements Start");

//KOŞUL BLOKLARI

//true -false
//1 eşittir 1
//mantıksal operatör
1 == 1;
console.log(1 == 1);
console.log(1 != 1); // eşitsizliği kontrol eder eşit değildir
console.log(1 >= 1); // > >= || =< <

console.log(1 == "1"); // çift eşittir kullanırsak sadece değere bakar ve  bu ifade true verir
console.log(1 === "1"); // üç eşittir tip ve değer kontrolü yapar bu ifade false verir

if (1 == 2) {
  // condition true ise bloğu çalıştırır değilde çalıştırmaz
  // bu ifadeye blok açmak denir.
  console.log("if içerisi çalıştı");
} else {
  console.log("else bloğu çalıştı");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.8;

//dolarKurBugun daha fazlaysa consolea fazla
//daha az ise az yazdır

if (dolarKurBugun >= dolarKurDun) {
  console.log("fazla");
} else {
  console.log("Az");
}

//ternancy operatör
//tek satırlık if - one line if statement
// koşul ?
//kode1=> koşul true
//kode2 => koşul false
dolarKurBugun >= dolarKurDun
  ? console.log("dolar kuru yükselişte ")
  : console.log("Dolar kuru düşüşte");

// switch-case

let toplamBakiye = 100;
let secilenKur = "USD";

switch (toplamBakiye) {
  case "USD":
    toplamBakiye *= 17;
    break;
  case "EUR":
    toplamBakiye *= 20;
    break;
  default: // caselerde koşullar sağlanmazsa burda yap
    console.warn("Bilinmedik kur türü..");
    break;
}

console.log("Toplam Bakiye:", toplamBakiye);

//seçilen kredi taşıt ise 2 ile i

//0 => taşıt 1 = ihtiyaç 2=> konut
let secilenKredi = 0;
let krediTutari = 10000;

switch (krediTutari) {
  case 0:
    krediTutari *= 2;
    break;
  case 1:
    krediTutari *= 1.5;
    break;
  case 2:
    krediTutari *= 2.5;
    break;
  default: // caselerde koşullar sağlanmazsa burda yap
    console.warn("Bilinmedik kur türü..");
    break;
}
console.log("Kredi Tutarınız :", krediTutari);

// girilen sayı çift ise çift  tek ise tek yazalım

let sayi = 57;

if (sayi % 2 == 0) {
  console.log("çift");
} else {
  console.log("tek");
}
