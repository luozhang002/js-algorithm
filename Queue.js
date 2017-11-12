document.write('<h1 style="color:red">Queue</h1>' )

//既然是队列我们需要数组来存储队列总的元素
document.write("关于队列具体请看控制台")
function Queue() {
  //用于存储队列中的内容
  var items = [];

  //进入队列
  this.enqueue = function (element) {
    items.push(element)
  }

  //出队列
  this.dequeue = function() {
    return items.shift()
  }

  //front取出队列首项
  this.front = function() {
    return items[0]
  }

  //队列是否为空
  this.isEmpty = function(){
    return items.length == 0
  }

  //队列大小
  this.size = function(){
    return items.length;
  }
  this.clear = function(){
    items = []
  }
  //print
  this.print =  function(){
    console.log(items.toString())
  }
}
//example
var queue = new Queue();
//入队1
console.log("入队1")
queue.enqueue(1)
//入队2
console.log("入队2")
queue.enqueue(2)
//入队3
console.log("入队3")
queue.enqueue(3)
//打印队列
queue.print()
console.log("出队")
queue.dequeue()
queue.dequeue()
queue.print()

//优先队列实现比如jich




