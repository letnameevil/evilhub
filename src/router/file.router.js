const Router = require('koa-router')
const multer = require('koa-multer')
// const multiparty = require('multiparty')

const { saveAva } = require('../service/user.service')

const avatarUpload = multer({
  dest: './upload/avatar',
})

const avatarHandler = avatarUpload.single('avatar')

const saveAvatar = async (ctx, next) => {
  console.log(ctx.req.file, '----------------',ctx.user.id)
  
  const result = saveAva(`http://localhost:8888/users/${ctx.user.id}/avatar`,ctx.user.id)
  await next()
}

const saveBiaoge = async (ctx, next) => {
  console.log(ctx.req.file, '----------------',ctx.user.id)
  
  // const result = saveAva(`http://localhost:8888/users/${ctx.user.id}/avatar`,ctx.user.id)
  await next()
}

const { create,create1 } = require('../controller/avatar.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatar, create)
fileRouter.post('/biaoge', verifyAuth, avatarHandler, saveBiaoge, create1)

module.exports = fileRouter
