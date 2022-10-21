let products = [
  { unitPrice: 100, productName: "ürün1", discount: true, rate: 15 },
  { unitPrice: 150, productName: "ürün2", discount: false, rate: 0 },
  { unitPrice: 200, productName: "ürün3", discount: true, rate: 2.5 },
];

function getProductByName(productName) {
  let productsResult = products.filter((p) =>
    p.productName.includes(productName)
  );
  console.log(`Arama sonucunda ${productsResult.length} adet ürüne ulaşıldı`);
}

function getProductByAlpName() {
  let firstNameResult = products.find(
    (product) => product.productName === "ürün1"
  );
  console.log(`Sıralamadaki ilk ürün ${firstNameResult.productName}`);
}

getProductByAlpName();

function unitPriceByParameter() {
  let parameters = products.filter((a) => {
    return a.unitPrice < 175;
  });
  console.log("Parametreden küçük ürünler", parameters);
}

unitPriceByParameter();

function unitPriceByParameter2() {
  let parameter = products.filter((a) => {
    return a.unitPrice > 175;
  });
  console.log("Parametreden büyük ürünler", parameter);
}

unitPriceByParameter2();

// - indirimdeki ürünleri getirme

function discountedItems() {
  let discIt = products.filter((b) => {
    return b.discount === true;
  });

  console.log("Indirimdeki ürünler", discIt);
}

discountedItems();

// - ürün ekleme

function AddItems(product) {
  products.push(product);
  console.log("Yeni ürün", products);
}

AddItems({ unitPrice: 1180, productName: "ürün4", discount: true, rate: 3 });

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
