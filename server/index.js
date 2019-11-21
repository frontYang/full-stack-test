const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
const port = 3000
const webRoutes = require('./routes/web/index')(app).routes()
const adminRoutes = require('./routes/admin/index')(app).routes()

// 装在所有子路由
/* router.use('/', webRoutes)
router.use('/admin', adminRoutes) */

// 路由挂载
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

