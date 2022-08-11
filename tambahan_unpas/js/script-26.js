$lagi = true;
while($lagi){
// Menangkap Pilihan Player
var player = prompt('pilih : gajah, semut, orang');

// Menangkap Pilihan Komputer (Dengan Bilangan Random)
var comp = Math.random(); // Bilangan random 0-1

if(comp < 0.34){
	comp = 'gajah';
}else if(comp >= 0.34 && comp<0.67){
	comp = 'orang';
}else{
	comp = 'semut';
}

// Menentukan rules (siapa menang lawan siapa)
var hasil = '';

if(player == comp){
	hasil = 'SERI!';
}else if(player == 'gajah'){
	hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
}else if(player == 'orang'){
	hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
}else if(player == 'semut'){
	hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}else{
	hasil = 'Memasukan Pilihan yang Salah';
}

// Tampilkan hasil
alert('Kamu memilih ' + player + ' dan Komputer memilih ' + comp + '\n Maka Hasilnya : kamu ' + hasil);

$lagi = confirm('Main Lagi ?');

}

alert('Terimakasih Sudah Bermain, Shinta Sayang');