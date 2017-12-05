document.write('<h1 style="color:red">Search</h1>' )
document.write('关于查找请看控制台')

function ArrayList() {
  var array = [];
  this.insert = function(item) {
    array.push(item)
  }

  this.toString = function () {
    return array.join();
  }

  this.bubbleSort  = function () {
    var length = array.length;
    for (var i = 0;i< length;i++) {
      for (var j= 0 ;j< length;j++) {
        if (array[j] > array[j+1]) {
          swap(j,j+1)
        }
      }
    }
  }

  //改进后的冒泡排序算法
  this.modifiedBubbleSort = function () {
    var length = array.length;
    for (var i =0;i < length;i++) {
      for(var j= 0;j< length-i;j++){
        if (array[j] > array[j+1]) {
          swap(j,j+1)
        }
      }
    }
  }

  //选择排序属于原地址排序
  this.selectionSort = function() {
    var length = array.length,indexMin;
    for (var i = 0;i <length - 1;i++) {
      indexMin = i;
      for (var j = i;j< length;j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }
    }

    if (i != indexMin) {
      swap(i,indexMin)
    }
  }

  //插入排序
  this.insectionSort = function() {
    var length = array.length,j,temp;
    for (var i = 1;i<length;i++) {
      j = i;
      temp = array[i];
      while(j>0 & array[j-1] > temp) {
        array[j] = array[j-1]
        j--
      }
      array[j] = temp
    }
  }


  //归并排序算法
  this.mergeSort = function(){
    array = mergeSortRec(array)
  }

  var mergeSortRec = function(array) {
    var length = array.length
    if (length == 1) {
      return array
    }

    var mid = Math.floor(length/2),
    left = array.slice(0,mid),
    right= array.slice(mid,length)
    return merge(mergeSortRec(left),mergeSortRec(right));
  }

  var merge = function(left,right) {
    var result = [],
    il = 0,
    ir = 0;
    while(il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir+1])
      }
    }

    while(il < left.length) {
      result.push(left[il++])
    }

    while(ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }

  this.quickSort  = function () {
    quick(array,0,array.length - 1)
  }

  var quick = function(array,left,right) {
    var index = 0;
    if (array.length > 1 ) {
      index = partition(array,left,right)

      if (left < index -1 ) {
        quick (array,left,index-1)
      }

      if (index < right ) {
        quick(array,index,right)
      }
    }
  }

  var partition = function(array,left,right) {
    var pivot = array[Math.floor((left+right)/2)],
    i = left,
    j = right;
    while(i <= j) {
      while (array[i] < pivot) {
        i++
      }
      while(i <= j) {
        swapQuickStort(array,i,j);
        i++;
        j--
      }
    }
    return i
  }

  var swapQuickStort = function(array,index1,index2) {
    var aux = array[index1];
    array[index1] = array[index2]
    array[index2] = aux
  }

  this.sequentialSearch  = function(item) {
    for (var i = 0;i<array.length;i++) {
      if (item == array[i]) {
        return i
      }
    }
    return -1
  }

  this.binarySearch  = function(item) {
    this.quickSort();

    var low = 0,high = array.length-1,
    mid,element;
    while(low <= high) {
      mid = Math.floor((low+high)/2);
      element = array[mid];
      if (element < item) {
        low = mid + 1
      } else if (element >item) {
        high = mid -1
      } else {
        return mid
      }
    }
    return -1
  }

  var swap = function(index1,index2) {
    var aux = array[index1];
    array[index1] = array[index2]
    array[index2] = aux
  }
}

//测试1
console.log("冒泡排序测试:")
var list = new ArrayList();
list.insert(19)
list.insert(20);
list.insert(5);
list.insert(6);
list.insert(3)
list.insert(18)
console.log("排序前的结果：" + list.toString)
list.bubbleSort();
console.log("排序后的结果: " + list.toString())

function createNonSortedArray(size) {
  var array = new ArrayList();
  for (var i = size;i>0;i--) {
    array.insert(i)
  }
  return array
}

var array = createNonSortedArray(5)
console.log("排序前的结果：" + array.toString())
array.modifiedBubbleSort();
console.log("排序后的结果: " + array.toString())

console.log("选择排序测试")

var array = createNonSortedArray(5)
console.log("排序前的结果：" + array.toString())
array.selectionSort();
console.log("排序后的结果: " + array.toString())

console.log("插入排序测试")

var array = createNonSortedArray(5)
console.log("排序前的结果：" + array.toString())
array.insectionSort();
console.log("排序后的结果: " + array.toString())

console.log("归并排序测试")

var array = createNonSortedArray(5)
console.log("排序前的结果：" + array.toString())
// array.mergeSort();
console.log("排序后的结果: " + array.toString())

console.log("快速排序测试")
var array = createNonSortedArray(5)
console.log("排序前的结果：" + array.toString())
array.quickSort();
console.log("排序后的结果: " + array.toString())