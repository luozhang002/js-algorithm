document.write('<h1 style="color:red">Tree二叉树</h1>' )
document.write('关于二叉树集合可查看控制台' )

//Tree.js
//二叉树和二叉搜索树应用比较广泛

//定义二叉搜索树类
function BinarySearchTree () {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;

  //二叉搜索树要实现的方法

  //插入节点
  this.insert = function (key) {
    var newNode = new Node(key);

    if (root == null) {
      root = newNode
    } else {
      insertNode(root ,newNode)
    }
  }

  var insertNode = function(node ,newNode){
    if(newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left,newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      }else {
        insertNode(node.right,newNode)
      }
    }
  }

  //中序遍历

  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root,callback);
  }

  var inOrderTraverseNode = function(node,callback) {
    if (node!=null) {
      inOrderTraverseNode(node.left,callback);
      callback(node.key);
      inOrderTraverseNode(node.right,callback);
    }
  }

  // 先序遍历

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root,callback);
  }

  var preOrderTraverseNode = function(node,callback) {
    if (node!=null) {
      callbakc(node.key);
      preOrderTraverseNode(node.left,callback);
      preOrderTraverseNode(node.right,callback);
    }
  }

  //后序遍历
  this.postOrderTraverse  =function(callback) {
    postOrderTraversNode(root,callback)
  }

  var postOrderTraversNode = function(node,callback) {
    if (node !==null ) {
      postOrderTraversNode(node.left,callback);
      postOrderTraversNode(node.right,callback)
      callback(node.key)
    }
  }


  //获取树中最小的节点
  this.min = function() {
    return minNode(root)
  }

  var minNode = function(node) {
    if (node) {
      while(node && node.left!== null) {
        node  = node.left
      }
      return node.key
    }

    return null;
  }


  //获取树中最大的节点
  this.max = function(){
    return maxNode(root)
  }

  var maxNode = function(node) {
    if(node) {
      while(node && node.right!==null) {
        node =node.right;
      }
     return node.key
    }
    return null
  }

  //搜索树中特定节点的值

  this.search = function(key) {
    return searchNode(root,key)
  }

  var searchNode = function(node,key) {
    if (node == null) {
      return false
    }

    if (key < node.key ) {
      return searchNode(node.left,key)
    } else if (key > node.key) {
      return searchNode(node.right,key)
    }else {
      return true
    }
  }

  this.remove = function(key) {
    removeNode(root,key)
  }

  var removeNode = function(node,key) {
    if (node == null ) {
      return null
    }

    if (key < node.key) {
      node.left = removeNode(node.left,key)
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right,key)
      return node
    } else { //node.key === key

      //只有一个叶子节点
      if (node.left == null || node.right == null) {
        node = null
        return node;
      }

      //一个只有一个子节点的节点
      if(node.left === null ) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //一个有两个字节点的节点
      var aux = finMinNode(node.right)
      node.key = aux.key ;
      node.right = removeNode(node.right,aux.key)
      return node


    }

  }




}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15)
tree.insert(5);
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(18)
tree.insert(25)
console.log(tree.search(15))