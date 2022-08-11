// MENGHILANGKAN KARTU NAMA

// 1. Dengan Cara Biasa
// var close = document.querySelector('.close');
// var kartuNama = document.querySelector('.card');

// close.addEventListener('click',function(){
// 	kartuNama.style.display = 'none';
// });

// ---------------------------------------------------------------------------------


// Dengan DOM Traversal

// 1. Dengan For
// const close = document.querySelectorAll('.close');

//  for(let i=0 ; i<close.length ; i++){
//  	close[i].addEventListener('click', function(){
//  		close[i].parentElement.style.display = 'none'; // parentElement adalah DOM Traversal nya
//  	});
//  }


// 2. Dengan forEach

// Event di Tombol Close
const close = document.querySelectorAll('.close');
close.forEach(function(el){
	el.addEventListener('click', function(e){
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
		e.stopPropagation(); // ini fungsi bubbling, supaya event di parent gak ikutan aktif waktu pencet close
	})
});


// Event di parent (class card) - waktu card di pencet, akan muncul alert ok
const cards = document.querySelectorAll('.card');
cards.forEach(function(eCard){
	eCard.addEventListener('click', function(){
		alert('ok');
	});
});


//  -------------------------------------------------------------------------------

// PENGGUNAAN PARENT ELEMENT DAN SIBLING

const nama = document.querySelector('.nama');

// untuk mengambil parent nya (class card)
const ortu = nama.parentElement;

// untuk mengambil parent dari parent nya (class container)
const kakek = nama.parentElement.parentElement;

// untuk mengambil element sebelumnya (dalam 1 parent)
const kakak = nama.previousElementSibling;

// untuk mengambil element setelahnya (dalam 1 parent)
const adik = nama.nextElementSibling;

console.log(adik);