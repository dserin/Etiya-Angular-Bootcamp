import { cevaplariniz } from "./restAndSpread.js";

//require();

console.log("------------");

console.log(cevaplariniz);

//const first = cevaplariniz[0];
//const second = cevaplariniz[1];
const [first, second, ...others] = cevaplariniz; // array destructuring
console.log(first, second, others);
// 10, 20, [30, 40, 50]
//

const [icAnadolu, marmara, ege, akdeniz, [icAnadoluSehirleri, marmaraSehirleri, ...digerSehirler]] = [
  { name: "İç Anadolu", population: 1000000 },
  { name: "Marmara", population: 2000000 },
  { name: "Ege", population: 3000000 },
  { name: "Akdeniz", population: 4000000 },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["İzmir", "Manisa"],
    ["Antalya", "Mersin"],
  ],
];
console.log(icAnadolu, marmara, ege, akdeniz);
console.log(...icAnadoluSehirleri);
console.log(...marmaraSehirleri);
//const [egeSehirleri, akdenizSehirleri] = ...digerSehirler;
console.log(...digerSehirler.flat(2));
// Ankara, Konya
/* [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["İzmir", "Manisa"],
    ["Antalya", "Mersin"],
  ] */
