const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		apiclient: './src/apiclient.js',
		apiclientex: './src/apiclientex.js',
		'appstorage-cache': './src/appstorage-cache.js',
		'appstorage-localstorage': './src/appstorage-localstorage.js',
		'appstorage-memory': './src/appstorage-memory.js',
		cameraroll: './src/cameraroll.js',
		connectionmanager: './src/connectionmanager.js',
		credentials: './src/credentials.js',
		events: './src/events.js',
		fileupload: './src/fileupload.js',
		localassetmanager: './src/localassetmanager.js',
		serverdiscovery: './src/serverdiscovery.js',
		wakeonlan: './src/wakeonlan.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(dist|node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: '[name]',
		libraryTarget: 'umd'
	}
};
