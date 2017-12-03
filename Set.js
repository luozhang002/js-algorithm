document.write('<h1 style="color:red">Set集合</h1>' )
document.write('关于Set集合可查看控制台:无序集合，我们是用对象并不是用数组表示' )

//定义集合结构
function Set() {
  var items = {}

  //has(value)如果数值在集合中返回Value，否则返回false
  this.has = function(value) {
    // return value in items
    return items.hasOwnProperty(value)
  }

  //add  向集合中添加一个项
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true
    }
    return false
  }

  //remove
  this.remove = function(value) {
    if(this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  //clear
  this.clear = function () {
    items = {}
  }

  //size 1 现代浏览器
  this.size = function() {
    return Object.keys(items).length;
  }
  //size2 通用浏览器
  this.sizeLegacy = function() {
    var count = 0;
    for (var prop in items) {
      if (items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count
  }

  //现代浏览器
  this.values = function () {
    return Object.keys(items)
  }

  //通用浏览器
  this.valuesLegacy = function(){
    var keys = [];
    for (var key in items) {
      keys.push(key);
    }
    return keys;
  }

  //union并集
  this.union  = function(otherSet) {
    var unionSet = new Set();

    var values = this.values();
    for (var i = 0;i<values.length;i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var i = 0;i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet;
  }

  //intersection 交集

  this.intersection  = function(otherSet) {

    var intersectionSet = new Set();

    var values = this.values();

    for (var i = 0 ;i<values.length;i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  //差集 difference
  this.difference  = function(otherSet) {
    var differenceSet = new Set()

    var values = this.values();

    for (var i = 0;i<values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet;
  }

  //子集
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      var values = this.values();
      for (var i = 0 ;i < values.length; i++ ) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}

//实例
var set  = new Set();
set.add(1);
console.log(set.values())
console.log(set.has(1))
console.log(set.size())

set.add(2)
console.log(set.values())
console.log(set.has(2))
console.log(set.size())

set.remove(1)
console.log(set.values())

set.remove(2)
console.log(set.values())


//union

var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set()
setB.add(3);
setB.add(4)

var unionAB = setA.union(setB)
console.log("setA和setB的并集： "+unionAB.values())


//intersection

var A = new Set();
A.add(1);
A.add(2);
A.add(3)
var B= new Set();
B.add(2);
B.add(4);
B.add(3);

var AB = A.intersection(B);
console.log("A和B的交集：  "+ AB.values() )

var C = new Set()
C.add(1)
C.add(2);
C.add(3)

var D = new Set();
D.add(2);
D.add(3);
D.add(4)

var CD = C.difference(D)
console.log("C和D的差集： " + CD.values())


var E = new Set();
E.add(1);
E.add(2);

var F = new Set();
F.add(1);
F.add(2);
F.add(3);

var G = new Set();
G.add(2)
G.add(3);
G.add(4)

console.log(E.subset(F))
console.log(E.subset(G))