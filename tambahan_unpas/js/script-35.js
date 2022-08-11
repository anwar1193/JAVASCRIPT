// 1. menampilkan isi array

// var mhs = ['anwar', 'shinta', 'muneeb'];
// var text = '';

// for(var i=0; i<mhs.length ; i++){
// 	console.log(mhs[i]);
// }

// 2. Menambah Dan Menghapus Isi Array

var mhs = ['anwar','shinta','muneeb','fikar'];

// menambah element terakhir pada array
// mhs.push('muneeb');

// menghapus element terakhir pada array
// mhs.pop();

// menambah element awal pada array
// mhs.unshift('muneeb');

// menghapus element awal pada array
// mhs.shift();

// menambahkan element setelah anwar
// mhs.splice(1,0,'fikar');

// mengiris array / mengambil array 'shinta dan muneeb'
var mhs2 = mhs.slice(1,3);

console.log(mhs2.join('-'));