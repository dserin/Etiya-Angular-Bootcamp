// OOP - Object Oriented Programming
// Nesneye yönelimli Programlama

export default class Ev {
  //var odaSayisi;
  constructor(oda, kat, cephe, aidat, fiyat) {
    this.odaSayisi = oda;
    this.kat = kat;
    this.cephe = cephe;
    this.aidat = aidat;
    this.fiyat = fiyat;
  }

  tanit() {
    console.log(this);
  }

  tanit() {
    console.log("tanit2", this);
  }
}

export const ev1 = new Ev(3, 2, "Kuzey", 100, 5000);
ev1.tanit();

function evOlustur(oda, kat, cephe, aidat, fiyat) {
  this.odaSayisi = oda;
  this.kat = kat;
  this.cephe = cephe;
  this.aidat = aidat;
  this.fiyat = fiyat;
}
evOlustur.prototype.tanit = function () {
  console.log(this);
};
evOlustur.prototype.tanit = function () {
  console.log("tanit2", this);
};
const ev2 = new evOlustur(3, 2, "Kuzey", 100, 5000);
ev2.tanit();
