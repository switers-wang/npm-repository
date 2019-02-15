/*
 * Create by lihuiliang@meituan.com
 */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // "modules": 'false',
                "targets": {
                    // "chrome": "71",
                    // "chrome": "41",
                    // "ie": 6,
                    // "chrome": "1",
                    "browsers": ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 6', 'iOS >= 8', 'Android >= 4']
                },
                // 'useBuiltIns': 'usage' | ('entry' | true) | false
                // 'useBuiltIns': 'usage',
                // 'useBuiltIns': 'entry'
            }
        ],
        // '@babel/preset-stage-0'
    ],
    plugins: [
        // ['@babel/transform-runtime', {corejs: 2}],
        '@babel/transform-runtime'
    ]
}
