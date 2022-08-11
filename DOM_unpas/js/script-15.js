// Contoh SetTimout Dengan Function Terpisah
// function tampilPesan(){
// 	alert('Selamat Pagi');
// }

// setTimeout(tampilPesan, 2000);

// ------------------------------------------------------------------------------

// Contoh setTimeout dengan function di Dalamnya
// setTimeout(function(){
// 	alert('Hai Teman');
// },2000);

// -------------------------------------------------------------------------------

// Contoh setTimeout yang bisa dihentikan (dengan tombol)

// const tes = setTimeout(function(){
// 	alert('Selamat Pagi');
// },3000);

// const tombol = document.querySelector('#tombol');
// tombol.addEventListener('click', function(){
// 	clearTimeout(tes);
// 	alert('Tombol Berfungsi');
// });

// -----------------------------------------------------------------------------

// Contoh setInterval

// const tes = setInterval(function(){
// 	console.log('Hallo');
// },1000);

// const tombol = document.querySelector('#tombol');
// tombol.addEventListener('click', function(){
// 	clearInterval(tes);
// 	alert('interval berhenti');
// });

//  ---------------------------------------------------------------------------

// Waktu Hitung Mundur

// const tujuan = new Date('JAN 15, 2020 06:29:00').getTime(); //tujuan dengan waktu tertentu (sesuai kalender)
const tujuan = new Date().getTime() + (1000*60); //tujuan jika ingin durasi 1 menit

const hitungMundur = setInterval(function(){
	const sekarang = new Date().getTime();
	const selisih = tujuan-sekarang;
	const hari = Math.floor(selisih/(1000*60*60*24));
	const jam = Math.floor(selisih%(1000*60*60*24) / (1000*60*60));
	const menit = Math.floor(selisih%(1000*60*60) / (1000*60));
	const detik = Math.floor(selisih%(1000*60) / 1000);

	const text = document.querySelector('.text');
	text.innerHTML = 'Waktu Anda Tinggal ' + hari + ' Hari ' + jam + ' Jam ' + menit + ' Menit ' + detik + ' Detik Lagi !!';

	if(hari==0 && jam==0 && menit==0 && detik==0){
		clearInterval(hitungMundur);
		text.innerHTML = 'Waktu Anda Habis !!';
	}
},1000);