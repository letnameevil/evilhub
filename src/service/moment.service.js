const connection = require('../app/database')

class MomentService {
  async pubMoment(content, userId) {
    const statement = `
      INSERT INTO moment (content,user_id) VALUES (?,?)
    `
    const result = await connection.execute(statement, [content, userId])
    return result
  }

  // 根据文章ID查询文章内容以及发布文章的用户信息
  async getDetailById(momentId) {
    const statement = `
    SELECT m.id id, m.content content, m.createAt, m.updateAt updateTime,
    JSON_OBJECT('id',u.id, 'name', u.name) users
    FROM moment m LEFT JOIN users u ON m.user_id = u.id
    WHERE m.id = ?
  `
    const result = await connection.execute(statement, [momentId])
    return result[0]
  }

  async getList(offset, size) {
    const statement = `
    SELECT m.id id, m.content content, m.createAt, m.updateAt updateTime,
    JSON_OBJECT('id',u.id, 'name', u.name) users
    FROM moment m LEFT JOIN users u ON m.user_id = u.id
    LIMIT ?, ?
  `
    const [result] = await connection.execute(statement, [offset, size])
    return result
  }

  async getUserIdByMomentId(MomentId) {
    const statement = `
      SELECT * FORM moment WHERE id = ?
    `
    const result = await connection.execute(statement, [MomentId])
    return result
  }

  async changeMomentById(content,MomentId) {
    const statement = `
    UPDATE moment SET content= ? WHERE id = ?
  `
  const result = await connection.execute(statement, [content,MomentId])
  return result
  }
}

module.exports = new MomentService()
