const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                "modules": false,
                                "targets": {
                                    // "chrome": "64",
                                    // "chrome": "1",
                                    "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                                },
                            }
                        ]
                    ]
                }
            }
        }
    ],
    mode: 'none',
};