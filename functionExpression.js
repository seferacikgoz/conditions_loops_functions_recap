console.log("**** FUNCTION EXPRESSION ****");

//* örnek: 3 sayının en büyüğünü bulan fonk. yazınız

// const buyukBul = function(n1, n2, n3){
//     let enBuyuk;
//     if (n1 >= n2 && n1 >= n3) {
//         enBuyuk = n1
//     } else if (n2 >= n1 && n2 >= n3) {
//         enBuyuk = n2
//     }else if (n3 >= n1 && n3 >= n2) {
//         enBuyuk = n3
//     }
//     return enBuyuk
// }

// const n1 = Number(prompt("Sayı1:"))
// const n2 = Number(prompt("Sayı2:"))
// const n3 = Number(prompt("Sayı3:"))

// console.log("Girilen sayıların en buyugu:", buyukBul(n1,n2,n3));

// function tekCift (sayi){
//     return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} ÇİFTTİR`
// }

// const tekCift1 = function(sayi){
//     return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} ÇİFTTİR`
// }
// console.log(tekCift1(5))
// console.log(tekCift1(2))

const topla = function (s1, s2) {
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};

const bol = function (s1, s2) {
  return s1 / s2;
};

const carp = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  return sonuc
};

console.log(hesapla(3,5,"+"))
console.log(hesapla(8,2,"/"));
