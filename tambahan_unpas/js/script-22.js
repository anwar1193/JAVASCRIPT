// 1. Contoh 1

// var angka = prompt('Masukkan Angka :');

// if(angka % 2 == 0){
// 	console.log(angka + ' adalah bilangan GENAP');
// }else if(angka % 2 == 1){
// 	console.log(angka + ' adalah bilangan GANJIL');
// }else{
// 	console.log(angka + ' bukan angka');
// }

// Latihan Juragan Angkot
var jmlAngkot = 10;

for(var noAngkot=1 ; noAngkot<=jmlAngkot ; noAngkot++){
	if(noAngkot<=6 && noAngkot != 5){
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
	}else if(noAngkot==5 || noAngkot==8 || noAngkot==10){
		console.log('Angkot No. ' + noAngkot + ' sedang lembur');
	}else{
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
	}
}