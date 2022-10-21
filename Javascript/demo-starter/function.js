let products = [
  { unitprice: 100, productName: "Ürün 1", discount: true, rate: 15 },
  { unitprice: 150, productName: "Ürün 2", discount: false, rate: 0 },
  { unitprice: 200, productName: "Ürün 3", discount: true, rate: 2.5 },
];

// let searchText = "Ürün";
//10 farklı yerde productNmae e göre ürünleri getirme molülü mevcut

// let productResult = products.filter((p) => p.productName == searchText);
//default value parametre olarak hiç birşey göndermediğimizde tanımlandığı default değerini alır
function getProductsByName(productName = "Ürün") {
  console.log(productName);
  let productsResult = products.filter((p) =>
    p.productName.includes(productName)
  );
  //  getProductByName fonksiyonunn bodysi
  console.log(` arama sonucunda ${productsResult.length}  adet ürtün`);
}

getProductsByName("Ürün");
getProductsByName("1");
getProductsByName("3");
getProductsByName();

//constant değişken tanımlama keywerdu bu değişkenlerin değeri değişmez
//ARROW FUNCTıon

const getProductByUnitPrice = (unitPrice) => {
  console.log("getProductByUnitPrice fonmksiytonu çalıştı... ");
};
getProductByUnitPrice();

//isme göre filtreleme fonksiyonu
//isme göre ilk bulunan productu getirme fonksiyonu
//unitPrice <Parametre getirme fonksiyonu(array)
//unitPrice >Parametre getirme fonksyionuy (array)
//indimdeki ürünleri getirme
//ürün ekleme
//verilen isim ile ürün silme
//tüm ürünleri getirme
// fonksiyon
