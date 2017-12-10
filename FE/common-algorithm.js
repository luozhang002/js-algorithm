//该文件主要用于统计和梳理Js面试编程题目

/*
1.判断是否是回文
*/

var checkPalindrom = function(str) {
  return str === str.split('').reverse().join('')
}


/*
2.去掉整形数组中重复的数值
*/
let unique1 = function(arr) {
  let hashTable = {}
  let data = [];
  for (let i=0;i<arr.length;i++) {
    if (!hashTable[arr[i]]) {
      hashTable[arr[i]] = true
      data.push(arr[i])
    }
  }
  return data;
}

/*
3.统计一个字符串中出现最多的字母
*/

var findMaxDuplicateChar = function(str) {
  if (str.length == 1) {
    return str
  }

  //首先把每个数值出现的次数存储在一个对象里
  let charObj = {}
  for (let i = 0;i<str.length;i++) {
    if (!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = i
    } else {
      charObj[str.charAt(i)] += 1;
    }
  }

  //遍历对象，求出对象中最大的值和字母
  let maxChar = '',maxValue = 1;
  for (var k in charObj) {
    if (charObj[k] >=maxValue) {
      maxChar = k;
      maxValue = charObj[k]
    }
  }

  return maxChar
}

/*
4.冒泡排序算法
*/

var bubbleSort = function(arr) {
  for (var i = 0;i< arr.length-1;i++) {
    for (var j = 0;j< arr.length -i;j++) {
      if(arr[j] > arr[j+1]){
        let tem = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tem
      }
    }
  }
  return arr
}


/*
4.快速排序算法
*/

var quickSort = function(arr) {
  if (arr.length <= 1 ) {
    return arr;
  }

  let rightArray = [];
  let leftArray = [];

  let q = arr[0];
  for(let i = 0,l = arr.length;i<l;i++) {
    if (arr[i] > q) {
      rightArray.push(arr[i])
    } else {
      leftArray.push(arr[i])
    }
  }

  return [].contact(quickSort(leftArray),[q],quickSort(rightArray))

}

/*
  5.不用中间变量交换两个字符
*/

var swap = function(a,b) {
  b = b-a;
  a = a+b;
  b = a-b;
  return [a,b]
}

/*
  6.斐波那契数列
*/

var getFibonacci = function(n) {
  var fibarr = [];
  var i = 0;
  while(i<n) {
    if (i<=1) {
      fibarr.push(i)
    } else {
      fibarr.push(fibarr[i-1] + fibarr[i-2])
    }
    i++
  }

  return fibarr;
}


/*
  7.求出下列数组的最大差值
*/

var getMaxProfit  = function(arr) {
  var minPrice = arr[0];
  var maxProfit = 0;

  for (var i = 0;i<arr.length;i++) {
    var currentPrice = arr[i]
    minPrice = Math.min(minPrice,currentPrice);

    var potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit,potentialProfit)
  }

  return maxProfit
}

//推荐网友
function getMaxProfit(arr){
  var minPrice=arr[0];
  var maxPrice=0;
  for(var i=0;i<arr.length;i++){
      if(arr[i]>maxPrice){
          maxPrice=arr[i];
      }
      if(arr[i]<minPrice){
          minPrice=arr[i];
      }
  }
  var Profit=maxPrice-minPrice;
  return Profit;
}

/*
8.随机生成指定长度的字符串
*/

var randomString = function(n) {
  let str = 'abcdefghijklmnopqrstuvwxyz9876543210'
  let tmp = '',
  l=str.length;

  for (var i = 0;i<n;i++) {
    tmp += str.charAt(Math.floor(Math.random()*l))
  }
  return tmp;
}

/*
9.自己实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点？
不允许使用原生提供的 getElementsByClassName querySelectorAll 等原生提供DOM查找函数。
**/
var  queryClassName = function(node, name) {
  var starts = '(^|[\n\r\t\f])',
  ends = '([\n\r\t\f]|$)'
  var array = [],
  regex = new RegExp(starts+name+ends),
  elements = node.getElementsByTagName("*"),
  length = elements.length,
  i=0,
  element;
  while(i<length) {
    element = elements[i]
    if(regex.test(element.className)) {
      array.push(element)
    }
    i +=1
  }

  return array
}

/**
10，用JS实现二叉查找树的数据结构
**/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

}
class BinarySearch() {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let n  = new Node(data,null,null)
    if (!this.root) {
      return this.root  = n
    }

