const service = require('../service/user.service')
const fs = require('fs')
const path = require('path')
class UserController {
  async create(ctx, next) {
    // ctx.request.body 中拿请求参数
    const user = ctx.request.body

    // 查询数据
    const ret = await service.create(user)
    // 返回结果
    ctx.body = '可以的'
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params

    const avatarInfo = await service.getAvaById(userId)

    console.log(avatarInfo)

    /* 
    {
  id: 1,
  filename: 'a82a8e155b37478aa5350f372e059f2c',
  mimetype: 'image/jpeg',
  size: 14980,
  user_id: 27,
  createAt: 2022-04-07T13:34:24.000Z,
  updataAt: 2022-04-07T13:34:24.000Z
}
    */
   console.log(path.join(__dirname, '../../upload/avatar'))
    ctx.response.set('Content-Type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(path.join(__dirname, '../../upload/avatar' + '/' + avatarInfo.filename))
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params

    const avatarInfo = await service.getAvaById(userId)

    console.log(avatarInfo)

   console.log(path.join(__dirname, '../../upload/avatar'))
    ctx.response.set('Content-Type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(path.join(__dirname, '../../upload/avatar' + '/' + avatarInfo.filename))
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params

    const avatarInfo = await service.getAvaById(userId)


    ctx.response.set('Content-Type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(path.join(__dirname, '../../upload/avatar' + '/' + avatarInfo.filename))
  }

  async biaogeInfo(ctx, next) {
    const { userId } = ctx.params

    console.log(userId)
    const avatarInfo = await service.getXl(userId)

    console.log(avatarInfo)


    // ctx.response.set('Content-Type',  avatarInfo.mimetype)
    ctx.body = fs.createReadStream(path.join(__dirname, '../../upload/avatar' + '/' + avatarInfo.filename))
  }

 
}

module.exports = new UserController()
