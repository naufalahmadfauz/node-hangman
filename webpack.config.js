const path = require('path')

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    devtool:'source-map'
}