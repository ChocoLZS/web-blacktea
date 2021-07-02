process.env.VUE_APP_BASE =
    process.env.NODE_ENV === "production" ? "/" : "/"
module.exports = {
    publicPath: process.env.VUE_APP_BASE,
    devServer: {
        port: 80
    }
}