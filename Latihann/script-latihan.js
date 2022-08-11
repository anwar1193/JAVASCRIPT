let lagi = true;

while(lagi){
	// Pilihan Player
	let player = prompt('Masukkan Pilihan (Gajah, Semut Orang)');

	// Pilihan Komputer
	let comp = Math.random();

	if(comp >= 0.67){
		comp = 'Gajah';
	}else if(comp > 0.33 && comp < 0.67){
		comp = 'Orang';
	}else{
		comp = 'Semut';
	}

	// Rules
	let hasil = '';

	if(player == comp){

		hasil = 'Seri';

	}else if(player == 'Gajah'){

		hasil = (comp == 'Semut') ? 'Kalah' : 'Menang';

	}else if(player=='Semut'){

		hasil = (comp == 'Gajah') ? 'Menang' : 'Kalah';

	}else if(player == 'Orang'){
		hasil = (comp == 'Semut') ? 'Menang' : 'Kalah';
	}else{
		hasil = 'Memasukkan Pilihan Salah';
	}

	alert('Anda Pilih ' + player + ' dan Komputer Pilih ' + comp + ', Maka Kamu ' + hasil);

	lagi = confirm('lagi?');
}

alert('terimakasih sudah bermain');