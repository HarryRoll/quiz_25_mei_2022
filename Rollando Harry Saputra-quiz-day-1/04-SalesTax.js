/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
        if(isNaN(tax) && isNaN(price)){
            return("Price dan Pajak harus dalam angka");
        }else if(isNaN(tax)){
            return("Pajak harus dalam angka");  
        }else if(isNaN(price)){
            return("Price harus dalam angka");  
        }else{
            let harga = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(price);
            let pajak = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(tax);
            let total = price+tax;
            let totalBayar= new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(total);
            return(`Total Sales : ${harga}`)+'\n'+(`Pajak : ${pajak}`)+'\n'+(`Total Harga + Pajak ${totalBayar}`);
        }
}


console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
