// SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.

// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression() yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.
// talep olursa akşam 6 da bu sorulaarı çözelim diyorum altına tik atarsanız ona göre hareket ederiz


//! 1.solution

// ! SÜDOCODE
// 1.KULLANICIDAN 2 DEĞER Al
// 2.BU DEĞERLERİ ÇARPIYORUZ VE 2 YE BÖLELİM
// 3.SONUCU DÖNDÜR.
// const a = Number(prompt('taban uzunluğunu yazınız:'));
// const h = Number(prompt('yükseklik uzunluğunu yazınız:'));
// function alanhesapla(a,h) {
//     return (a*h)/2
// }
// // console.log(alanhesapla(a,h));
// console.log(alanhesapla(2,5));
// ! SORU2: kareAl, küpAl, üsAl şeklinde üç adet
// ! farklı arrow fonksiyonu tanımlayın.
// ! Bu fonksiyonların ana programdan gereken
//  ! parametreleri alarak sonuçları ana programa
//  ! döndürmeli gerekmektedir.
// ! südocode
// 1.ana fonksiyon tanımla.
// 2.bunun içine 2 parametre gircez.
// 3.3 tane arrow fonksiyonu al.


// const a = Number(prompt('sayı yazınız:'));
// const b = Number(prompt('üssü yazınız:'));
// let kareAl = (a) => a * a;
// let küpAl = (a) => a * a * a;
// let üsAl = (a, b) => a ** b;
// console.log(kareAl(a));
// console.log(küpAl(a));
// console.log(üsAl(a,b));





//  SORU3: Yıl değerini parametre olarak alan ve bu yılın
//  artık yıl olup olmadığını hesaplayarak
// sonucu ana programa döndüren fonksiyonu
// function-expression() yöntemi ile yazınız. NOT: Yıl 4’e
//  tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e
//  tam bölünüyorsa) artık yıldır aksi takdirde
//  değildir.
// südocode
// 1.kullanıcıdan yıl al.
// 2.fonksiyonu bir değişkene ato
// 3.fonksiyonun body si yaz
// 4.yıl%4  && (yıl%100!=0 || yıl%400 == 0 )


const year = Number(prompt('yıl yazınız: '));
let leapYear = function(year){
   if(year % 4==0 && (year % 100 != 0 || year % 400 == 0)){
   console.log(`${year} is a leap year`);
}  else{
   console.log(`${year} is NOT a leap year`);
}
}
leapYear(year);