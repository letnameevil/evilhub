const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const { create, detail, list, update } = require('../controller/moment.contrlller')
const { pubMoment, getDetail, checkAut,updateContent } = require('../middleware/moment.middleware')
const userRouter = new Router({ prefix: '/moment' })

userRouter.post('/', verifyAuth, pubMoment, create)
userRouter.get('/list', list)
userRouter.get('/:momentId', getDetail, detail)
// 修改文章
userRouter.patch('/:momentId', verifyAuth, checkAut,updateContent, update)
// 修改文章
/* 
  1. 用户必须登录（授权）------ 不能修改别人的内容
*/

module.exports = userRouter
