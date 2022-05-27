/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if(isNaN(seconds)){
        return(`${seconds} is not number`);
    }else{
        let hours = seconds/3600;
        let days = hours/24;
        let modMinuts = seconds%3600;
        let minuts= modMinuts/60;
        let modDays = hours%24;
        let modSeconds = seconds%60;
        return (Math.floor((`${days}`))+' hari '+ Math.floor(`${modDays}`)+' jam '+Math.floor(`${minuts}`)+' menit '+Math.floor(`${modSeconds}`)+' detik');
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik
