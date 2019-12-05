module.exports = options => {  
  return async (ctx, next) => {
    const modelName = require('inflection').classify(ctx.params.resource)
    ctx.req.Model = require(`../models/${modelName}`)
    await next() // tip：必须加await 才能往下执行，不然访问接口为404
  }
}