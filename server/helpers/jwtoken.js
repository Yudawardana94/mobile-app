const jwtoken = require('jsonwebtoken')

module.exports={
    sign : function (val) {
            let token = jwtoken.sign(val,process.env.JWT_SECRET)
            return token
        },
        verify : function (val) {
                try {
                    let isSuccess = jwtoken.verify(val, process.env.JWT_SECRET)
                    if(isSuccess){
                        return jwtoken.verify(val, process.env.JWT_SECRET)
                    }
                    else {
                       throw ({code: 401, message: `Invalid code access`}) 
                    }
                }
                catch {
                    throw ({code : 401, message : `Unauthenticated`})
                }
            }
}