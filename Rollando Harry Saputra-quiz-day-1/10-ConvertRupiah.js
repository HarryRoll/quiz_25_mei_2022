/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    if(type===''){
        return('no match type currency');
    }else if(type==='yen'){
        let yenKurs=130.12;
        let conv = money*yenKurs;
        let konversi = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(conv);
        return(`${money} ${type} = ${konversi}`);
    }else if(type==='usd'){
        let dollKurs=14382.5;
        let conv = money*dollKurs;
        let konversi = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(conv);
        return(`${money} ${type} = ${konversi}`);
    }else if(type==='euro'){
        let euroKurs=16000;
        let conv = money*euroKurs;
        let konversi = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(conv);
        return(`${money} ${type} = ${konversi}`);
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency