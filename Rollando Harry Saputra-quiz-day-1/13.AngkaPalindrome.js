/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka){
    
    let numb = String(angka)
        
    if(isNaN(angka)){
        return(`${angka} is not an number`);
    }
    else if(numb[0]!==numb[3]){
        return(`${numb} is not palindrome`);
    }
    else if(numb[0]===numb[3] && numb[1]===numb[2]){
        return(`${numb} is palindrome`);
    }
    else{
        return(`I dont know about ${numb}`);
        }

    }


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome



// let a=88;
// let b =String(a);
// console.log(b[0]);
// console.log(b[1]);
// console.log(b[0]===b[1]);