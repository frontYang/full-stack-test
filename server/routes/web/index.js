
module.exports = app => {
  const path = require('path')
  const mongoose = require('mongoose')
  const KoaRouter = require('koa-router')
  const static = require('koa-static')
  const router = new KoaRouter()  
  const staticPath = path.resolve(__dirname, '../../', 'public/web')

  app.use(static(staticPath))
  return router
}