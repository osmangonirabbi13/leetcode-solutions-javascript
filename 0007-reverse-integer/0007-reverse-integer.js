/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
     let xCopy = x
    x = Math.abs(x)
     let reversed = 0

     while (x > 0){
        let lastDigit = x % 10
        reversed = (10 * reversed) + lastDigit
        x = Math.floor(x / 10)
     }

     let limit = 2**31

     if (reversed < -limit || reversed > limit) return 0

     if (xCopy < 0 ) {
        return -reversed
     }else {
        return reversed
     }
};