'use strict';
var webpack = require('webpack');
module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'wpk/bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			}
		})
	]
};
