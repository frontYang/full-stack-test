
module.exports = app => {
  const path = require('path')
  const mongoose = require('mongoose')
  const KoaRouter = require('koa-router')
  const static = require('koa-static')
  const router = new KoaRouter()  
  const staticPath = path.resolve(__dirname, '../../', 'public/web')
  const Category = mongoose.model('Category')
  
  
  // 文章列表接口
  router.get('/api/art_list', async(req, res) => {

  })

  // 文章详情列表
  

  app.use(static(staticPath))
  return router
}

