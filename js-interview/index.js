//判断回文
function judgeHuiWen(str) {
  return str == str.split('').reverse().join('')
}

//整形数组去重
function removeDuplicate(arr) {
  let newArray = [], obj = {},length = arr.length;
  for (let i = 0;i<length;i++) {
    if(!obj[arr[i]]){
      obj[arr[i]] = true;
      newArray.push(arr[i])
    }
  }
  return newArray;
}

//统计一个字符串中出现最多的字母
function findMax(str) {
  if (str.length == 1) {
    return str;
  }
  let charObj = {}
  for (let i= 0;i<str.length;i++) {
    if (!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)]=1;
    } else {
      charObj[str.charAt(i)]+=1;
    }
  }
  let maxStr = "",maxValue = 1;
  for (var k in charObj) {
    if (charObj[k] > maxValue) {
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  return maxChar;
 }

//冒泡排序

function bubbleSort(arr) {
  for (let i = 0;i < arr.length - 1;i++) {
    for (let j = 0;j < arr.length-i-1;j++) {
      if (arr[j] > arr[j+1]) {
        let tem =arr[j];
        arr[j]=arr[j+1];
        arr[j+1] =tem;
      }
    }
  }

  return arr;
}

// 快速排序
function quick(arr) {
  if (arr.length <= 1 ) {
    return arr
  }

  let leftArray = [];
  let rightArray = [];
  let q = arr[0];
  for (let i = 1;i < arr.length;i++) {
    if (arr[i]>q) {
      rightArray.push(arr[i])
    } else {
      leftArray.push(arr[i])
    }
  }
  return [].concat(quick(leftArray),[q],quick(rightArray));
}

//不需要借助第三个临时变量，实现两个变量的交换
function swap（a,b）{
  b=b-a;
  a=a+b;
  b=a-b;
  return [a,b];
}

//斐波纳妾数列
function fibnachi(n) {
 if (n == 1 || n == 2) {
  return 1
 }
 return fibnachi(n-1) + fibnachi(n-2)
}
function sumFibnachi(n) {
  let sum = 0;
  for (let i = 0;i < n;i++) {
    sum  = sum + fibnachi[i]
  }
  return sum;
}
//找出正整数中的最大差值[10,5,11,7,8,9]
function getMaxPro(arr) {
  var minPrice =  arr[0];
  var maxProfit = 0;
  for (var i=0;i<arr.length;i++){
    var currentPrice=arr[i];
    minPrice=Math.min(minPrice,currentPrice);
    var potentialProfit =currenrPrice-minPrice;
    maxProfit=Math.max(maxProfit,potentialProfit);
  }
  return maxProfit;
}

//随机生成指定长度的字符串
function random(n){
   let str='abcdefghijkmnopqrstuvwxyz9876543210';
   let tmp='',
     i=0,
     l=str.length;
  for(i = 0;i < n;i++) {
    tmp += str.charAt(Math.floor(Math.random()*l))
  }
  return tmp;
}



