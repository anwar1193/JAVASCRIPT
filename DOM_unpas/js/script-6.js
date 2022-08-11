// DOM Manipulation (Node)



// Contoh Kasus-1, menambahkan paragraf baru (p) setelah paragraf 3 (di Akhir)

// step 1, buat elemen baru
var pBaru = document.createElement('p');

// step 2, buat isi element nya (text)
var textPBaru = document.createTextNode('Paragraf Baru');

// step 3, masukkan text(textPBaru) ke dalam paragraf baru (pBaru)
pBaru.appendChild(textPBaru);

// step 4 , Definisikan Parentnya (Section 5)
var sectionA = document.getElementById('a');

// step 5 , letakkan pBaru di sectionA (Paling bawah/akhir)
sectionA.appendChild(pBaru);






// Contoh Kasus-2, menambahkan list item (li) baru di bawah item-1 di atas item-2

// step 1, siapkan element baru dan isi nya lalu masukkan (gabungkan)
var liBaru = document.createElement('li');
var textLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(textLiBaru);

// step 2, buat/definisikan parent nya
var ul = document.querySelector('section#b ul');

// step 3, buat acuan tempat nya, ambil li2 karena kita akan menaruh sebelum li2
var li2 = document.querySelector('section#b ul li:nth-child(2)');

// step 4, letakkan liBaru sebelum li2
ul.insertBefore(liBaru, li2); // (node baru, lokasi);






// Contoh Kasus-3, remove link

// step-1 : definisikan parent nya (section a)
var sectionA = document.getElementById('a');

// step-2 : definisikan target yang akan di remove
var link = document.getElementsByTagName('a')[0];

// step-3 : remove link dari section a
sectionA.removeChild(link);






// Contoh Kasus 4, Mengganti p4 dengan h2

// step-1 : definisikan parent nya (section b)
var sectionB = document.getElementById('b');

// step-2 : definisikan target yang akan di replace
var p4 = sectionB.querySelector('p');

// step-3 : buat element baru
var h2baru = document.createElement('h2');
var textH2Baru = document.createTextNode('Judul Baru');
h2baru.appendChild(textH2Baru);

// step-4 : replace p4 dengan h2
sectionB.replaceChild(h2baru, p4);