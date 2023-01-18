//? =========================================================
//?                     FONKSİYONLAR
//? =========================================================

//! ---------------------------------------------------------
//!     1.YÖNTEM : FUNCTİON DECLARATION
//! ---------------------------------------------------------

// console.log("**** FUNCTION DECLARATION ****");

//* ÖRNEK

// function yaşYazdır() {
//     console.log(`Benim adım Sefer ve Ben ${2023-1992} yaşındayım`);
// }
// yaşYazdır()

// function yaşYazdır1(ad,tarih) {
//     console.log(`Benim adım ${ad} ve Ben ${2023-tarih} yaşındayım`)
// }

// yaşYazdır1("Sefer", 1992)
// yaşYazdır1("Merve", 1991)


// function yaşYazdır2(ad,doğumTarihi) {
//     const yaş = 2023 - doğumTarihi
//     console.log(`Benim adım ${ad} ve Ben ${yaş} yaşındayım`);
//     return yaş
// }

// const yaşSefer = yaşYazdır2("Sefer", 1992)
// const yaşMerve = yaşYazdır2("Merve", 1991)
// const yaşAlya = yaşYazdır2("Alya", 2018)

// console.log(`Yaşların ortalaması ${(yaşSefer + yaşMerve + yaşAlya) / 3}`)


// function selamla (ad,soyAd = ""){
//     console.log(`Merhaba ${ad} ${soyAd}`);
// }

// selamla("Can", "Yılmaz")
// selamla("Canan", "Öztürk")
// selamla("Ayşe")

// function yasHesapla (isim, dogumTarihi){
//     const sonuc = `${isim} in yası ${2023 - dogumTarihi} dir`
//     const sonuc = `${isim} in yası ${new Date().getFullYear() - dogumTarihi}`
//     return sonuc
//     return `${isim} in yası ${new Date().getFullYear() - dogumTarihi}`
// }

// const mesaj1 = yasHesapla("Elif Can", 1990)
// console.log(mesaj1)



//? Girilen bir sayının tek mi çift mi olduğunu bulan fonk. yazınız

function tekCift (sayi){
    return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} ÇİFTTİR`
}

console.log(tekCift(5))
console.log(tekCift(2))

const n = +prompt("Bir sayı giriniz")
console.log(tekCift(n));
