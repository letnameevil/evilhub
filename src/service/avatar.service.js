const connection = require('../app/database')

class FileService {
  async createAvatar(filename, mimetype, size, user_id) {
    console.log(filename, mimetype, size, user_id)
    const statement = `
      INSERT INTO avatar (filename,mimetype,size, user_id) VALUES (?,?,?,?)
    `
    const [result] = await connection.execute(statement, [filename, mimetype, size, user_id])
    return result
  }

  async createAvatar1(filename, mimetype, size, user_id) {
    console.log(filename, mimetype, size, user_id)
    const statement = `
      INSERT INTO xlxs (filename,mimetype,size, user_id) VALUES (?,?,?,?)
    `
    const [result] = await connection.execute(statement, [filename, mimetype, size, user_id])
    return result
  }
}

module.exports = new FileService()
