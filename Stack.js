//栈在JS里其实可以描述为特殊的数组

document.write('<h1 style="color:red">STACK</h1>' )

function stack(){
  var items = [];

  //定义栈的入栈方法
  this.push = function (element) {
    items.push(element)
  }

  //定义栈的出栈方法
  this.pop = function () {
    return items.pop()
  }

  //栈的大小
  this.size = function () {
    return items.length;
  }

  //获取栈中最后添加的元素
  this.peek = function () {
    return items[items.length-1]
  }

  //判断栈是否为空
  this.isEmpty = function() {
    return items.length
  }

  //清空栈中所有内容
  this.clear = function () {
    items = []
  }

  //为了看出栈中输出的内容可采用输出的方式
  this.print = function () {
    console.log(items.toString())
  }
}
document.write("关于栈请看控制台<br/>") ;
//测试demo
var stack = new stack();
//入栈1
console.log("入栈1")
stack.push(1);
//入栈2
console.log("入栈2")
stack.push(2);
//打印栈
stack.print()
//出栈
console.log("出栈")
stack.pop();
//打印栈
stack.print()

//例子十进制转化为二进制

function divideBy2(decNumber){
  var remStack = new stack(),rem,binaryString = '';
  while (decNumber > 0) {
      rem = Math.floor(decNumber % 2);
      remStack.push(rem);
      decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

//根据十进制转化为二进制，可以把十进制轻松转化为任何进制

function tenToAny(decNumber,base) {
  var remStack = new stack(),
  rem,
  baseString='',
  digits="0123456789ABCDEF";
  while(decNumber > 0) {
    rem = Math.floor(decNumber % base);
    decNumber = Math.floor(decNumber / base);
  }
  while(!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}






