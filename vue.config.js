module.exports = {
    lintOnSave: false,
    publicPath: '/develop-vechain-app-for-beginners',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                // console.log(args)
                args[0].minify = false
                // throw new Error('error')
                return args
            })
    }
}

