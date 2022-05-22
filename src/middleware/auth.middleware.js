const jwt = require('jsonwebtoken')
const errorTypes = require('../constants/error-types')
const service = require('../service/user.service')
const authService = require('../service/auth.service')
const { verifyPassword } = require('../untils/password-handle')
const { PUBLIC_KEY } = require('../app/config')
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判断用户名和密码都不能为空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户是否有被注册过（是否存在）
  const result = await service.getUserByName(name)

  if (result[0].length === 0) {
    const error = new Error(errorTypes.USER_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户名，密码是否一致
  const ret = await authService.getPasswordByName(name)

  if (!verifyPassword(password, ret.password)) {
    const error = new Error(errorTypes.PASSWORD_WRONG)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.request.body.id = ret.id

  await next()
}

const verifyAuth = async (ctx, next) => {
  // 获取token
  const authorization = ctx.headers.authorization

  if (!authorization) {
    const error = new Error(errorTypes.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }

  const token = ctx.headers.authorization.replace('Bearer ', '')
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'],
    })
    // console.log(result)
    ctx.user = result
    await next()
  } catch (err) {
    const error = new Error(errorTypes.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth,
}
