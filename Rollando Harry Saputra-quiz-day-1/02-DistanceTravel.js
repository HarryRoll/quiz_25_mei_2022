/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t), 
 *  where a = accelaration in number
 *  t : time
 */

const { exit } = require("process");

function calculateDistance(a, t){
    if(a<=0){
        return('Accelaration or time must be >= 0');
    }else if(a>0)
    {
        S=1/2*a*t*t;
        return("Jarak yang ditempuh adalah "+S+" meter/s");
    }else{
        return('input must an number');
    }
}

console.log(calculateDistance("a","t"));//input must an number
console.log(calculateDistance(-1,9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50,60)); //Jarak yang ditempuh adalah 90000 meter/s
