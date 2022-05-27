/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 * 
 */

function fareinheitToKelvin(fareinheit){

       if(isNaN(fareinheit)){
           return('Fareinheit must an number');
       }else{
           result=(fareinheit+459.67)/1.8
            return(result);
       }
}

console.log(Math.floor(fareinheitToKelvin(45))); //Convert Fareinheit (45) to Kelvin = 280
console.log(Math.ceil(fareinheitToKelvin("1"))); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number
