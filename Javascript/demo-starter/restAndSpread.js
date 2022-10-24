export function sizCevapVerin() {
  return [10, 20, 30, 40, 50];
}

// Rest Operator
// parametrelerinizi bir diziye dönüştürür, toparlar.
export function sum(...numbers) {
  //console.info("number3:", Number(number3));
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    //total = total + numbers[i];
    total += numbers[i]; // [10, 20, 30, 40, 50]
  }
  //return numbers.reduce((total, number) => total + number, 0);
  return total;
}

function avg(cevapVerenKisiSayisi, ...numbers) {
  return sum(...numbers) / cevapVerenKisiSayisi;
}

// Spread Operator
// bir dizi elemanlarını tek tek parametre olarak gönderir, yani birbirinden ayrıştırır.
export const cevaplariniz = sizCevapVerin();
const result = avg(26, ...cevaplariniz);
console.log(result);
// console.log(Math.max(...cevaplariniz));
// 010, 20, 30, 40, 50

function sayMyName(...letters) {
  for (const letter of letters) {
    console.log(letter);
  }
}
sayMyName(...Object.keys({ first: "A", second: "H" }));

//

let instructor = {
  firstName: "Ahmet",
  lastName: "Çetinkaya",
};
let student = {
  firstName: "Anıl",
  lastName: "Kavuk",
};
const learningTopic = {
  topic: ["JavaScript"], // 0x101
};
student = {
  //   firstName: "Anıl",
  //   lastName: "Kavuk",
  ...student,
  //topic: 0x101
  ...learningTopic,
};
// Object.assign(instructor, student);
learningTopic.topic.push("Angular");
console.log(instructor);
console.log(student);
