// Latihan1 : Menghitung Jumlah Volume Kubus

function jumlahVolKubus(kubus1, kubus2){
	var vol1, vol2, volTotal;
	
	vol1 = kubus1*kubus1*kubus1;
	vol2 = kubus2*kubus2*kubus2;

	volTotal = vol1 + vol2;
	return volTotal;
}

alert('Volume Total Kubus 1 Adalah : ' + jumlahVolKubus(8,3));

alert('Volume Total Kubus 2 Adalah : ' + jumlahVolKubus(2,3));