module.exports = app => {
  const path = require('path')
  const KoaRouter = require('koa-router')
  const static = require('koa-static')
  const router = new KoaRouter()
  const adminPath = path.resolve(__dirname, '../../', 'public')

  // 获取列表
  router.get('/', async(ctx, next) => {
    const queryOptions = { }
    if (ctx.req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const list = await ctx.req.Model.find().setOptions(queryOptions)
    ctx.body = {
      code: 0,
      msg: 'success',
      data: {
        list: list
      }
    }
    await next()
  })

  // 新建
  router.post('/', async (ctx, next) => {
    const data = ctx.request.body
    ctx.body = ctx.req.Model.create(data)
    await next()
  })

  // 更新
  router.post('/:_id', async (ctx, next)=> {
    let _id = ctx.params._id
    let data = ctx.request.body
    ctx.body = await ctx.req.Model.update({_id}, { $set: data }, {
      runValidators: true
    })
    await next()
  })

  // 删除资源
  router.post('/:_id', async (ctx, next)=> {
    let _id = ctx.params._id
    ctx.body = await ctx.req.Model.deleteOne({_id})
    await next()
  })   
  app.use(static(adminPath)) 
  return router
}