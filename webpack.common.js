const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
		clean: true,
	},
  resolve: {
		extensions: ['.js', '.js'],
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
  plugins: [
    new ESLintPlugin({
			extensions: ['.js'],
		}),
    new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
  ],
  module: {
    rules: [
      {
				test: /\/.html$/,
				type: 'asset/resource',
			},
      {
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
      {
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
      {
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
      {
				test: /\.(mp3|wav)$/,
				use: 'file-loader',
			},
      {
				test: /\.(png|jpeg|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/images/[hash][ext][query]',
				},
			},
      {
				test: /\.(ttf|woff|woff2|eot)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[hash][ext][query]',
				},
			},
      {
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
    ]
  }
}