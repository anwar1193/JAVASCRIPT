// DOM Manipulation (Element)

// 1. element.innerHTML
// var judul = document.getElementById('judul');
// judul.innerHTML = '<em>Munawar Ahmad</em>';

// var sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<p>Hello World</p>';


// 2. element.style.<propertiCSS>
// var judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// 3. element.setAttribute()
// var judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'munawar'); //cek di console


// 4. element.classList
var p2 = document.querySelector('.p2');

// p2.classList; //untuk menampilkan class2 yang ada di p2 (tulis di console aja)
p2.classList.add('label'); // menambah class label di p2
p2.classList.remove('label'); // menghapus class lebel di p2
p2.classList.toggle('label'); // menambah class label di p2
p2.classList.toggle('label'); // menghapus class label di p2
p2.classList.item(0); //untuk menampilkan class index ke-0 (pertama) pada p2 (tulis di console aja)
p2.classList.contains('p2'); // menanyakan apakah ada class p2 di p2? hasil true atau false (tulis di console aja)
p2.classList.replace('p2','p10'); //mengganti class p2 jadi p10