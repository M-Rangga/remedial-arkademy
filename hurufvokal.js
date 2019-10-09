function hurufVokal(str){
    var vokal =  'aiueoAIUEO';
    var hitung = 0;

    for (var x= 0; x < str.length; x++ ){
        if  (vokal.indexOf(str[x]) !== -1){
            hitung++ ;    
        }
    }
    return hitung;
}
console.log(hurufVokal('M Rangga Ibrahim'));