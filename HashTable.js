document.write('<h1 style="color:red">HashTable集合</h1>' )
document.write('关于HashTable集合可查看控制台:无序集合，我们是用对象并不是用数组表示' )

// require('./LinkList.js')

//定义链表
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
  // 从指定位置移除元素
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head,
      previous,
      index = 0
      if (position == 0 ) {
        head = current.next;
      }
      while( index++ < position){
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      length--;
      return current.element
    } else {
      return null
    }
  }
  //在任意位置插入元素
  this.insert = function(position,element) {
    if (position >= 0 && position <=length) {
      var node = new Node(element),
      current=head;
      previous,
      index=0;

      if (position  == 0 ) {
        node.next = current;
        head = node;
      } else {
        while (index++ <postion) {
          previous = current;
          current = current.next;
        }

        node.text = current;
        previous.next = node;
      }

      length++;

      return true;

    } else {
      return false;
    }
  }

  this.isEmpty = function(){
    return length === 0;
  }

  this.size = function() {
    return length;
  }

  this.toString = function() {
    var current = head,
    string='';
    while(current) {
      string = current.element;
      current = current.next;
    }
    return string;
  }

   this.indexOf = function(element) {
    var current = head,
    index =-1
    while(current) {
      if(element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }


  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.getHead = function() {
    return head;
  }

  this.print = function(){

  }
}

function HashTable () {
  var table = []

  //hash函数
  var loseloseHashCode = function (key ) {
    var hash = 0;
    for(var i = 0;i<key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37;
  }

  this.put = function(key,value) {
    // before
    // var position = loseloseHashCode(key);
    // console.log(position + ' - ' + key);
    // table[position] = value

    // now
    var position = loseloseHashCode(key);
    if (table[position] == undefined ) {
      table[position] = new LinkedList();
    }
    console.log(position + ' - ' + key);
    table[position].append(new ValuePair(key,value))
  }

  this.get = function(key) {
    // before
    // return table[loseloseHashCode(key)]

    // now
    var position = loseloseHashCode(key);

    if (table[position] !== undefined ) {
      var current = table[position].getHead();

      while(current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }

      if (current.element.key === key) {
        return current.element.key
      }
    }
    return undefined
  }

  this.remove = function(key) {
    //before
    // table[loseloseHashCode(key)] = undefined

    // now
    var position  = loseloseHashCode(key)
    if (table[postion] !== undefined ) {

      var current  = table[postion].getHead();
      while(current.next) {
        if (current.element.key === key){
          table[postion].remove(current.element);
          if (table[postion].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }

      //检查是否为第一个或者最后一个元素
      if(current.element.key === key) {
        table[postion].remove(current.element);
        if (table[positon].isEmpty()){
          table[position] = undefined
        }
        return true
      }
    }

    return false
  }

  this.print = function() {
    for (var i = 0;i<table.length;i++) {
      if (table[i] !== undefined) {
        console.log(i+ ": " + table[i])
      }
    }
  }

  var ValuePair = function(key,value) {
    this.key = key;
    this.value = value;
    this.toString = function(){
      return '['+ this.key + ' - ' + this.value + ']'
    }
  }
}



//使用
var hash = new HashTable();
hash.put("xiaoluo","xiaoluo@meili-inc.com")
hash.put("luozhang","luozhang@meili-inc.com")
hash.put("zhangxueyou","zhangxueyou@meili-inc.com")

console.log(hash.get("xiaoluo"))
console.log(hash.get("zhangxueyou"))

hash.remove("xiaoluo");
console.log(hash.get("xiaoluo"))

//处理散列冲突

var hashA = new HashTable();
hashA.put("Gandalf","gandalf@meili-inc.com")
hashA.put("John","john@meili-inc.com")
hashA.put("Tyrion","tyrion@meili-inc.com")
hashA.put("Aaron","aaron@meili-in.com")
hashA.put("Donnie","donnie@meili-inc.com")
hashA.put("Ana","ana@meili-inc.com")
hashA.put("Jonathan","jonathan@meili-inc.com")
hashA.put('Jamie',"jamie@meili-inc.com");
hashA.put('Sue',"sue@meili-inc.com")
hashA.put("Mindy","mindy@meili-inc.com")
hashA.put("Paul","paul@meili-inc.com")
hashA.put("Nathan","nathan@meili-inc.com")

hashA.print()

//上述print方法后数据丢失，解决散列冲突的方法：分离链接、线性探测 、 双散列法
/*
  分离链接：每个位置存储一条单链表 然后重写put get and remove 目前参考代码均为分离链接
*/

//线性探测没写
