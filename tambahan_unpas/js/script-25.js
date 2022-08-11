// 1. Latihan-1, buatlah
//  *****

// var text = '';
// for(var i=0 ; i<5; i++){
// 	text += '*';
// }
// console.log(text);\

// .................................................

// 2. Latihan-2, buatlah
//  *****
//  *****
//  *****
//  *****
//  *****
//  *****

// var text = '';

// for(var i=0 ; i<6 ; i++){

// 	for(var j=0 ; j<5; j++){
// 		text += '*';
// 	}

// 	text += '\n';

// }

// console.log(text);

// .....................................................

// 3. Latihan-3, Buatlah :
// *
// **
// ***
// ****
// *****

// var text='';

// for(var i=0 ; i<5 ; i++){
// 	for(var j=0 ; j<=i ; j++){
// 		text += '*';
// 	}
// 	text += '\n';
// }

// console.log(text);

// .......................................................

// 4. Latihan-4, Buatlah :
// *****
// ****
// ***
// **
// *

var text = '';

for(var i=5 ; i>0 ; i--){
	for(var j=0; j<i ; j++){
		text += '*';
	}
	text += '\n';
}

console.log(text);