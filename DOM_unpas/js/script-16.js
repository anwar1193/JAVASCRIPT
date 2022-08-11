// Penjumlahan

const tombol = document.querySelector('.tombol');
const hasil = document.querySelector('#hasil');

tombol.addEventListener('click', function(){
	const angka1 = parseInt(document.querySelector('#angka1').value);
	const angka2 = parseInt(document.querySelector('#angka2').value);
	const total = angka1 + angka2;
	hasil.value = total;
});

// -----------------------------------------------------------------------

// Simulasi Transaksi Penjualan

const jmlBeli = document.querySelector('#jmlBeli');
const totals = document.querySelector('#total');
const bayar = document.querySelector('#bayar');
const kembalian = document.querySelector('.kembalian');

jmlBeli.addEventListener('keyup',function(){
	const harga = parseInt(document.querySelector('#harga').value);
	const jmlBeli = parseInt(document.querySelector('#jmlBeli').value); 
	totals.value = harga * jmlBeli;
});

bayar.addEventListener('keyup', function(){
	const total = parseInt(document.querySelector('#total').value);
	const bayar = parseInt(document.querySelector('#bayar').value);
	kembalian.innerHTML = 'Kembalian : Rp ' + (bayar-total) + ',-';

});