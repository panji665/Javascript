function coba(){
    a = document.querySelector(".isi").innerHTML="belajar eventlistener";
    console.log("coba eventlistener");
}

// judul.addEventListener("click",coba);

judul.onmouseover = coba;

judul.onmouseover = function(){

    console.log("coba function anonymouse");
}
