document.write('<h1 style="color:red">DoublyLindedList</h1>' )
document.write('关于双链表具体可查看控制台' )

function DoublyLindedList(){
  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  var length = 0;
  var head = null;
  var tail = null;

  //这里定义方法
  this.insert = function(position,element) {
    if(position >= 0 && position <= length ) {
      var node = new Node(element),
      current = head,
      previous,
      index = 0
      if(!head){
        head = node;
        tail = node;
      }else {
        node.text = current;
        current.prev = node;
        head = node;
      }
    } else if(position === length) {
      current = tail;
      current.next = node;
      node.prev = current;
      tail = node;
    } else {
      while(index++ < postion) {
        previous = current;
        current = currrent.next;
      }
      node.text = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    length++;
    return true;
  } else {
    return false;
  }
}