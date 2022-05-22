const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('../router')

// const userRouter = require('../router/user.router')
// const authRouter = require('../router/auth.router')

// 错误处理
const errorHandler = require('../app/error-handle')

const app = new Koa()

app.use(bodyParser())
useRoutes(app)
// app.use(userRouter.routes())
// app.use(authRouter.routes())

// app.use(userRouter.allowedMethods())
// app.use(authRouter.allowedMethods())

app.on('error', errorHandler)

module.exports = app
