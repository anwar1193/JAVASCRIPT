// 1. Filter - mencari dan mengembalikan dalam bentuk array (banyak nilai)
// var angka = [3,5,6,7,1,2,8,4,30,10,20];
// var angka2 = angka.filter(function(e){
// 	return e > 5;
// });
// console.log(angka2.join(' - '));



// 2. Find - mencari dan mengembalikan dalam bentuk nilai (satu nilai)
var angka = [3,5,6,7,1,2,8,4,30,10,20];
var angka2 = angka.find(function(e){
	return e > 5;
});
console.log(angka2); //tidak bisa di tambah join, karena join hanya u/ array