const path = require('path')

module.exports = {
    devServer :{
        proxy: {
            'api': {
                target:'http://192.168.43.38:8080',
                changeOrigin:true,
                pathRewrite: {
                    'pai': ''
                }
            }
        }
    }
}