/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
    
    function taxGaji1() {
            if (gaji1 >= 10000) {
                return (10 / 100).toFixed(2)
            } else if (gaji1 >= 1000 && gaji1 < 10000) {
                return (5 / 100).toFixed(2)
            } else if (gaji1 >= 100 && gaji1 < 1000) {
                return (2 / 100).toFixed(2)
            }
         }
tax1=taxGaji1();
taxUp1=tax1*100;
sallWithtax1=tax1*gaji1;
total1=sallWithtax1+gaji1;

    function taxGaji2() {
        if (gaji2 >= 10000) {
            return (10 / 100).toFixed(2)
        } else if (gaji2 >= 1000 && gaji2 < 10000) {
            return (5 / 100).toFixed(2)
        } else if (gaji2 >= 100 && gaji2 < 1000) {
            return (2 / 100).toFixed(2)
        }
    }
tax2=taxGaji2();
taxUp2=tax2*100;
sallWithtax2=tax2*gaji2;
total2=sallWithtax2+gaji2;

    function taxGaji3() {
        if (gaji3 >= 10000) {
            return (10 / 100).toFixed(2)
        } else if (gaji3 >= 1000 && gaji3 < 10000) {
            return (5 / 100).toFixed(2)
        } else if (gaji3 >= 100 && gaji3 < 1000) {
            return (2 / 100).toFixed(2)
        }
    }
tax3=taxGaji3();
taxUp3=tax3*100;
sallWithtax3=tax3*gaji3;
total3=sallWithtax3+gaji3;

final =total1+total2+total3;

    let salary1 = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(gaji1);
    let salary2 = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(gaji2);
    let salary3 = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(gaji3);

    let total01 = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(total1);
    let total02 = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(total2);
    let total03 = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(total3);
    let finalTotal = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(final);
    return(`Total gaji yang harus dibayar : \n 
    Emp1 : ${salary1} + pajak(${taxUp1}%)=${total01}\n 
    Emp1 : ${salary2} + pajak(${taxUp2}%)=${total02}\n
    Emp1 : ${salary3} + pajak(${taxUp3}%)=${total03}\n
    total: ${finalTotal}`)

    }


// salary.forEach(function taxGaji(gaji) {
//     if (gaji >= 10000) {
//         return (10 / 100).toFixed(2)
//     } else if (gaji >= 1000 && gaji < 10000) {
//         return (5 / 100).toFixed(2)
//     } else if (gaji >= 100 && gaji < 1000) {
//         return (2 / 100).toFixed(2)
//     }
//  });


console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
