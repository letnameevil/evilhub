const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    console.log(name, password)
    const statement = `INSERT INTO users (name, password) VALUES (?,?);`

    const result = await connection.execute(statement, [name, password])

    return result
  }

  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?`

    const result = await connection.execute(statement, [name])

    return result
  }

  async getAvaById(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ? ORDER BY id DESC LIMIT 1`

    const [result] = await connection.execute(statement, [userId])
    return result[0]
  }

  async saveAva(avatar_url,id) {
    const statement = `UPDATE users SET avatar_url=? WHERE id = ?`

    console.log(avatar_url,id)
    const [result] = await connection.execute(statement, [avatar_url, id])
    return result[0]
  }

  async saveXl(avatar_url,id) {
    const statement = `UPDATE users SET xlxs_url=? WHERE id = ?`

    const [result] = await connection.execute(statement, [avatar_url, id])
    return result[0]
  }

  async getXl(userId) {
    const statement = `SELECT * FROM xlxs WHERE user_id = ? ORDER BY id DESC LIMIT 1`

    const [result] = await connection.execute(statement, [userId])
    return result[0]
  }
}

module.exports = new UserService()
