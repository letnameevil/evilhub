const MomentService = require('../service/moment.service')
const AuthService = require('../service/auth.service')
const errorTypes = require('../constants/error-types')
const pubMoment = async (ctx, next) => {
  const content = ctx.request.body.content
  const userId = ctx.user.id
  const result = await MomentService.pubMoment(content, userId)
  // 如果获取失败可以在这里做处理
  await next()
}

const getDetail = async (ctx, next) => {
  // console.dir(ctx.params.momentId)
  const id = ctx.params.momentId
  const result = await MomentService.getDetailById(id)
  ctx.request.info = result
  await next()
}

const checkAut = async (ctx, next) => {
  const id = ctx.params.momentId
  const user_id = ctx.user.id
  const result = await AuthService.checkMoment(id)
  // 这里拿到的是通过momentid 查询出来的外键id
  // console.log(result.id)
  if (user_id === result.user_id) {
    await next()
  } else {
    const error = new Error(errorTypes.UNPREMISSION)
    ctx.app.emit('error', error, ctx)
  }
}

// 权限验证通过后修改内容
const updateContent = async (ctx, next) => {
  const id = ctx.params.momentId
  const content = ctx.request.body.content

  const ret = await MomentService.changeMomentById(content, id)
  ctx.request.isChange = true
  await next()
}

module.exports = { pubMoment, getDetail, checkAut,updateContent }
