document.write('<h1 style="color:red">LinkList</h1>' )

//创建一个链表

function LinkedList () {

  var Node = function(element) {
    this.element = element;
    this.next= null;
  }

  var length = 0;

  var head = null;

  //向链表尾部添加元素 （1）列表为空 （2）列表不为空
  this.append = function(element) {
    var node = new Node(element),current;
    if(head == null ) {
      head = node;
    } else {
      current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++
  }

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head,
      previous,
      index = 0
      if (position == 0 ) {
        head = current.next;
      }
      while( index++ < position){
        current = current.next;
      }
      previous.next = current.next;
      length--;
      return current.element
    } else {
      return null
    }
  }

  this.insert = function(element) {
    //链表中寻找指定element元素
  }

  this.remove = function (element) {

  }

  this.indexOf = function() {

  }

  this.isEmpty = function(){

  }

  this.size = function() {

  }

  this.toString = function() {

  }

  this.print = function(){

  }
}

//example
var list = new LinkedList();
list.append(15);
list.append(10)
