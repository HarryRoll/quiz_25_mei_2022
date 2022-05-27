/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if(isNaN(start)&&isNaN(end)){
        return('abc or bca harus dalam angka');
    }else{
        onePersen = start/100;
        hasil = end-start;
        total = hasil/onePersen;
        return('Total income '+Math.floor(total)+'%');
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%
