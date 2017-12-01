document.write('<h1 style="color:red">Search</h1>' )
document.write('关于查找请看控制台')

function basicSearch(arr,key) {
  var length = arr.length;
  for(var i = 0;i< length;i++) {
    if (arr[i] == key ) {
      return i
    }
  }
}

function optimizeBasicSearch(arr,key) {
  arr[0] = key;
  var i = arr.length-1
  while(arr[i]!=key) {
    i--
  }
  return i
}