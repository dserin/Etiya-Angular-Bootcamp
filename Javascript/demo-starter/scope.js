// // Global Scope
// //var variable = 10;

// function func() {
//   let variable = 10;
//   // Function Scope
//   console.log("1. cevap", variable);
// }

// //func();

// console.log("2. cevap", variable);
// //! undefined 2
// //= 10 10
// //! 10 undefined
// //! error

// var value4 = 70;
//let value5;
var value = 40; // önemli bir veri tuttuğunda
let value2 = 50;
const value3 = 60;

if (true) {
  // BLOCK SCOPE
  var value4 = 70; // scope'unu aşıp üst scope'da tanımlandığını
  var value = 70; // önemli bir verinin üzerine yanlışıkla yazma işlemi uyguladım.
  //value5 = 80;
  let value5 = 80;
  const value6 = 90;
  console.log(value, value4, value5);
  //= 70 80
}

console.log("value1 :" + value, value2, value3, value4);
//= 40 50 60 70
console.log(value5);
//= error

// 40 50 60 70 80
// 40 50 60 70 undefined
// error

console.log(value1, value2, value3, value4, value5);
