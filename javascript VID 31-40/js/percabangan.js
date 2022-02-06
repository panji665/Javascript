if(true){
    console.log("dijalankan jika benar ");
}else{
    console.log("dijalankan jika salah");
}


let nilai = 60;
let standar = 60;
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let BatasAtas = 100;
let BatasBawah = 0;
if(nilai <= BatasAtas && nilai >= BatasBawah){
    if(nilai >= 60){
        console.log(baik);
    
    }else{
        console.log(gagal);
    
    }

}else{
    console.log("Nilai yang anda masukkan salah");
}

