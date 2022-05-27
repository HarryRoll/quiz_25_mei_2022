 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

const { format } = require("path");

 function getSalesDiscount(price,tax,discount){
        if(isNaN(price)&&isNaN(tax)&&isNaN(discount)){
            return('Price, Tax & Discount harus dalam angkaa');
        }else if(isNaN(price)){
            return('Price harus dalam angkaa');
        }else if(isNaN(tax)){
            return('Pajak harus dalam angkaa');
        }else{
            let disc=price*(discount/100);
            let potongan = price - disc;
            let pajak = potongan*(tax/100);
            let total = potongan+pajak;
            let totalBayar = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(total);
            let taxIDR = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(pajak);
            let afterdisc = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(potongan);
            let discIDR = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(disc);
            let sales = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(price);
            return(`Total Sales        : ${sales}`)+'\n'+(`Discount (5%)      : ${discIDR}`)+'\n'+(`PriceAfterDiscount : ${afterdisc}`)+'\n'+(`Pajak (10%)        : ${taxIDR}`)
            +'\n'+(`----------------------------------------`)+'\n'+(`TotalPayment       : ${totalBayar}`);
        }
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */