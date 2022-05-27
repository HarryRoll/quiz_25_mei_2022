/**
 * input 4 digit integer lalu hitung jumlahnya
 */
function sumDigit(n){
    let b=String(n);
    if(isNaN(n)){
        return(`${n} is not number, try again...`);

    }else if(b.length>=5){
        return(`${n} harus lebih kecil dari 10000`);
    }else if(b.length==4){
    let z=Number(b[0])+Number(b[1])+Number(b[2])+Number(b[3]);
    return(z);
    }else if(b.length==3){
    let z=Number(b[0])+Number(b[1])+Number(b[2]);
    return(z);
    }else if(b.length==2){
    let z=Number(b[0])+Number(b[1]);
    return(z);
    }else if(b.length==2){
    let z=Number(b[0])+Number(b[1]);
    return(z);
    }else{
    return(b);
    }

}
console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...





// function a(nilai){
//     for(i=0; i<=nilai.length-1; i++){
//        // total+=nilai[i];
//        total = Number(nilai[i]);
//         console.log(total);
//         //       return(total+=nilai[i]);
//     }
// //    console.log(total);
// }

// a(10);
// console.log(a('5432'));

// var b = 'budi aja'; 
// console.log(b.length);
// console.log(b[0]);

// function hitung(nilai){
//     console.log(nilai.length);
// }
// hitung('123445');


// text = 'jujurly';
// console.log(text.length-1);
// for(c=0; c<=text.length-1; c++){
//     console.log(c)
// }