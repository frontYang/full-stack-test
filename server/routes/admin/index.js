module.exports = app => {
  const path = require('path')
  const KoaRouter = require('koa-router')
  const static = require('koa-static')
  const router = new KoaRouter()
  const adminPath = path.resolve(__dirname, '../../', 'public')
  const Category = require('../../models/Category')

  // 获取列表
  router.get('/', async(ctx, next) => {
    const queryOptions = {}
    queryOptions.populate = 'parent'
    const list = await Category.find().setOptions(queryOptions)    
    ctx.body = {
      code: 0,
      msg: 'success',
      data: {
        list: list
      }
    }
    next()
  })

  // 新建
  router.post('/', async (ctx, next) => {
    const data = ctx.request.body
    ctx.body = Category.create(data)
    next()
  })

  // 更新
  router.post('/:_id', async (ctx, next)=> {
    let _id = ctx.params._id
    let data = ctx.request.body
    ctx.body = await Category.update({_id}, { $set: data }, {
      runValidators: true
    })
    next()
  })

  // 删除资源
  router.post('/:_id', async (ctx, next)=> {
    let _id = ctx.params._id
    ctx.body = await Category.deleteOne({_id})
    next()
  })

  app.use(static(adminPath))
  return router
}