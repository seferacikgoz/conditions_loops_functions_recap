// * ===============================================
// *                KARAR YAPILARI
// * ===============================================

//************** IF - ELSE ************************

// console.log("*****  CONDITIONS  *****")

//? Console'dan girilen bir sayının pozitif,negatif yada 0 olduğunu tespit ederek yazdırınız

/* const sayi = Number(prompt("Bir sayı giriniz")); */

/* if (sayi > 0) {
    console.log(`${sayi} pozitiftir.`);
} else if (sayi == 0 ) {
    console.log(`${sayi}'a eşittir.`)
}else {
    console.log(`${sayi} negatiftir.`);
}
console.log(sayi, typeof sayi) */

//? Console'dan 3 tamsayı alarak bunların en büyüğünü yazdırınız

// const n1 = Number(prompt("Sayı1:"))
// const n2 = Number(prompt("Sayı2:"))
// const n3 = Number(prompt("Sayı3:"))

//* 1.Yöntem
// if (n1 >= n2 && n1 >= n3) {
//     console.log(`${n1} en büyük sayıdır`);
// } else if (n2 >= n1 && n2 >= n3) {
//     console.log(`${n2} en büyük sayıdır`);
// }else if (n3 >= n1 && n3 >= n2) {
//     console.log(`${n3} en büyük sayıdır`);
// }

//* 2. Yöntem

// let enBuyuk = n1;
// if (n2 >= enBuyuk) {
//     enBuyuk = n2
// } if (n3 >= enBuyuk) {
//     enBuyuk = n3
// }
// console.log(`${enBuyuk} en büyüktür.`)




//************** SWITCH-CASE ************************

// const gun = prompt("Gün giriniz")

// switch (gun) {
//     case pazartesi:
//       gun = "InClass"        
//         break;
//     case cuma:
//         gun = "Teamwork"
//         break;
//     case pazar:
//         gun = "SelfStudy"
//         break;
//     default:
//         alert("yanlıs gün girildi")
//         break;
// }
// console.log(gun);


//* TERNARY

// const hız = 90
// const mesaj = hız >= 120 ? "Hızlı":"Yavaş"
// console.log(mesaj);

// const not = +prompt("Notunuzu Giriniz..")
// const mesaj = not >= 50 ? "Geçti" : "Kaldı"
// console.log(mesaj)
// console.log(not >= 50 ? "Geçti" : "Kaldı");

// const yas = 17;
// const cinsiyet = "erkek"
// const saglıklı = false

// yas >= 18 && cinsiyet == "erkek" && saglıklı ? console.log("askerlik yapmalı") : console.log("askerlik yapmasına gerek yok");

// const maas = +prompt("maasınızı giriniz")
// const asgucret = 5500

// if (maas < asgucret) {
//     console.log(maas * 1.5);
// }else if (maas > asgucret) {
//     console.log(maas * 1.1);
// }

// const gelir = +prompt("gelirinizi yazınız")
// const gider = +prompt("giderinizi yazınız")
// const asgucret = 5500

// const kredi = gelir - gider >= asgucret ? "Kredi verilebilir" : "Kredi verilemez"
// console.log(kredi)

//* **************** FOR *****************

// console.log("*****  FOR  *****")

//? 1 den n e kadar olan sayıları toplayan kodu yazınız

// const n = +prompt("Bir sayı giriniz")

// let toplam = 0
// for(let i = 1; i <= n; i++){
//     // toplam = toplam + i
//     toplam += i
// }

// console.log("Sonuc:", toplam);

//? 0-100 arasında 10 adet rastgele tamsayı üreten kodu for döngüsü ile yazınız

// for(let i = 1; i<=10; i++){
//     const rastgele = Math.round(Math.random() * 100)
//     console.log(rastgele);
// }

//* Not:
//* Math.floor() => sürekli aşağıya yuvarlar
//* Math.ceil() => sürekli yukarıya yuvarlar
//* Math.round() => değerine göre yuvarlar
//* Math.trunc() => kesirli sayının tam kısmını alır

//? Girilen bir sayının asal olup olmadığını yazdıran kodu for döngüsü ile yazınız

// const sayı = +prompt("Pozitif Bir sayı giriniz")
// let asal = true

// if (sayı <= 1) {
//     alert("Sayı 0 dan ve 1 den büyük olmalıdır")
// }else{
//     for(let i = 2; i<sayı; i++){
//         if (sayı % i === 0) {
//         asal = false
//         break;
//         }
        
//     }
//     const sonuc = asal === true ? "ASALDIR" : "ASAL DEĞİLDİR"
//     console.log(`${sayı} ${sonuc}`);
// }

console.log("*****  WHİLE-DOWHİLE  *****")


// let i = 1
// while (i<=10) {
//     console.log(i + " Merhaba");
//     i++
// }

//? Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100 den farklı ise yeniden 0-100 arasında not girmeye zorlayan kodu while döngüsü ile yazınız

// let not = +prompt("Lütfen 0-100 arası bir not giriniz")

// while (not < 0 || not >100) {
//     console.log("Not 0-100 arasında olmalıdır");
//     not = +prompt("Lütfen 0-100 arası bir not giriniz")
// }

// console.log("Girdiğiniz not:", not);

// if (not < 0 || not >100) {
//     alert("Lütfen geçerli bir not giriniz")
// }



// let not 

// do {
//     not = +prompt("Lütfen 0-100 arası bir not giriniz")
// }while (not < 0 || not >100)

// console.log("Girdiğiniz not:", not);



//? Program 0-100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz". Eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// let hak = 5
// const rastgele = Math.round(Math.random() * 100)
// console.log(rastgele)
// let tahmin;

// do {
//     tahmin = +prompt("Lütfen 0-100 arasında bir tahminde bulunun")
//     hak -= 1
//     if (tahmin === rastgele) {
//         console.log(`Tebrikler ${5 - hak} kerede bildiniz`)
//         break
//     }else if (tahmin < rastgele){
//         console.log("Arttır ⬆");
//     }else{
//         console.log("Azalt ⬇")
//     }
// } while (hak > 0);

// if (tahmin !== rastgele && hak === 0) {
//     console.log("Üzgünüz oyunu katbettiniz 😔");
// }


//? Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde o ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortolamayı yazdıran uygulamayı yazınız.

