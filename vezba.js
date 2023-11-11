//Sastaviti program za ispisivanje broja reci koje ce korisnik da unese

// let recenica= prompt('Unesite recenicu')
// let brojreci= recenica.split(" ")

// console.log( brojreci.length);
//////////////////////////////////////////////////////////

// 8.6. Саставити програм за одређивање броја самогласника и сугласника у улазном тексту.

// let rec= "nesto"
// rec=rec.split("")
// let s=0;
// let k=0;

// for(i=0; i<rec.length; i++){
//     if(rec[i]=="a" ||rec[i]=="e" || rec[i]=="i" || rec[i]=="o" || rec[i]=="u"){
//         s++;
        
//     }else{
//         k++
//     }
    
// }

// console.log(rec.join(""));
// console.log(s);
// console.log(k);

//primer2

// let samoglasnici = ["a", "e", "i", "o", "u"];
// while(true){
//     let brSamoglasnici = 0;
//     let suglasnici = 0;
//     let rec = prompt("Unesite rec: ")
//     if(rec === "0")
//         break
//     for(let i = 0; i < rec.length; i++)
//     if (samoglasnici.includes(rec[i]))
//     // if(rec[i] === "a" ||rec[i] === "e" || rec[i] === "i" || rec[i] === "o" || rec[i] === "u")
//     {
//         brSamoglasnici++
//     }
//     else{
//         suglasnici++;
//     }

//     console.log(`Ima ${suglasnici} suglasnika, i ${brSamoglasnici} samoglasnika`);
// }

//////////////////////////////////////////////////////

// 8.7. Саставити програм за одређивање броја великих слова, малих слова и цифара у улазном
// тексту.

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// while (true) {
//   let velikaSlova = 0;
//   let malaSlova = 0;
//   let brojBrojeva = 0;
//   let rec = prompt("Unesite rec: ");
//   if (rec === "0") break;
//   for (let i = 0; i < rec.length; i++) {
//     if (niz.includes(parseInt(rec[i]))) {
//       brojBrojeva++;
//     } else if (rec[i] === rec[i].toUpperCase()) {
//       velikaSlova++;
//     } else {
//       malaSlova++;
//     }
//   }

//   console.log(
//     `Velika slova ${velikaSlova} i mala slova ${malaSlova}, broj cifara je ${brojBrojeva}`
//   );
// }
////////////////////////////////////////////////////////////////

// let niz=[1,2,3,4,5,6,7,8,9,0];

// while (true) {
//     let velikaSlova=0;
//     let malaSlova=0;
//     let brojBrojeva=0;
//     let rec = prompt("Unesite rec:");
//     if(rec === "0") break;
//     for(let i = 0; i<rec.length; i++){
//         if(niz.includes(parseInt(rec[i]))) {
//             brojBrojeva++
//         }else if (rec[i] === rec[i].toUpperCase()) {
//             velikaSlova++;
//         }else {
//             malaSlova++
//         }
//     }
//     console.log( `Velika slova ${velikaSlova} i mala slova ${malaSlova}, brojCifara je ${brojBrojeva}` );
// }

////////////////////////////////////////
// 8.8. Саставити програм за одређивање броја појављивања слова А у улазном тексту и изразити ту
// вредност процентуално у односу на све унете знаке.
// let rec=prompt('Unesi rec');
// let brojac=0;

// for(i=0; i<rec.length;i++){
//     if(rec[i]=="A" || rec[i]=="a"){
//         brojac++;
//     }
// }

// let procenat=brojac / rec.length*100;
// console.log("rec ima "+ rec.length+" slova");
// console.log("pojavljuje se "+procenat+"%");
// console.log("slovo a se pojavljuje "  + brojac+ " puta");


/////////
//primer 2
// while(true){
//     let rec = prompt("Unesite rec: ");
//     let brojA = 0;

//     if(rec.includes("A")){
//         for(let slovo of rec){
//             console.log(slovo);
//             if(slovo === "A")
//             {
//                 console.log("Proslo");
//                     brojA++;
//             }
//         }
//         for(let i = 0; i < rec.length; i++){
//             if(rec[i] === "A"){
//                 brojA++
//             }
//         }
//     }

//     console.log(`Procentalno slova A u reci ima ${brojA / rec.length * 100}%`);
// }

////////////////////////////////////////////////////
//8.12 domaci


// let a="aaAA(aaaaa(aaaaaa)a))"

// let otv=0;
// let zat=0;
// for(i=0;i<a.length;i++){
//     if(a[i]==="("){
//         otv++;
//     }else if(a[i]===")"){
//         zat++;
//     }
// }
// if(otv===zat){
//     console.log("poredjano");
// }else{
//     console.log("nije");
// }