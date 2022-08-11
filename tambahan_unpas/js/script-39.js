var penumpang = [];
var tambahPenumpang = function(namaPenumpang,penumpang){
	// jika angkot kosong
	if(penumpang.length == 0){
		//tambah penumpang di awal array
		penumpang.push(namaPenumpang);

		//kembalikan isi array
		return penumpang;
	}else{
		//telusuri seluruh kursi dari awal
		for(var i = 0; i<penumpang.length; i++){
			// jika ada kursi kosong
			if(penumpang[i] == undefined){
				// tambah penumpang dari kursi tersebut
				penumpang[i] = namaPenumpang;

				// kembalikan isi array
				return penumpang;
			}

			// Jika sudah ada nama yang sama
			else if(penumpang[i] == namaPenumpang){
				// tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada di angkot');
				// kembalikan isi array
				return penumpang;
			}

			// jika seluruh kursi sudah terisi
			else if(i == penumpang.length - 1){
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang,penumpang){
	// jika angkot kosong, tampilkan bahwa angkot kosong
	if(penumpang.length == 0){
		console.log('Angkot Masih Kosong');
		return penumpang;

	// jika angkot tidak kosong
	}else{
		// telurusi semua kursi penumpang
		for(var i=0 ; i<penumpang.length ; i++){
 
			// jika ada penumpang yang namanya sesuai
			if(penumpang[i] == namaPenumpang){
				// hapus penumpang
				penumpang[i] = undefined;
				return penumpang;
			}

			// Jika tidak ada penumpang yang namanya sesuai
			else if(i == penumpang.length-1){
				console.log('tidak ada penumpang yang namanya ' + namaPenumpang);
				return penumpang;
			}

		}	
	}
}