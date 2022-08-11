var a = 1; // Ini global variable (bisa di panggil dimanapun)
 
function tes(){
	var b = 2; // ini function variable (hanya bisa dipanggil di dalam function)
	console.log(b); // bar b bisa di panggil di dalam function
	console.log(a); // bar a bisa di panggil di dalam function
}

tes();

console.log(a); // var a bisa di panggil di luar function

console.log(b); // ini akan error, var b bisa di panggil di luar function