const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');


module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		open: true,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
})