    let currentNode = this.root;
    let parent = null;
    while(1) {
      parrent = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left
        if (currentNode === null) {
          parent.left = n;
          break
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null ) {
          parent.right = n
        }
      }
    }
  }

  remove(data) {
    this.root  = this.removeNode(this.root,data)
  }

  removeNode(node,data) {
    if (node == null) {
      return null
    }

    if (data == node.data) {
      if (node.left == null && node.right == null ) {
        return null
      }

      if (node.left == null) {
        return node.right
      }

      if (node.right == null ) {
        return node.left
      }
      let getSmallest = function(node) {
        let getSmallest = function(node) {
        if(node.left === null && node.right == null) {
          return node;
        }
        if(node.left != null) {
          return node.left;
        }
        if(node.right !== null) {
          return getSmallest(node.right);
        }
      }
      let temNode = getSmallest(node.right);
      node.data = temNode.data;
      node.right = this.removeNode(temNode.right,temNode.data);
      return node;
    } else if (data<node.data) {
      node.left = this.removeNode(node.left,data)
      return node;
    } else {
      node.right = this.reomveNode(node.right,data)
    }
  }

  find(data) {
    var current = this.root;
    while(current != null) {
      if (data = current.data) {
        break
      }
      if (data < current.data ) {
       current = current.left
      } else {
        current = current.right
      }
    }
    return current.data;
  }
}


/*
解释下 Prototypal Inheritance 与 Classical Inheritance 的区别
在类继承中，类是不可变的，不同的语言中对于多继承的支持也不一样，
有些语言中还支持接口、final、abstract 的概念。
而原型继承则更为灵活，原型本身是可以可变的，并且对象可能继承自多个原型。
**/

/*
11.找出整形数组中乘积最大的三个数
[-10, 7, 29, 30, 5, -10, -70];

比较笨的方法分析：greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)

可参考http://blog.csdn.net/u010240385/article/details/77802378 O(n)的解法
*/
var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsorted_array); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sorted_array = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sorted_array.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
      product1 = product1 * sorted_array[x];
  }
  product2 = sorted_array[0] * sorted_array[1] * sorted_array[array_n_element];

  if (product1 > product2) return product1;

  return product2
};

/*
12寻找连续数组中的缺失数字
给定某无序数组，其包含了 n 个连续数字中的 n – 1 个，已知上下边界，要求以O(n)的复杂度找出缺失的数字。
*/
// The output of the function should be 8
var array_of_integers = [2, 5, 1, 4, 9, 6, 3, 7];
var upper_bound = 9;
var lower_bound = 1;

findMissingNumber(array_of_integers, upper_bound, lower_bound); //8

function findMissingNumber(array_of_integers, upper_bound, lower_bound) {

  // Iterate through array to find the sum of the numbers
  var sum_of_integers = 0;
  for (var i = 0; i < array_of_integers.length; i++) {
    sum_of_integers += array_of_integers[i];
  }

  // 以高斯求和公式计算理论上的数组和
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound

  upper_limit_sum = (upper_bound * (upper_bound + 1)) / 2;
  lower_limit_sum = (lower_bound * (lower_bound - 1)) / 2;

  theoretical_sum = upper_limit_sum - lower_limit_sum;

  return (theoretical_sum - sum_of_integers)
}


/*
数组中元素最大差值计算

给定某无序数组，求取任意两个元素之间的最大差值，注意，这里要求差值计算中较小的元素下标必须小于较大元素的下标。譬如[7, 8, 4, 9, 9, 15, 3, 1, 10]这个数组的计算值是 11( 15 – 4 ) 而不是 14(15 – 1)，因为 15 的下标小于 1。
*/

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

findLargestDifference(array);

function findLargestDifference(array) {

  // 如果数组仅有一个元素，则直接返回 -1

  if (array.length <= 1) return -1;

  // current_min 指向当前的最小值

  var current_min = array[0];
  var current_max_difference = 0;

  // 遍历整个数组以求取当前最大差值，如果发现某个最大差值，则将新的值覆盖 current_max_difference
  // 同时也会追踪当前数组中的最小值，从而保证 `largest value in future` - `smallest value before it`

  for (var i = 1; i < array.length; i++) {
    if (array[i] > current_min && (array[i] - current_min > current_max_difference)) {
      current_max_difference = array[i] - current_min;
    } else if (array[i] <= current_min) {
      current_min = array[i];
    }
  }

  // If negative or 0, there is no largest difference
  if (current_max_difference <= 0) return -1;

  return current_max_difference;
}


