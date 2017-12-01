document.write('<h1 style="color:red">Sort</h1>' )
document.write('关于单链表具体可查看控制台' )

//定义这么一个类，把所有的排序算法全部加到这个类上
function ArrayList() {
  var array = [];

  this.insert = function(item) {
    array.push(item)
  }

  this.toString = function() {
    return array.join();
  }

  this.bubbleSort = function(array) {

  }
}