const app = require('./app')

const config = require('./app/config.js')

const connection = require('./app/database')

app.listen(config.APP_PORT, () => {
  console.log(`服务启动在${config.APP_PORT}端口`)
})
