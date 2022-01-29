let obj = {

    nama : "smk revit",
    number : 12345678,

    buah : ["apel","jeruk","mangga",],

    coba : function(){
        return "coba function dalam object";
    },

    boleh : true,
    "tulis aja":123,

};

console.log(obj.buah[1]);
console.log(obj.nama);
console.log(obj.coba());
console.log(obj.boleh);
console.log(obj.number);
console.log(obj["tulis aja"]);