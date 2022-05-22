const errorTypes = require('../constants/error-types')
const service = require('../service/user.service')
const {md5password} = require('../untils/password-handle')
const verifyUser = async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body

  // 判断用户名和密码都不能为空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户名是否已经存在
  const result = await service.getUserByName(name)

  if (result[0].length !== 0) {
    const error = new Error(errorTypes.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const handlePassword = async (ctx, next) => {
  let { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}

module.exports = { verifyUser, handlePassword }
