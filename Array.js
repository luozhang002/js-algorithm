// begin
document.write("JS-Algothirm Begin"+"<br/>")
document.write('<h1 style="color:red">Array</h1>' )
//求斐波那契数列的前n个数值
var Fibnacio = []
Fibnacio[0] = 1
Fibnacio[1] = 1
for(i = 2;i<20;i++) {
  Fibnacio[i] = Fibnacio[i-1]+Fibnacio[i-2]
}
for (var i = 0;i<20;i++) {
 // console.log(i)
}

//遍历数组向后移动或则利用Array.prototype.unshift
var numbers = [0,1,2,3,4,5,6,7,8];
for (var i=numbers.length; i>=0; i--){
    numbers[i] = numbers[i-1];
}
numbers[0] = -1;
document.write("数组插入头部后numbers:" + numbers + "<br/>")

//遍历输出二维矩阵
var a=[]
a[0]=[1,2,3,4]
a[1]=[5,6,7,8]
document.write("二维矩阵遍历输出：")
for(var i=0;i<a.length;i++){
  for(j=0;j<a[i].length;j++) {
    document.write(a[i][j]+ ",")
  }
}
document.write("<br/>")

//任意类型对象排序

var friends = [
{
  name:'John',
  age:30
},
{
  name:'Ana',
  age:20
},
{
  name:'Chris',
  age:25
}
]

function compare(a,b) {
  return a.age - b.age;
}

friends.sort(compare)
document.write("按照年龄排序后的数组:"+ friends)
console.log(friends.sort(compare));

//特殊情况排序
var specialArray = ["Ana", "ana", "John", "john"]
function sepcompare(a,b) {
  return a.toLowerCase() - b.toLowerCase()
}
document.write("<br/>" +"specailArray排序后的结果如下"+ specialArray.sort(sepcompare) + "<br/>")
console.log(specialArray.sort(sepcompare))




