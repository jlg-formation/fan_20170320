'use strict';
const webpack = require('webpack');
const path = require('path');
module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'wpk/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: ['babel-loader', 'ng-annotate-loader']
		}, {
			test: /\.html$/,
			use: [{
				loader: 'ngtemplate-loader',
				options: {
					relativeTo: 'app'
				}
			}, {
				loader: 'html-loader',
				options: {
					attrs: 'img-svg:src',
					root: path.resolve('./app')
				}
			}]
		}]
	},
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compress: {
	// 			warnings: false,
	// 		},
	// 		output: {
	// 			comments: false,
	// 		}
	// 	})
	// ]
};
