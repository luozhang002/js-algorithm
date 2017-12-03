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
    HashTable:'./HashTable.js'
  },
  output: {
    filename: './dist/[name].js'
  }
};