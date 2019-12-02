vue-cli3 + koa2 + mongodb


server: 服务端

目录结构:
  - middleware
  - models (数据模块)
  - plugins (数据库连接)
  - routes (路由模块)
    - admin (管理后台路由)
    - web (前台页面路由)
  - public (服务端静态资源访问)
    - admin (管理后台构建后目录)
    - web (前台页面构建后目录)


安装：
  Koa相关： koa koa-router koa-static koa-bodyparser
  数据库相关：mongoose 
  文件夹工具：koa-requireall
  监听工具：nodemon



---

admin: 管理后台

---

web: 前端