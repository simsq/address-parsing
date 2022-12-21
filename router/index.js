const express = require('express') 
const router = express.Router() 

// 导入用户路由处理函数模块 
const indexHandler = require('../service_handler/index') 
// 处理登录请求的映射关系 
router.get('/v1/address/parsing', indexHandler.parsing) 
 
module.exports = router