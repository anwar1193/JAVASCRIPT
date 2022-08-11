// 1. Contoh 1 :
// var angka = prompt('Masukkan Angka');

// if(angka % 2 == 0){
// 	alert(angka + ' adalah bilangan GENAP');
// }else{
// 	alert(angka + ' adalah bilangan GANJIL');
// }

// Latihan Juragan Angkot
var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot

for(noAngkot=1 ; noAngkot<=jmlAngkot ; noAngkot++){
	if(noAngkot<=angkotBeroperasi){
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
	}else{
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
	}
}