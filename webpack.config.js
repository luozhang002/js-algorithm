module.exports = {
  devtool: 'eval-source-map',
  entry: {
    Array:'./Array.js',
    Stack:'./Stack.js',
    Quene:'./Queue.js',
    LinkList:'./LinkList.js',
    // DoublyLindedList:'./DoublyLindedList.js',
    Sort:'./Sort.js',
    Set:'./Set.js',
    Dictionary:'./Dictionary.js',
    HashTable:'./HashTable.js',
    Tree:'./Tree.js',
    Graph:'./Graph.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
   ]
  },
};