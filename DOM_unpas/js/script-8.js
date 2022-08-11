// KASUS-1 : 
	// - Buat Tombol (dengan HTML - button)
	// - Ketika tombol di klik, warna berubah biru muda
	// - Ketika tombol di klik lagi, warna berubah ke warna asal (putih)

var tombol = document.getElementById('tUbahWarna');

tombol.onclick = function(){
	document.body.classList.toggle('biruMuda'); //klik pertama, tambahkan class biru muda, klik kedua, hilangkan class biru muda
}

// ---------------------------------------------------------------------------------

// KASUS-2 :
	// - Buat Tombol Dengan Javascript
	// - Setiap Tombol di klik, warna body akan berubah secara acak

var tAcakWarna = document.createElement('button'); // membuat tombol
var textTAcakWarna = document.createTextNode('Acak Warna'); // membuat tulisan tombol
tAcakWarna.appendChild(textTAcakWarna); // masukkan tulisan tombol di tombol
tAcakWarna.setAttribute('type','button'); // memasukan attribute type di tombol

tombol.after(tAcakWarna); //meletakkan tAcakWarna Setelah tombol

// fungsi saat tAcakWarna di Klik
tAcakWarna.addEventListener('click', function(){
	// document.body.style.backgroundColor = 'rgb(100,50,200)'; // fungsi mewarnai dengan rgb

	var r = Math.round(Math.random() * 255 + 1); //Math.random() : untuk acak angka dari 1-255 , Math.round() untuk menghilangkan angka di belakang koma (pembulatan)
	var g = Math.round(Math.random() * 255 + 1);
	var b = Math.round(Math.random() * 255 + 1);
	console.log(r);
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	
});


// ---------------------------------------------------------------------------------

// KASUS-3
	// Buat 3 Slider dengan html (r,g,b) -> <input type="range">
	// Setiap Di geser warna body berubah sesuai perpaduan rgb nya

var sMerah = document.querySelector('input[name=sMerah]');
var sHijau = document.querySelector('input[name=sHijau]');
var sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){ //change->ketika digeser lalu lepas , input->ketika digeser(realtime)
	// menangkap nilai slider, paling kanan 255, paling kiri 0
	var r = sMerah.value; //mengambil nilai di inputan (apapun bentuk nya)
	var g = sHijau.value;
	var b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')'
});

sHijau.addEventListener('input', function(){ //change->ketika digeser lalu lepas , input->ketika digeser(realtime)
	// menangkap nilai slider, paling kanan 255, paling kiri 0
	var r = sMerah.value; //mengambil nilai di inputan (apapun bentuk nya)
	var g = sHijau.value;
	var b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')'
});

sBiru.addEventListener('input', function(){ //change->ketika digeser lalu lepas , input->ketika digeser(realtime)
	// menangkap nilai slider, paling kanan 255, paling kiri 0
	var r = sMerah.value; //mengambil nilai di inputan (apapun bentuk nya)
	var g = sHijau.value;
	var b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')'
});


// ---------------------------------------------------------------------------------

// KASUS-4
	// 1. Ketika Mouse Digerakan Warna Backround Body Berubah
	// 2. Menggunakan koordinat posisi mouse

document.body.addEventListener('mousemove', function(event){ //ketika mouse di gerakkan
	// Posisi Mouse :
	// console.log(event.clientX); -> mendapat nilai koordinat sumbu X
	// console.log(event.clientY); -> mendapat nilai koordinat sumbu Y

	// Ukuran Browser (lebar browser):
	// console.log(window.innerWidth);

	// mendapatkan nilai sumbu X ketika mouse di geser, paling kiri=0, paling kanan=255
	var xPos = Math.round((event.clientX / window.innerWidth) * 255); 

	// mendapatkan nilai sumbu Y ketika mouse di geser, paling atas=0, paling bawah=255
	var yPos = Math.round((event.clientY / window.innerWidth) * 255);

	document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';

});