const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message

  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      message = '用户名或者密码不能为空'
      break
    case errorTypes.USER_ALREADY_EXISTS:
      status = 400
      message = '用户已存在'
      break
    case errorTypes.USER_NOT_EXISTS:
      status = 400
      message = '用户不存在'
      break
    case errorTypes.PASSWORD_WRONG:
      status = 400
      message = '密码错误'
      break
    case errorTypes.UNAUTHORIZATION:
      status = 401
      message = 'token无效'
      break
    case errorTypes.UNPREMISSION:
      status = 401
      message = '没有权限'
      break
    default:
      status = 404
      message = 'NOT FOUND'
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
