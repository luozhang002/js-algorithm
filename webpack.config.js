module.exports = {
  devtool: 'eval-source-map',
  entry: {
    Array:'./Array.js',
    Stack:'./Stack.js',
    Quene:'./Queue.js',
    LinkList:'./LinkList.js'
  },
  output: {
    filename: './dist/[name].js'
  }
};