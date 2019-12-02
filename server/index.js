const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
const bodyParser = require('koa-bodyparser')
const port = 3000

// 连接数据库
require('./plugins/db')()

const webRoutes = require('./routes/web/index')(app).routes()
const adminRoutes = require('./routes/admin/index')(app).routes()

// 装在所有子路由
router.use('/api/web/:resource', webRoutes)
router.use('/api/admin/:resource', adminRoutes)

app.use(bodyParser())

// 路由挂载
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})