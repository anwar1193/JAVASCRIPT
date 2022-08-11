// 1. Foreach

// var nama = ['anwar','shinta','muneeb'];

// nama.forEach(function(e,i){ // e = elemen, i = index ke
// 	console.log('nama ke-' + (i+1) + ' adalah ' + e);
// });



// 2. Map

// var angka = [1,2,3,4,5];
// var angka2 = angka.map(function(e){
// 	return e*2;
// });
// console.log(angka2.join(' - '));



// 3. Sort

// untuk string
// var nama = ['shinta', 'anwar', 'muneeb'];
// nama.sort();
// console.log(nama.join(' - '));

// untuk angka
var angka = [4,3,5,6,1,2,9,7,8,20,10];
angka.sort(function(a,b){
	return a-b;
});
console.log(angka.join(' - '));