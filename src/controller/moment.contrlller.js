const { getList } = require('../service/moment.service')
class MomentController {
  async create(ctx, next) {
    ctx.body = '发表动态成功~'
  }

  async detail(ctx, next) {
    const info = ctx.request.info[0]
    console.log(info)
    ctx.body = {
      message: '获取成功',
      ...info,
    }
  }

  async list(ctx, next) {
    console.log(ctx.query)
    const { offset, size } = ctx.query
    const result = await getList(offset, size)
    ctx.body = '成功'
  }

  async update(ctx, next) {
    if (ctx.request.isChange) {
      ctx.body = '修改了内容~'
    }
  }
}

module.exports = new MomentController()
