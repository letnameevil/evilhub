const md5 = require('md5')

const md5password = (password) => {
  return md5(password)
}

const verifyPassword = (password, md5Password) => {
  return md5(password) === md5Password
}

module.exports = {verifyPassword,md5password}
