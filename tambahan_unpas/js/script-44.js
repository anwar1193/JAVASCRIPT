// Membuat pengelolaan angkot dengan object

var angkot1 = new Angkot('Anwar',['Ciseeng','Parung'], [], 0);
var angkot2 = new Angkot('Fikar',['Parung','Rumpin'], [], 0);

function Angkot(sopir, trayek, penumpang, kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang,bayar){
		// cek jika angkot masih kosong
		if(this.penumpang.length === 0){
			alert('Angkot Masih kosong');
			return false;
		}


		
		// cek penumpang di dalam angkot
		for(var i=0 ; i<this.penumpang.length ; i++){

			// kalo ada nama penumpang
			if(this.penumpang[i] == namaPenumpang){
				this.penumpang[i] = undefined; // hapus penumpang
				this.kas += bayar; // kas ditambah uang bayar dari penumpang
				return this.penumpang;

			}
		}
		
	}

}