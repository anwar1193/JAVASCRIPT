const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){

	// cek apakah yang di klik adalah thumb
	if(e.target.className == 'thumb'){

		jumbo.src = e.target.src;   // src pada class jumbo akan berubah menjadi src pada thumb (target) yang di klik
		jumbo.classList.add('fade'); // menambahkan class fade yang ada di css

		setTimeout(function(){ // untuk menghilangkan fade yang aktif setelah 0.5 detik (karena fade akan di pakai oleh thumb lain)
			jumbo.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(thumb){ // looping semua thumb
			if(thumb.classList.contains('active')){ //jika ada thumb yang ada class active (class dari css), 
				thumb.classList.remove('active'); // hilangkan class active tsb
			}
		});

		e.target.classList.add('active'); // jika tidak ada class active, tambahkan class active pada thumb yang di klik

	}

});