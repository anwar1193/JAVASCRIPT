// Contoh Program 1 : Kalkulator Tambah Dengan Inputan Dari User

// function tambah(a,b){
// 	return a+b;
// }

// var nilai1 = parseInt(prompt('Masukkan Nilai 1 :'));
// var nilai2 = parseInt(prompt('Masukkan Nilai 2 :'));
// var hasil = tambah(nilai1,nilai2);

// alert(hasil);

// -----------------------------------------------------------------------------

// Contoh Program 2 : Function di dalam Function

// function tambah(a,b){
// 	return a+b;
// }

// function kali(a,b){
// 	return a*b;
// }

// var hasil = kali(tambah(1,2) , tambah(3,4));

// alert(hasil);

// -----------------------------------------------------------------------------

// Contoh Program 3 : Menggunakan Arguments (argument tak terbatas & tanpa menggunakan parameter)

function tambah(){
	var hasil = 0;
	for(var i=0; i<arguments.length; i++){
		hasil += arguments[i];
	}
	return hasil;
}

var coba = tambah (1,2,3,4,5);
alert(coba);