const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
// 执行完了以后 .env 文件中的变量就会注入到process.env 中
dotenv.config()

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../key/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../key/public.key'))
module.exports = { 
  APP_PORT, 
  MYSQL_HOST, 
  MYSQL_PORT, 
  MYSQL_DATABASE, 
  MYSQL_ROOT, 
  MYSQL_PASSWORD
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
