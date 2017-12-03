document.write('<h1 style="color:red">Dictionary</h1>' )
document.write('关于Dictionary集合可查看控制台:无序集合，我们是用对象并不是用数组表示' )

function Dictionary() {
  var items = {}

  //has

  this.has = function (key) {
    return key in items
  }

  this.set = function(key,value) {
    items[key] = value;
  }

  this.remove= function (key ) {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }


  this.get = function (key) {

    return this.has(key) ? items[key] : undefined

  }

  this.values = function() {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }
    return values;
  }

  this.clear = function () {
    items = {}
  }

  this.size = function () {
    return Object.keys(items).length
  }

  this.getItems = function() {
    return items
  }
}


var dictionary = new Dictionary();
dictionary.set("xiaoluo","xiaoluo@meili-inc.com")
dictionary.set("luozhang","luozhang@meili-inc.com");
console.log("dictionary对象：")
console.log( dictionary.getItems())
console.log("xiaoluo是否存在:" + dictionary.has("xiaoluo"))
console.log("dictionary大小：" + dictionary.size() )

dictionary.remove("xiaoluo")

console.log( dictionary.getItems())
console.log("xiaoluo是否存在:" + dictionary.has("xiaoluo"))
console.log("dictionary大小：" + dictionary.size() )





