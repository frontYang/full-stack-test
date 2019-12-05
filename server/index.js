const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
const bodyParser = require('koa-bodyparser')
const port = 3000

// 连接数据库
require('./plugins/db')()

app.use(bodyParser())

const web = require('./routes/web/index')(app)
const admin = require('./routes/admin/index')(app)
const resourceMiddleware = require('./middleware/resource')

// 装在所有子路由
router.use('/api/admin/:resource', resourceMiddleware(), admin.routes())
// router.use('/api/web/:resource', web.routes())

// 路由挂载
app.use(router.routes()).use(router.allowedMethods())

// 监听
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})