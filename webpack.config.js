module.exports = {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-lodaer'
            ]
        },
        {
            test: /\.(svg|png|jpg|jpeg)/,
            use: {
                loader: 'url-loader'
            }
        }
    ]
}