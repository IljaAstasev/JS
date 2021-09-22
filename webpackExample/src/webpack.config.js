'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        file: 'bundle.js',
        path: ___dirname + '/dist/js'
    },
    watch: true,

    devtool: "source-map",
    module: {}
};


