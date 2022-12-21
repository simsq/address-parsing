// 导入 express 模块 
const express = require('express')
const cors = require('cors')
const indexRouter = require('./router/index');
// 创建 express 的服务器实例 
const app = express()

// 组件配置 ​ 
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(indexRouter);

// 调用 app.listen 方法，指定端口号并启动web服务器 
app.listen(8866, function () {
    console.log('server is running at http://127.0.0.1:8866')
})