const Router = require('koa-router')

const authRouter = new Router()
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')

const { create } = require('../controller/auth.controller')

authRouter.post('/login', verifyLogin, create)
authRouter.get('/test', verifyAuth, (ctx, next) => {
  console.log(ctx.user)
  ctx.body = '成功'
})

module.exports = authRouter
