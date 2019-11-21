module.exports = () => {
  const mongoose = require('mongoose')
  const requireAll = require('koa-requireall')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true
  })

  requireAll(__dirname + '/../models')
}

