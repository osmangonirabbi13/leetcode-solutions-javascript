/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false ;
    }

     const originalNumber = x;
     let reversedNumber = 0;

     while (x > 0 ){
        const lastDigit = x % 10;

        reversedNumber = reversedNumber * 10 + lastDigit;

        x = Math.floor(x / 10)
     }

      return originalNumber === reversedNumber;
};