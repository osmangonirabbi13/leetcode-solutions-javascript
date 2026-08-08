/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let write = 0 

    for(let read= 0 ; read < nums.length ; read++){
        if(nums[read] != 0){
            let temp = nums[read]
            nums[read] = nums[write]
            nums[write] = temp

            write++
        }
    }
};