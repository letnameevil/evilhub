const fileService = require('../service/avatar.service')
class AvatarController {
  async create(ctx, next) {
    const { mimetype, filename, size } = ctx.req.file
    const { id } = ctx.user
    // console.log(filename, mimetype, size, id)
    try {
      const result = await fileService.createAvatar(filename, mimetype, size, id)
    }catch(err) {
      console.log(err)
    }
   
    ctx.body = '成功'
  }

  async create1(ctx, next) {
    const { mimetype, filename, size } = ctx.req.file
    const { id } = ctx.user
    try {
      const result = await fileService.createAvatar1(filename, mimetype, size, id)
    }catch(err) {
      console.log(err)
    }
   
    ctx.body = '成功'
  }
}

module.exports = new AvatarController()
