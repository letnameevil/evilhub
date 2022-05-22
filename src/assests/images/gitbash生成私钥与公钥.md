## 公钥与私钥的生成
- openssl
- genrsa -out private.key 1024
- rsa -in private.key -pubout -out public.key

## node 项目中，任何一个地方的相对路径， 都是相对于process.cwd（项目在哪里启动，相对路径就是在根据启动的文件做判断）