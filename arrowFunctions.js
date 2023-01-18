console.log("**** ARROW FUNCTIONS ****");

// const topla = (a, b) => a + b;

// console.log(topla(2, 3)); //! Arrow function larda otomatik returning özelliği vardır.

// const usAl = (t, u) => t ** u;
// console.log(usAl(2, 3));

// //? Örnek : Silindir hacmi

// const r = +prompt("Yarıcap Giriniz");
// const h = +prompt("Yükseklik Giriniz");

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);


//? Örnek : Yaş Hesaplama

const tarih = +prompt("Doğum tarihini giriniz")

const yasHesapla = (tarih) => {
   const yas = new Date().getFullYear() - tarih
   return yas
}

console.log("Yaşınız:" + yasHesapla(tarih))