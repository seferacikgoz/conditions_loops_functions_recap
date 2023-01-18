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

// const tarih = +prompt("Doğum tarihini giriniz")

// const yasHesapla = (tarih) => {
//    const yas = new Date().getFullYear() - tarih
//    return yas
// }

// console.log("Yaşınız:" + yasHesapla(tarih))

//? Fibonacci (1,1,2,3,5,8,13,21,...)
//* f(n) = f(n-1) + f(n-2)
//? Örnek : Kullanıcıdan alınan fibonacci değerini gösteren fonk. yazınız


// const fibo = (n) => {
//    let fib1 = 1
//    let fib2 = 1
//    let toplam = 0

//    for (let i = 2; i<n; i++){
//     toplam = fib1 + fib2
//     fib1 = fib2
//     fib2 = toplam
//     console.log(toplam)
//    }
//    return fib2
// }

// const n = +prompt("n terimini giriniz")
// if (n<=0) {
//     console.log("Lütfen 0 dan büyük bir değer giriniz")
// }else{
//     console.log(`FIBO(${n}) = ${fibo(n)}`)
// }