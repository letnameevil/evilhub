const connection = require('../app/database')

class AuthService {
  // async create(user) {
  //   const { name, password } = user
  //   console.log(name, password)
  //   const statement = `INSERT INTO users (name, password) VALUES (?,?);`

  //   const result = await connection.execute(statement, [name, password])

  //   return result
  // }

  async getPasswordByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?`

    const result = await connection.execute(statement, [name])

    return result[0][0]
  }

  // 是否具备修改的权限（很多地方多要用到）
  async checkMoment(momentId) {
    const statement = `
      SELECT * FROM moment WHERE id = ?;
    `
    const result = await connection.execute(statement, [momentId])
    const ret = result[0][0]
    return ret
  }
}

module.exports = new AuthService()
