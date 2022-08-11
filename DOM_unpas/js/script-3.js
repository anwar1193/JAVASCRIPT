// DOM Selection

// 1. getElementById -> document.getElementById() -> mengembalikan element
// var judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'silver';
// judul.innerHTML = 'Munawar Ahmad';

// 2. document.getElementsByTagName() -> Mengembalikan HTMLCollection (Array)
// var paragraf = document.getElementsByTagName('p');
// paragraf[2].style.backgroundColor = 'lightblue'; //menyeleksi tag p ke-3 , untuk mengetahui index nya bisa lihat di console

// 3. document.getElementsByClassName() -> Mengembalikan HTMLCollection (Array)
// var p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini Diubah Dari Javascript';

// 4. document.querySelector() -> menghasilkan element
var p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

var li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// 5. document.querySelectorAll() -> menghasilkan nodeList
var p = document.querySelectorAll('p');
p[2].style.color = 'blue';