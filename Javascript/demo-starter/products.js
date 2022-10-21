let products = [
  { unitPrice: 100, productName: "ürün1", discount: true, rate: 15 },
  { unitPrice: 150, productName: "ürün2", discount: false, rate: 0 },
  { unitPrice: 200, productName: "ürün3", discount: true, rate: 2.5 },
];

//- İsme göre filtreleme fonksiyonu

function getProductsByName(productName) {
  console.log(productName);
  let productsResult = products.filter((p) =>
    p.productName.includes(productName)
  );
  console.log(` arama sonucunda ${productsResult.length}  adet ürün`);
}
console.log(getProductsByName("ürün"));

//- İsme göre ilk bulunan productu getirme fonksiyonu

function getProductByFirst() {
  let firstNameResult = products.find(
    (product) => product.productName === "ürün1"
  );
  console.log(`Sıralamadaki ilk ürün ${firstNameResult.productName}`);
}

getProductByFirst();

//- unitPrice < Parametre getirme fonksiyonu (array)
function getUnitPriceByParameterLess(price) {
  let parameters = products.filter((a) => {
    return a.unitPrice < price;
  });
  console.log("Parametreden küçük ürünler", parameters);
}

getUnitPriceByParameterLess(175);

//- unitPrice > Parametre getirme fonksiyonu (array)

function getUnitPriceByParameterMore(price) {
  let parameter = products.filter((a) => {
    return a.unitPrice > price;
  });
  console.log("Parametreden büyük ürünler", parameter);
}

getUnitPriceByParameterMore(175);

//- indirimdeki ürünleri getirme

function getDiscountedItems() {
  let discIt = products.filter((b) => {
    return b.discount === true;
  });

  console.log("Indirimdeki ürünler", discIt);
}

getDiscountedItems();

//- ürün ekleme

function addItems(unitPrice, productName, discount, rate) {
  return products.push({ unitPrice, productName, discount, rate });
}
addItems(1180, "ürün4", true, 3);
console.log(products);

// - verilen isim ile ürün silme

function removeItemOnce(productName) {
  let index = products.findIndex((c) => c.productName === productName);
  if (index > -1) {
    products.splice(index, 1);
  }
}
removeItemOnce("ürün2");

// - tüm ürünleri getirme
function Allproduct() {
  console.log(products);
}

Allproduct();
