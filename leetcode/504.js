/**
 * Single ELement for a sorted Array
 * @input [1,1,2,3,3,4,4]
 * @output return 2
 * by 罗章
 * 解题思路:双指针遍历法 i 和 j ，如果a[i] == a[j ] i=i+2 如果不同 i=i+2，然后
 * 然后再去比较a[i]和a[j] 如果不等的话直接return a[i]
  */

function findSingAloneInteger(arr) {
   if(Object.prototype.toString.call(arr)=='[object Array]') {
    let i = 0, j = 1,length = arr.length
    while(i < length && j < length ) {
        if (arr[i] == arr[j]) {
            i = i+2;
        } else {
            j = j+2
            if (arr[i]!=arr[j]) {
                return arr[i]
            }
        } 
        
    }

   } else {
       return "array类型不对"
   }
}

var  m = findSingAloneInteger([4,1,1,2,2,3,3])
console.log(findSingAloneInteger([1,1,2,2,3,3,4]))
console.log(m)
