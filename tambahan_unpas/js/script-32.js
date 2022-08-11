// Contoh 1 : Membuat Urutan Angka dari 10 ke 1 dengan function

// function kelipatan(n){
// 	if(n===0){
// 		return;
// 	}
// 	console.log(n);
// 	kelipatan(n-1);
// }

// kelipatan(10);



// Contoh 2 : Membuat faktor perkalian (seperti test compassion) , misal cara faktorial perkalian dari 5, maka 5x4x3x2x1 = 120

function faktorial(n){
	if(n===0){
		return 1;
	}

	return n * faktorial(n-1);
}

console.log(faktorial(5));