    const hari = 10;

switch(hari){
        case 1:
        hasil ="minggu";
        break;
        case 2:
        hasil ="senin";
        break;
        case 3:
        hasil ="selasa";
        break;
        case 4:
        hasil ="rabu";
        break;
        case 5:
        hasil ="kamis";
        break;
        case 6:
        hasil ="jum'at";
        break;
        case 7:
        hasil ="sabtu";
        break;
        default:
        hasil ="hari tidak ada";
        break;

}

console.log(hasil);

const bln = "januari";
let bulan;

switch (bln){
    case "januari":
        bulan = 1;
    break;
    case "februari":
        bulan = 2;
    break;
    case "maret":
        bulan = 3;
    break;
    case "april":
        bulan = 4;
    break;
    default:
        bulan ="bulan belum di buat";

}

console.log(bulan);

let a = 10;
let b = 20;
let operator = "+";


switch (operator){
    case "+":
        hasil = a+b;
        break;
    case "-":
        hasil = a-b;
        break;
    case "*":
        hasil = a*b;
        break;
    case "/":
        hasil = a/b;
        break;
    case "%":
        hasil = a%b;
        break;
    default:
        hasil = "operator tidak ditemukan";
        break;
}
console.log("hasil dari "+a+" "+operator+" "+b+" adalah "+hasil);    


