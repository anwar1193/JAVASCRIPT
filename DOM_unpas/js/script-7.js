// DOM Event (12:18)

// 1. Event Handler, saat p2 di klik berubah warna biru muda

function ubahWarna(){
	p2.style.backgroundColor = 'lightBlue';
}

var p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;


// 2. addEventListener(), saat Paragraf 4 di klik, tambahkan item di bawahnya

var p4 = document.querySelector('section#b p');

p4.addEventListener('click',function(){
	// tangkap parent
	var ul = document.querySelector('section#b ul');

	var liBaru = document.createElement('li');
	var textLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(textLiBaru);
	ul.appendChild(liBaru);
});
