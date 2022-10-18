console.log("Merhaba Kodlamaio 2");

//Değişkenler ve Türleri

//variable
//js tip güvenli değildir.
//typescript tip güvenli yapılar kullanıcaz.
let dolarKur = 10;
//dolarKur = "Kodlamaio";  // set etmek (değer değiştiriyoruz)
dolarKur = 20;
console.log(dolarKur);

//string=metinsel ifaler
let euroKur = "15";
console.log(euroKur);

console.log(dolarKur + 5);
console.log(euroKur + 10); // ! string olduğu için yanlış çalıştır ifadeleri yan yana yazdı

//var keywordunu unut
//!let   let ve var keywordleri arasındaki fark

//boolean = true yada false

let euroYükselis = true;
console.log(euroYükselis);

// number ondalıklı sayı olabilir => decimal, float, double
dolarKur = 12.5;
console.log(dolarKur);

//koleksiyonlar array=dizi

let krediler = ["İhtiyaç", "Taşıt", "Konut"];
console.log(krediler);

//object
//json => js object notation
//KEY - VALUE
//naming conention
//camelCase  kuyllanırlır

let odemeBilgileri = {
  aylikOdeme: 415,
  faizOrani: 1.89,
  toplamGeriOdeme: 14950,
  krediTipi: "İhtiyaç Kredisi",
};
console.log(odemeBilgileri);
