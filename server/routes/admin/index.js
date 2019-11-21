module.exports = app => {
  const path = require('path')
  const KoaRouter = require('koa-router')
  const static = require('koa-static')
  const router = new KoaRouter()
  const adminPath = path.resolve(__dirname, '../../', 'public')

  
  
  app.use(static(adminPath))
  return router
}
