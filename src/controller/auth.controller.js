const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
class AuthController {
  async create(ctx, next) {
    const { name, id } = ctx.request.body
    const token = jwt.sign(
      {
        id,
        name,
      },
      PRIVATE_KEY,
      {
        expiresIn: 60 * 60 * 24,
        algorithm: 'RS256',
      }
    )
    ctx.body = {
      message: '登录成功，欢迎回来',
      id,
      name,
      token
    }
  }
}

module.exports = new AuthController()
