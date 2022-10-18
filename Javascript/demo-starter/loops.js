console.log("Loops başlangıç");

// CTRL + K + C => Comment
// CTRL + K + U => Comment out
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

//dinamik olacak
let krediler = ["İhtiyaç", "Taşıt", "Araç"];

//döngüler
// iterate, iteration
console.log("<ul>");
for (let i = 0; i < krediler.length; i++) {
  console.log("<li>" + krediler[i] + "</li>");
}
console.log("</ul>");
// arrow function
krediler.forEach((kredi) => {
  console.log("Foreach: ", kredi);
});

let urunler = [
  { fiyat: 100, ad: "Ürün 1", discount: true, rate: 15 },
  { fiyat: 150, ad: "Ürün 2", discount: false, rate: 0 },
  { fiyat: 200, ad: "Ürün 3", discount: true, rate: 2.5 },
];
// tüm ürünleri gezip fiyatı discount
// true ise rate kadar indirimli olarak
// yazdır.
// %10 indirimli hali 150'tl üzerinde ise
// consolea "PAHALI" yazsın
urunler.forEach((urun) => {
  if (urun.discount === true) {
    urun.fiyat -= urun.fiyat * (urun.rate / 100);
  }
  if (urun.fiyat > 150) console.log("PAHALI");

  console.log(urun);
});

// Ürünlerden sadece 160 tl üzerindeki ürünleri
// getir

urunler.forEach((urun) => {
  if (urun.fiyat > 160) console.log(urun);
});
