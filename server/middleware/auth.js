module.exports =  options =>{
    const jwt = require('jsonwebtoken')
   const AdminUser = require('../models/AdminUser')
   const assert = require('http-assert')
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,"非法入侵，虽远必诛")
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id,401,"你玩尼玛呢")
        req.user = await AdminUser.findById(id)
        assert(req.user,401,'请先登录')
        await next()
     }
}