module.exports = () => {
  const path = require('path')
  const mongoose = require('mongoose')
  const requireAll = require('require-all')

  // 连接 mongodb
  mongoose.connect('mongodb://127.0.0.1:27017/full-stack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // 连接状态提示
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('connection success...')
  })

  // Schema
  requireAll(path.resolve(__dirname, '..', 'models'))
}