/*
14 数组中元素乘积

给定某无序数组，要求返回新数组 output ，其中 output[i] 为原数组中除了下标为 i 的元素之外的元素乘积，
要求以 O(n) 复杂度实现：

*/
var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

productExceptSelf(firstArray); // [8, 8, 4, 16]
productExceptSelf(secondArray); // [0, 0, 0, 0]
productExceptSelf(thirdArray); // [12, 12, 8, -12]

function productExceptSelf(numArray) {
  var product = 1;
  var size = numArray.length;
  var output = [];

  // From first array: [1, 2, 4, 16]
  // The last number in this case is already in the right spot (allows for us)
  // to just multiply by 1 in the next step.
  // This step essentially gets the product to the left of the index at index + 1
  for (var x = 0; x < size; x++) {
      output.push(product);
      product = product * numArray[x];
  }

  // From the back, we multiply the current output element (which represents the product
  // on the left of the index, and multiplies it by the product on the right of the element)
  var product = 1;
  for (var i = size - 1; i > -1; i--) {
      output[i] = output[i] * product;
      product = product * numArray[i];
  }

  return output;
}

/**
15数组的交集
*/
var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // [2, 1]

function intersection(firstArray, secondArray) {
  // The logic here is to create a hashmap with the elements of the firstArray as the keys.
  // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
  // If it does exist, add that element to the new array.

  var hashmap = {};
  var intersectionArray = [];

  firstArray.forEach(function(element) {
    hashmap[element] = 1;
  });

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}

/*
16 乱序同字母字符串

给定两个字符串，判断是否颠倒字母而成的字符串，譬如Mary与Army就是同字母而顺序颠倒：
*/
var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}


/**
17.使用两个栈实现入队与出队
*/

var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}


/*
18:判断大括号是否闭合
*/

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

isBalanced(expression);
isBalanced(expressionFalse);
isBalanced("");

function isBalanced(expression) {
  var checkString = expression;
  var stack = [];

  // If empty, parentheses are technically balanced
  if (checkString.length <= 0) return true;

  for (var i = 0; i < checkString.length; i++) {
    if(checkString[i] === '{') {
      stack.push(checkString[i]);
    } else if (checkString[i] === '}') {
      // Pop on an empty array is undefined
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // If the array is not empty, it is not balanced
  if (stack.pop()) return false;
  return true;
}

/**
19 二进制转换
*/

function decimalToBinary(digit) {
  if(digit >= 1) {
    // If digit is not divisible by 2 then recursively return proceeding
    // binary of the digit minus 1, 1 is added for the leftover 1 digit
    if (digit % 2) {
      return decimalToBinary((digit - 1) / 2) + 1;
    } else {
      // Recursively return proceeding binary digits
      return decimalToBinary(digit / 2) + 0;
    }
  } else {
    // Exit condition
    return '';
  }
}

/**
20 二分搜索
*/
function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
  // Value DNE
  if (leftPosition > rightPosition) return -1;

  var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
  if (array[middlePivot] === value) {
    return middlePivot;
  } else if (array[middlePivot] > value) {
    return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
  } else {
    return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
  }
}

/**
21,判断是否为2的指数值
**/

// For the non-zero case:
function isPowerOfTwo(number) {
  // `&` uses the bitwise n.
  // In the case of number = 4; the expression would be identical to:
  // `return (4 & 3 === 0)`
  // In bitwise, 4 is 100, and 3 is 011. Using &, if two values at the same
  // spot is 1, then result is 1, else 0. In this case, it would return 000,
  // and thus, 4 satisfies are expression.
  // In turn, if the expression is `return (5 & 4 === 0)`, it would be false
  // since it returns 101 & 100 = 100 (NOT === 0)

  return number & (number - 1) === 0;
}

// For zero-case:
function isPowerOfTwoZeroCase(number) {
  return (number !== 0) && ((number & (number - 1)) === 0);
}

/**
22统计1的个数
参考http://web.jobbole.com/86266/?utm_source=blog.jobbole.com&utm_medium=relatedPosts
*/

/***
23 十大经典排序算法
http://web.jobbole.com/87968/?utm_source=blog.jobbole.com&utm_medium=relatedPosts
***/


