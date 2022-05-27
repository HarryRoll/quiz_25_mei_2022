/** Display year is kabisat and display month */

function getDays(month,year){
    if(isNaN(month)&&isNaN(year)){
        return('inputan bulan dan tahun harus dalam integer');
    }else if(isNaN(month)){
        return('inputan bulan harus dalam integer');
    }else if(isNaN(year)){
        return('inputan tahun harus dalam integer');
    }else if(year%4==0){
        switch(month){
            case 1:
            month = 31;
            break;
            case 2:
            month = 29;
            break;
        }
        return(`this month has ${month} days, ${year} adalah tahun kabisat`);
    }else{
        switch(month){
            case 1:
            month = 31;
            break;
            case 2:
            month = 28;
            break;
            case 3:
            month = 31;
            break;
            case 4:
            month = 30;
            break;
            case 5:
            month = 31;
            break;
            case 6:
            month = 30;
            break;
            case 7:
            month = 31;
            break;
            case 8:
            month = 31;
            break;                
        }
        return(`This month has ${month} hari`);
    }
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari