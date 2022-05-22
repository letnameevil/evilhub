const Router = require('koa-router')

const { create, avatarInfo,biaogeInfo } = require('../controller/user.controller')

const { verifyUser, handlePassword } = require('../middleware/user.middleware')

// 路径  和中间件处理的映射
const userRouter = new Router()

userRouter.post('/singin', verifyUser, handlePassword, create)

// 访问用户头像
userRouter.get('/users/:userId/avatar', avatarInfo)

// 获取表格
userRouter.get('/users/:userId/biaoge', biaogeInfo)
module.exports = userRouter
