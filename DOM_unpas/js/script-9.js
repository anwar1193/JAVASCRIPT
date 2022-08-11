function getPilihanComputer(){

	var comp = Math.random(); // Bilangan random 0-1

	if(comp < 0.34){
		return 'gajah';
	}else if(comp >= 0.34 && comp<0.67){
		return 'orang';
	}else{
		return 'semut';
	}

}

function getHasil(comp, player){

	if(player == comp){
		return 'SERI!';
	}else if(player == 'gajah'){
		return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
	}else if(player == 'orang'){
		return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
	}else if(player == 'semut'){
		return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
	}else{
		return 'Memasukan Pilihan yang Salah';
	}

}
 

function putar(){
	var imgComputer = document.querySelector('.img-komputer'); //ambil gambar yang ingin diputar
	var gambar = ['gajah', 'semut', 'orang']; //nama gajah,semut, orang sesuaikan dengan nama gambar
	var i = 0;

	var waktuMulai = new Date().getTime(); //ambil waktu sekarang

	setInterval(function(){
		// jika sudah 1 detik (1000 = 1 detik)
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval; //hentikan interval / putaran gambar
			return;
		}
		imgComputer.setAttribute('src', '9-File/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	},100) //setiap 0.1 detik gambar berputar
}


// SAAT TOMBOL (GAJAH,ORANG,SEMUT / GOS) DI KLIK (DENGAN PERULANGAN)
var pilihanGOS = document.querySelectorAll('li img');

pilihanGOS.forEach(function(pilGOS){
		pilGOS.addEventListener('click',function(){
			var pilihanComputer = getPilihanComputer();
			var pilihanPlayer = pilGOS.className;
			var hasil = getHasil(pilihanComputer, pilihanPlayer);

			putar(); //panggil fungsi putar

			setTimeout(function(){ //jalankan fungsi setelah 1 detik (setelah putar selesai), karena putar waktu nya 1 detik
				var imgComputer = document.querySelector('.img-komputer');
				imgComputer.setAttribute('src', '9-File/' + pilihanComputer + '.png');

				var info = document.querySelector('.info');
				info.innerHTML = hasil;
			},1000);

			
		});

});




// SAAT TOMBOL (GAJAH,ORANG,SEMUT) DI KLIK (TANPA PERULANGAN)

// Saat Tomboh Gajah di Klik
// var pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
// 	var pilihanComputer = getPilihanComputer();
// 	var pilihanPlayer = pGajah.className;
// 	var hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	var imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', '9-File/' + pilihanComputer + '.png');

// 	var info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });



// // Saat Tomboh Orang di Klik
// var pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function(){
// 	var pilihanComputer = getPilihanComputer();
// 	var pilihanPlayer = pOrang.className;
// 	var hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	var imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', '9-File/' + pilihanComputer + '.png');

// 	var info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });




// // Saat Tomboh Gajah di Klik
// var pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function(){
// 	var pilihanComputer = getPilihanComputer();
// 	var pilihanPlayer = pSemut.className;
// 	var hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	var imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', '9-File/' + pilihanComputer + '.png');

// 	var info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });