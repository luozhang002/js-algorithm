document.write('<h1 style="color:red">Graph</h1>' )
document.write('关于Graph具体可查看控制台' )

//所有的实例均采用邻接表表示
//dictionary key：顶点的名字, value是邻接顶点
import {Dictionary} from './Dictionary.js'
function Graph() {

  var vertices = [];
  var adjList = new Dictionary()

  //add 顶点
  this.addVertex = function(v) {
    vertices.push(v)
    adjList.set(v,[])
  }

  //add edge
  this.addEdge = function(v,w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v);
  }

  // tostring
  this.toString = function() {
    var s = '';
    for (var i = 0;i<vertices.length;i++) {
      s += vertices[i] + '->';
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0;j<neighbors.length;j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }

    return s

  }

}

//测试下这段代码
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']
for (var i = 0 ;i < myVertices.length ;i++) {
  graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString())
