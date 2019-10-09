	var nomor = [9, 2, 3, 4, 2 , 7, 8, 5, 11,1];
	
	var genap = [10, 2, 4, 2, 8, 6, 12, 2];
	var ganjil = [9, 3, 7, 5, 11];
	var i = 0;
	
	for(i; i <nomor.length; i++){
		if (nomor[i] % 2 == 0) {
			genap.push(nomor[i]);
		}else{
			ganjil.push(nomor[i]);
		}
	}
		console.log(genap);
		console.log(ganjil)