
// 1.Koliko se puta neki karakter pojavljuje u nekom tekstu.

// function brojponavljanja(niz,karakter){
//     let brojac=0
    
//     for(let i=0; i<=niz.length; i++){
//         if(niz[i]===karakter){
//             brojac++
//         }
        
//     }
//     return brojac
    
// }
// let tekst="ovo je neki tekst";
// let brojkaraktera= "o";
// let rezultat=brojponavljanja(tekst, brojkaraktera);
// console.log(`karakter "${brojkaraktera}" se pojavljuje "${rezultat}" puta`);
////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Napišite funkciju koja će obrnuti redosled karaktera u datom stringu. Na primer, "hello" treba postati "olleh".

// function Reverse(niz){
//     obrnuto=""
//     for(let i= niz.length-1; i>=0; i--){
//         obrnuto+=niz[i]
//     }
//     return obrnuto
// }

// let tekst="olleh"
// let naopako= Reverse(tekst)
// console.log(naopako);
//////////////////////////////////////////////////////////////////////////////////////////////////////

//3.Palindrom: Napišite funkciju koja će odrediti da li je dati string palindrom, što znači da se čita isto i sa leve i sa desne strane.
// Na primer, "radar" je palindrom.

// function palindrom(string){
//     string= string.toLowerCase();

//     let bezRazmaka="";

//     for(let i=0; i<string.length; i++){
//         if(string[i] !== ' '){
//             bezRazmaka+=string[i];
//         }
//     }

//     let pocetak=0;
//     let kraj=bezRazmaka.length-1;

//     while(pocetak<kraj){
//         if(bezRazmaka[pocetak] !== bezRazmaka[kraj]){
//             return false;
//         }
//         pocetak++
//         kraj--
//     }
//     return true;

// }

// let string1="A man a plan a canal Panama";
// let string2="hello";
// console.log(palindrom(string1));
// console.log(palindrom(string2));
///////////////////////////////////////////////////////////////////////////////////////////

// 4.Računanje Dužine Stringa: Napišite funkciju koja će primiti string i vratiti broj karaktera 
// u tom stringu bez korišćenja ugrađene length osobine.

// function duzinastringa(string){
//     brojkaraktera=0;
//     for(let karakter of string){
//         brojkaraktera++
//     }
//     return brojkaraktera
// }

// let tekst="ovo je primer teksta";
// let duzina= duzinastringa(tekst)

// console.log(`Duzina stringa je : ${duzina}`);
////////////////////////////////////////////////////////////////////////////////////

// 5.Izdvajanje Reči: Napišite funkciju koja će razdvojiti reči u datom stringu i vratiti ih kao niz.
//  Na primer, "Ovo je primer." treba postati ["Ovo", "je", "primer"].

// function izdvojireci(string){
//     let reci= string.split(" ")
//     return reci
// }

// let tekst="ovo je neki tekst"
// let noviniz=izdvojireci(tekst)
// console.log(noviniz)

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 6.Zamena Reči: Napišite funkciju koja će primiti string i dva stringa, i zameniti sve pojave prvog 
// stringa drugim stringom u datom stringu.

// function zamenastringova(string, staraRec, novaRec){
//     let reci=string.split(" ")

//     for(let i=0; i<reci.length; i++){
//         if(reci[i] === staraRec){
//             reci[i]=novaRec
//         }
//     }

//     let noviString=reci.join(" ")
//     return noviString
   
   
// }

// let pocetniString= "Ovo je primer za zamenu reci."
// let staraRec= "zamenu"
// let novaRec="promenu"
// let noviString=zamenastringova(pocetniString,staraRec,novaRec)

// console.log(noviString);
////////////////////////////////////////////////////////////////////////////////////////////////
//7.Izvuci Ime Iz Email Adrese: Napišite funkciju koja će primiti email adresu i vratiti korisničko
// ime (sve pre "@" znaka) iz te adrese.

// function izvuciKorisnickoIme(email){
//     let pozicijaZnaka=email.indexOf('@')

//     if(pozicijaZnaka === -1){
//         return email;
//     }

//     let korisnickoIme=email.slice(0,pozicijaZnaka)
//     return korisnickoIme
// }

// let emailAdresa="prvo ime@gmail.com"
// let emailAdresa2="drugi ime@gmail.com"
// let korisnickoIme= izvuciKorisnickoIme(emailAdresa)
// let korisnickoIme2=izvuciKorisnickoIme(emailAdresa2)
// console.log(korisnickoIme);
// console.log(korisnickoIme2);
///////////////////////////////////////////////////////////////////////////////////////////////

//8.Validacija Lozinke: Napišite funkciju koja će validirati da li data lozinka zadovoljava određene kriterijume 
//(npr. mora sadržati barem 8 karaktera, jedno veliko slovo, jedan broj, i poseban znak).

// function validirajLozinku(lozinka) {
//     // Lozinka mora sadržati barem 8 karaktera
//     if (lozinka.length < 8) {
//       return false;
//     }
  
//     let sadrziVelikoSlovo = false;
//     let sadrziBroj = false;
//     let sadrziPosebanZnak = false;
  
//     for (let i = 0; i < lozinka.length; i++) {
//       const karakter = lozinka[i];
  
//       // Provera za veliko slovo
//       if (karakter >= 'A' && karakter <= 'Z') {
//         sadrziVelikoSlovo = true;
//       }
  
//       // Provera za broj
//       if (karakter >= '0' && karakter <= '9') {
//         sadrziBroj = true;
//       }
  
//       // Provera za poseban znak (npr. !@#$%^&*)
//       if ('!@#\$%^&*'.includes(karakter)) {
//         sadrziPosebanZnak = true;
//       }
//     }
  
//     // Svi kriterijumi moraju biti ispunjeni
//     return sadrziVelikoSlovo && sadrziBroj && sadrziPosebanZnak;
//   }
  
//   // Primer korišćenja funkcije
//   const testLozinka1 = "Loz1nka!";
//   const testLozinka2 = "jakalozinka";
//   console.log(validirajLozinku(testLozinka1)); // Ovo će vratiti true
//   console.log('Ova lozinka je jaka!');
//   console.log(validirajLozinku(testLozinka2)); // Ovo će vratiti false
//   console.log('Ova lozinka nije dovoljno jaka!');

 /////////////////////////////////////////////////////////////////////////////////////////////////////

 //9. Formatiranje Telefonskog Broja: Napišite funkciju koja će primiti niz brojeva i formatirati ih kao
 // telefonski brojevi (npr. "1234567890" treba postati "(123) 456-7890").

//  function formatirajTelefonskiBroj(nizBrojeva) {
//     if (nizBrojeva.length !== 10) {
//       return "Niz brojeva mora sadržati tačno 10 cifara.";
//     }
  
//     const prviDeo = `(${nizBrojeva.slice(0, 3)})`;
//     const drugiDeo = `${nizBrojeva.slice(3, 6)}`;
//     const treciDeo = `${nizBrojeva.slice(6, 10)}`;
  
//     const formatiranBroj = `${prviDeo} ${drugiDeo}-${treciDeo}`;
//     return formatiranBroj;
//   }
  
//   // Primer korišćenja funkcije
//   const nizBrojeva = "1234567890";
//   const formatiranBroj = formatirajTelefonskiBroj(nizBrojeva);
//   console.log(formatiranBroj); // Ovo će vratiti "(123) 456-7890"

///////////////////////////////////////////////////////////////////////////////////////////////////////////

