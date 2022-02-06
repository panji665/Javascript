let nilai = [
    {nama : "budi",ipa : 90, bahasa : 70,matematika : 80},
    {nama : "anos",ipa : 79, bahasa : 80,matematika : 90},
    {nama : "rimuru",ipa : 80, bahasa : 60,matematika : 90},
    {nama : "rudeus",ipa : 100, bahasa : 80,matematika : 80},

];

let nama =["budi","anos","rimuru","rudeus"];
nama.push("levi","mikasa");

// console.log(nama.pop());
// console.log(nama.shift());
// nama.unshift("momonga");
// console.log(nama.splice(3,5));

console.log(nama.slice(3,5));

let mapel = ["ipa","bahasa","matematika"];

// console.log(nama.concat(mapel));
// console.log(nama.concat(["ips","pkn","sejarah"]));

//console.log(nilai[0].nama);
// console.log(nama);

// for(let index = 0 ; index < nama.length; index++){
//     console.log(nama[index]);
// }

// nama.forEach(function(a){
//     console.log(a);
// });


// nama.forEach(a => console.log(a));

// nilai.filter(function(a){
//     if(a.ipa > 80){
//         console.log(a.nama);
//     }

// })

nilai.filter(a  => a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null);

// console.log(nilai);

// let siswa = nilai.map(function(a){
//     return a.nama;
    
// })

//     let siswa = nilai.map(a => [a.nama, a.ipa, a.bahasa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function(a,b){
//     return a = a + b.ipa;
// },0)

let hasil = nilai.reduce((a, b) => ( a += b.matematika ), 0);

console.log(hasil);
