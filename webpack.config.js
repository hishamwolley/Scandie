const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	// File location bundle
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
	},
	devServer: {
		port: 3000,
		contentBase: ["./public"],
		watchContentBase: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack", "url-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({ template: "./public/index.html" }),
		// new CopyWebpackPlugin([{ from: "public" }]),
	],
};
