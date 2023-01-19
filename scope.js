//? ===============================================
//?             FONKSİYONLAR-SCOPE
//? ===============================================


console.log("**** SCOPE ****");


let sayi1 = 5
console.log(sayi1)

const fonks1 = function () {
    sayi1 = 22
    console.log(sayi1);
}

fonks1()

console.log(sayi1++)
console.log(sayi1);

//*-----------------------------------

let sayi2 = 7
console.log(sayi2)


const fonks2 = () => {
    let sayi2 = 11
    console.log(sayi2);
}

fonks2()
console.log(sayi2++);

if (sayi2 === 7){
   let sonuc = "Merhaba"
}
else{
    sonuc = "Nasilsin"
  //  console.log(sonuc);
}
console.log(sonuc)