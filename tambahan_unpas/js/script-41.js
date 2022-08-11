var mahasiswa = {
	nama : 'Munawar Ahmad',
	umur : 26,
	lulus : true,
	alamat : {
		jalan : 'Putat Nutug No.93',
		kota : 'Bogor',
		Provinsi : 'Jawa Barat'
	},
	IPSemester : [3.54 , 3.71 , 3.80 , 3.85 , 3.92 , 4.00],
	IPKumulatif : function (){
		var total = 0;
		var ips = this.IPSemester;
		for(var i=0 ; i<ips.length ; i++){
			total += ips[i];
		}
		return total/ips.length;
	}
}

console.log('Nama Mahasiswa : ' + mahasiswa.nama + '\n');
console.log('Umur : ' + mahasiswa.umur + '\n');
console.log('lulus : ' + mahasiswa.lulus + '\n');
console.log('kota tinggal : ' + mahasiswa.alamat.kota + '\n');
console.log('IP Semester I : ' + mahasiswa.IPSemester[0] + '\n');
console.log('IP Kumulatif : ' + mahasiswa.IPKumulatif() + '\n');
